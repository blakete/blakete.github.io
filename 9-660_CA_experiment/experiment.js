/**
 * CA Rule Inference Experiment - Sequential Rating Version
 * 
 * Shows candidates one at a time with 7-point likelihood ratings.
 * Auto-advances on rating selection for minimal input effort.
 */

// ============================================
// Global State
// ============================================

let experimentConfig = null;
let currentTrialIndex = 0;
let currentCandidateIndex = 0;
let trialData = [];  // All trial responses
let currentTrialRatings = [];  // Ratings for current trial
let experimentStartTime = null;
let trialStartTime = null;
let candidateStartTime = null;
let participantId = '';
let isTransitioning = false;

// ============================================
// DOM Elements
// ============================================

const screens = {
    welcome: document.getElementById('welcome-screen'),
    resume: document.getElementById('resume-screen'),
    experiment: document.getElementById('experiment-screen'),
    completion: document.getElementById('completion-screen')
};

const elements = {
    participantIdInput: document.getElementById('participant-id'),
    startBtn: document.getElementById('start-btn'),
    trialProgress: document.getElementById('trial-progress'),
    progressFill: document.getElementById('progress-fill'),
    questionImage: document.getElementById('question-image'),
    candidateImage: document.getElementById('candidate-image'),
    candidateContainer: document.getElementById('candidate-container'),
    candidateLabel: document.getElementById('candidate-label'),
    ratingButtons: document.getElementById('rating-buttons'),
    summaryBox: document.getElementById('summary-box'),
    downloadBtn: document.getElementById('download-btn'),
    transitionOverlay: document.getElementById('transition-overlay'),
    // Resume screen elements
    resumeBtn: document.getElementById('resume-btn'),
    restartBtn: document.getElementById('restart-btn'),
    resumeProgressInfo: document.getElementById('resume-progress-info'),
    resumeParticipantInfo: document.getElementById('resume-participant-info')
};

// ============================================
// Screen Navigation
// ============================================

function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// ============================================
// Local Storage - Progress Persistence
// ============================================

const STORAGE_KEY = 'ca_experiment_progress_v1';

/**
 * Save current experiment progress to localStorage
 */
function saveProgress() {
    const progressData = {
        participant_id: participantId,
        experiment_start_time: experimentStartTime ? experimentStartTime.toISOString() : null,
        current_trial_index: currentTrialIndex,
        current_candidate_index: currentCandidateIndex,
        trial_data: trialData,
        current_trial_ratings: currentTrialRatings,
        experiment_id: experimentConfig ? experimentConfig.experiment_id : null,
        last_saved: new Date().toISOString()
    };
    
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progressData));
        console.log(`Progress saved: Trial ${currentTrialIndex + 1}, Candidate ${currentCandidateIndex + 1}`);
    } catch (error) {
        console.warn('Failed to save progress to localStorage:', error);
        // Continue without saving - don't block the experiment
    }
}

/**
 * Load saved progress from localStorage
 * @returns {Object|null} Saved progress data or null if none exists
 */
function loadProgress() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (!saved) return null;
        
        const data = JSON.parse(saved);
        
        // Validate required fields exist
        if (typeof data.current_trial_index !== 'number' ||
            typeof data.current_candidate_index !== 'number' ||
            !Array.isArray(data.trial_data)) {
            console.warn('Invalid saved progress data, clearing');
            clearProgress();
            return null;
        }
        
        return data;
    } catch (error) {
        console.warn('Failed to load progress from localStorage:', error);
        clearProgress();
        return null;
    }
}

/**
 * Clear saved progress from localStorage
 */
function clearProgress() {
    try {
        localStorage.removeItem(STORAGE_KEY);
        console.log('Progress cleared');
    } catch (error) {
        console.warn('Failed to clear progress from localStorage:', error);
    }
}

/**
 * Show resume dialog with progress info
 * @param {Object} savedProgress - The saved progress data
 */
function showResumeDialog(savedProgress) {
    const totalTrials = experimentConfig ? experimentConfig.trials.length : '?';
    const totalCandidates = 4;
    
    // Display progress info
    const trialNum = savedProgress.current_trial_index + 1;
    const candidateNum = savedProgress.current_candidate_index + 1;
    elements.resumeProgressInfo.textContent = `Trial ${trialNum} of ${totalTrials} • Rating ${candidateNum} of ${totalCandidates}`;
    
    // Display participant info if available
    if (savedProgress.participant_id) {
        elements.resumeParticipantInfo.textContent = `Participant: ${savedProgress.participant_id}`;
        elements.resumeParticipantInfo.style.display = 'block';
    } else {
        elements.resumeParticipantInfo.style.display = 'none';
    }
    
    showScreen('resume');
}

/**
 * Restore experiment state from saved progress
 * @param {Object} savedProgress - The saved progress data
 */
