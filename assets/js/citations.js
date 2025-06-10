// Citation Functionality
function toggleInfo(id) {
  var bibElement = document.getElementById('bib_' + id);
  if (bibElement && bibElement.classList.contains('noshow')) {
    bibElement.classList.remove('noshow');
  } else if (bibElement) {
    bibElement.classList.add('noshow');
  }
}

// Initialize citations when page loads
document.addEventListener('DOMContentLoaded', function() {
  // Ensure all BibTeX blocks start hidden
  var bibTexElements = document.querySelectorAll('.bibtex');
  bibTexElements.forEach(function(element) {
    if (!element.classList.contains('noshow')) {
      element.classList.add('noshow');
    }
  });
}); 