function restoreState(savedProgress) {
    participantId = savedProgress.participant_id || '';
    experimentStartTime = savedProgress.experiment_start_time 
        ? new Date(savedProgress.experiment_start_time) 
        : new Date();
    trialData = savedProgress.trial_data || [];
    currentTrialRatings = savedProgress.current_trial_ratings || [];
    currentTrialIndex = savedProgress.current_trial_index;
    currentCandidateIndex = savedProgress.current_candidate_index;
    
    console.log(`State restored: Trial ${currentTrialIndex + 1}, Candidate ${currentCandidateIndex + 1}`);
    console.log(`Restored ${trialData.length} completed trials, ${currentTrialRatings.length} ratings in current trial`);
    
    // Set up the trial timing
    trialStartTime = performance.now();
    
    // Show experiment screen and load current state
    showScreen('experiment');
    
    // Load the current trial's question image
    const trial = experimentConfig.trials[currentTrialIndex];
    elements.questionImage.src = './' + trial.question_image;
    
    // Show the current candidate
    showCandidate(currentCandidateIndex);
}

// ============================================
// Data Loading
// ============================================

async function loadExperimentConfig() {
    try {
        const response = await fetch('./trial_config.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        experimentConfig = await response.json();
        console.log(`Loaded ${experimentConfig.trials.length} trials`);
        
        // Preload all images
        preloadImages();
        
        return true;
    } catch (error) {
        console.error('Failed to load experiment config:', error);
        alert('Failed to load experiment. Please refresh the page.');
        return false;
    }
}

function preloadImages() {
    const imageUrls = new Set();
    
    experimentConfig.trials.forEach(trial => {
        imageUrls.add('./' + trial.question_image);
        trial.options.forEach(opt => {
            imageUrls.add('./' + opt.image);
        });
    });
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
    
    console.log(`Preloading ${imageUrls.size} images`);
}

// ============================================
// Trial Management
// ============================================

function startTrial(trialIndex) {
    currentTrialIndex = trialIndex;
    currentCandidateIndex = 0;
    currentTrialRatings = [];
    trialStartTime = performance.now();
    
    const trial = experimentConfig.trials[trialIndex];
    
    // Update question image
    elements.questionImage.src = './' + trial.question_image;
    
    // Update progress
    updateProgress();
    
    // Show first candidate
    showCandidate(0);
}

function showCandidate(candidateIndex) {
    currentCandidateIndex = candidateIndex;
    candidateStartTime = performance.now();
    
    const trial = experimentConfig.trials[currentTrialIndex];
    const optionIndex = trial.option_order[candidateIndex];
    const candidate = trial.options[optionIndex];
    
    // Update candidate image with fade transition
    elements.candidateContainer.classList.add('transitioning');
    
    setTimeout(() => {
        elements.candidateImage.src = './' + candidate.image;
        elements.candidateContainer.classList.remove('transitioning');
    }, 150);
    
    // Reset rating buttons
    resetRatingButtons();
    
    // Update progress
    updateProgress();
}

function updateProgress() {
    const totalTrials = experimentConfig.trials.length;
    const totalCandidates = 4;
    
    // Trial progress
    elements.trialProgress.textContent = `Trial ${currentTrialIndex + 1}/${totalTrials}`;
    
    // Candidate label on image
    elements.candidateLabel.textContent = `Option ${currentCandidateIndex + 1}/${totalCandidates}`;
    
    // Overall progress bar (based on total ratings completed)
    const totalRatings = totalTrials * totalCandidates;
    const completedRatings = (currentTrialIndex * totalCandidates) + currentCandidateIndex;
    const progressPercent = (completedRatings / totalRatings) * 100;
    elements.progressFill.style.width = `${progressPercent}%`;
}

function resetRatingButtons() {
    const buttons = elements.ratingButtons.querySelectorAll('.rating-btn');
    buttons.forEach(btn => {
        btn.classList.remove('selected', 'pulse');
    });
}

// ============================================
// Rating Handling
// ============================================

function handleRating(rating) {
    if (isTransitioning) {
        console.log('Blocked - already transitioning');
        return;
    }
    isTransitioning = true;
    
    console.log(`Rating ${rating} for candidate ${currentCandidateIndex + 1}/8`);
    
    const responseTime = performance.now() - candidateStartTime;
    const trial = experimentConfig.trials[currentTrialIndex];
    const optionIndex = trial.option_order[currentCandidateIndex];
    const candidate = trial.options[optionIndex];
    
    // Visual feedback - clear previous and highlight selected
    resetRatingButtons();
    const selectedBtn = elements.ratingButtons.querySelector(`[data-value="${rating}"]`);
    selectedBtn.classList.add('selected', 'pulse');
    
    // Record rating
    const ratingData = {
        candidate_index: currentCandidateIndex,
        option_id: candidate.id,
        candidate_rule: candidate.rule_applied,
        is_correct: candidate.is_correct,
        rating: rating,
        response_time_ms: Math.round(responseTime),
        timestamp: new Date().toISOString()
    };
    
    currentTrialRatings.push(ratingData);
    
    // Save progress after each rating
    saveProgress();
    
    // Auto-advance after brief delay for visual feedback
    setTimeout(() => {
        // Reset button visual state before advancing
        resetRatingButtons();
        // Remove focus from button (important for mobile)
        if (document.activeElement) {
            document.activeElement.blur();
        }
        isTransitioning = false;
        advanceToNext();
    }, 300);
}

function advanceToNext() {
    const totalCandidates = 4;
    
    if (currentCandidateIndex < totalCandidates - 1) {
        // Next candidate in same trial
        showCandidate(currentCandidateIndex + 1);
    } else {
        // Trial complete - save and move to next trial
        saveTrial();
        
        if (currentTrialIndex < experimentConfig.trials.length - 1) {
            startTrial(currentTrialIndex + 1);
        } else {
            // Experiment complete
            finishExperiment();
        }
    }
}

function saveTrial() {
    const trial = experimentConfig.trials[currentTrialIndex];
    const trialTime = performance.now() - trialStartTime;
    
    const trialRecord = {
        trial_id: trial.trial_id,
        rule_number: trial.rule_number,
        time_step: trial.time_step,
        rule_class: trial.rule_class,
        candidate_order: trial.option_order,
        ratings: currentTrialRatings,
        total_time_ms: Math.round(trialTime)
    };
    
    trialData.push(trialRecord);
}

// ============================================
// Experiment Completion
// ============================================

function finishExperiment() {
    const endTime = new Date();
    const durationMinutes = (endTime - experimentStartTime) / 1000 / 60;
    
    // Calculate summary
    const summary = calculateSummary();
    
    // Display summary
    displaySummary(summary, durationMinutes);
    
    // Show completion screen
    showScreen('completion');
}

function calculateSummary() {
    let totalRatings = 0;
    let sumRatingCorrect = 0;
    let countCorrect = 0;
    let sumRatingIncorrect = 0;
    let countIncorrect = 0;
    
    // Accuracy by time step (based on highest rating being correct)
    const accuracyByTimeStep = {};
    const timeStepCounts = {};
    
    trialData.forEach(trial => {
        // Find the rating given to the correct option
        let maxRating = 0;
        let correctRating = 0;
        let maxIsCorrect = false;
        
        trial.ratings.forEach(r => {
            totalRatings++;
            
            if (r.is_correct) {
                sumRatingCorrect += r.rating;
                countCorrect++;
                correctRating = r.rating;
            } else {
                sumRatingIncorrect += r.rating;
                countIncorrect++;
            }
            
            if (r.rating > maxRating) {
                maxRating = r.rating;
                maxIsCorrect = r.is_correct;
            }
        });
        
        // Track if highest-rated was correct (MAP accuracy)
        const t = trial.time_step;
        if (!accuracyByTimeStep[t]) {
            accuracyByTimeStep[t] = 0;
            timeStepCounts[t] = 0;
        }
        timeStepCounts[t]++;
        if (maxIsCorrect) {
            accuracyByTimeStep[t]++;
        }
    });
    
    // Normalize accuracy by time step
    Object.keys(accuracyByTimeStep).forEach(t => {
        accuracyByTimeStep[t] = accuracyByTimeStep[t] / timeStepCounts[t];
    });
    
    return {
        total_ratings: totalRatings,
        mean_rating_correct: countCorrect > 0 ? sumRatingCorrect / countCorrect : 0,
        mean_rating_incorrect: countIncorrect > 0 ? sumRatingIncorrect / countIncorrect : 0,
        map_accuracy: Object.values(accuracyByTimeStep).reduce((a, b) => a + b, 0) / Object.keys(accuracyByTimeStep).length,
        accuracy_by_time_step: accuracyByTimeStep
    };
}

function displaySummary(summary, durationMinutes) {
    const mapAccuracyPct = (summary.map_accuracy * 100).toFixed(0);
    const meanCorrect = summary.mean_rating_correct.toFixed(1);
    const meanIncorrect = summary.mean_rating_incorrect.toFixed(1);
    
    elements.summaryBox.innerHTML = `
        <h3>Your Results</h3>
        <div class="summary-stats">
            <div class="stat">
                <span class="stat-value">${summary.total_ratings}</span>
                <span class="stat-label">Total Ratings</span>
            </div>
            <div class="stat">
                <span class="stat-value">${mapAccuracyPct}%</span>
                <span class="stat-label">MAP Accuracy</span>
            </div>
            <div class="stat">
                <span class="stat-value">${meanCorrect}</span>
                <span class="stat-label">Avg Rating (Correct)</span>
            </div>
            <div class="stat">
                <span class="stat-value">${durationMinutes.toFixed(0)} min</span>
                <span class="stat-label">Duration</span>
            </div>
        </div>
        <h4>MAP Accuracy by Time Step</h4>
        <div class="time-step-accuracy">
            ${Object.entries(summary.accuracy_by_time_step)
                .sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
                .map(([t, acc]) => `<span class="time-stat">t=${t}: ${(acc * 100).toFixed(0)}%</span>`)
                .join('')}
        </div>
        <p class="summary-note">MAP Accuracy = % trials where your highest-rated option was correct</p>
    `;
}

// ============================================
// Data Export
// ============================================

function downloadResults() {
    const endTime = new Date();
    const summary = calculateSummary();
    
    const exportData = {
        participant_id: participantId || 'anonymous',
        experiment_id: experimentConfig.experiment_id + '_sequential',
        version: '2.0',
        start_time: experimentStartTime.toISOString(),
        end_time: endTime.toISOString(),
        total_duration_minutes: (endTime - experimentStartTime) / 1000 / 60,
        num_trials: trialData.length,
        num_ratings: summary.total_ratings,
        trials: trialData,
        summary: summary
    };
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const filename = participantId 
        ? `ca_experiment_${participantId}_${timestamp}.json`
        : `ca_experiment_${timestamp}.json`;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Clear saved progress after successful download
    clearProgress();
}

// ============================================
// Event Listeners
// ============================================

let lastTouchTime = 0;

function setupEventListeners() {
    // Start button (fresh start)
    elements.startBtn.addEventListener('click', async () => {
        participantId = elements.participantIdInput.value.trim();
        
        if (!experimentConfig) {
            elements.startBtn.disabled = true;
            elements.startBtn.textContent = 'Loading...';
            const loaded = await loadExperimentConfig();
            if (!loaded) {
                elements.startBtn.disabled = false;
                elements.startBtn.textContent = 'Start Experiment';
                return;
            }
        }
        
        // Clear any existing progress for fresh start
        clearProgress();
        
        // Start experiment
        experimentStartTime = new Date();
        trialData = [];
        
        showScreen('experiment');
        startTrial(0);
    });
    
    // Resume button - continue from saved progress
    elements.resumeBtn.addEventListener('click', () => {
        const savedProgress = loadProgress();
        if (savedProgress) {
            restoreState(savedProgress);
        } else {
            // Fallback if progress was cleared
            showScreen('welcome');
        }
    });
    
    // Restart button - clear progress and start fresh
    elements.restartBtn.addEventListener('click', () => {
        clearProgress();
        showScreen('welcome');
    });
    
    // Rating buttons - use event delegation on container
    elements.ratingButtons.addEventListener('click', (e) => {
        const btn = e.target.closest('.rating-btn');
        if (!btn) return;
        
        // Prevent double-firing from touch + click
        const now = Date.now();
        if (now - lastTouchTime < 500) return;
        
        const rating = parseInt(btn.dataset.value);
        if (rating >= 1 && rating <= 7) {
            handleRating(rating);
        }
    });
    
    // Touch handler for mobile (faster response)
    elements.ratingButtons.addEventListener('touchend', (e) => {
        const btn = e.target.closest('.rating-btn');
        if (!btn) return;
        
        e.preventDefault();
        lastTouchTime = Date.now();
        
        const rating = parseInt(btn.dataset.value);
        if (rating >= 1 && rating <= 7) {
            handleRating(rating);
        }
    });
    
    // Download button
    elements.downloadBtn.addEventListener('click', downloadResults);
    
    // Keyboard shortcuts (for desktop testing)
    document.addEventListener('keydown', (e) => {
        if (!screens.experiment.classList.contains('active')) return;
        
        // Number keys 1-7 for ratings
        const num = parseInt(e.key);
        if (num >= 1 && num <= 7) {
            handleRating(num);
        }
    });
}

// ============================================
// Initialization
// ============================================

async function init() {
    setupEventListeners();
    
    // Preload config
    await loadExperimentConfig();
    
    // Check for saved progress
    const savedProgress = loadProgress();
    if (savedProgress) {
        // Validate that saved progress is for the same experiment
        if (experimentConfig && savedProgress.experiment_id === experimentConfig.experiment_id) {
            console.log('Found saved progress, showing resume dialog');
            showResumeDialog(savedProgress);
        } else {
            // Different experiment version, clear old progress
            console.log('Saved progress is for different experiment, clearing');
            clearProgress();
            showScreen('welcome');
        }
    } else {
        showScreen('welcome');
    }
    
    console.log('Sequential experiment initialized');
}

// Start when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
