---
layout: post
title: "Humans Who Inspire Me"
date: 2026-05-01
last_updated: 2026-05-01
author:
- Blake Edwards
tags: [inspirations, history of science]
permalink: /wiki/humans-who-inspire-me
show_on_wiki: true
show_on_secret_wiki: false
pinned: true
---

People whose work I keep returning to. Most sit at the seams between fields — physics and biology, math and computation, energy and information. Reverse chronological, newest first.

<div class="minds-constellation" markdown="0">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
.minds-constellation{position:relative;margin:1.9rem 0 2.4rem;padding:1.4rem 1.2rem 1.1rem;border:1px solid #26262e;border-radius:12px;background:radial-gradient(125% 80% at 18% 0%,#15151c 0%,#0b0b10 55%,#08080c 100%);box-shadow:inset 0 1px 0 rgba(255,255,255,.03),0 10px 40px -20px rgba(0,0,0,.85);overflow:hidden;}
.minds-constellation *{box-sizing:border-box;}
.mc-kicker{font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.32em;color:#6f7686;text-transform:uppercase;}
.mc-title{font-family:'Fraunces',Georgia,serif;font-weight:600;font-size:clamp(22px,4.4vw,32px);line-height:1.05;color:#e9e7e0;margin:.35rem 0 .45rem;}
.mc-sub{font-family:'IBM Plex Mono',monospace;font-size:11.5px;line-height:1.6;color:#878d9b;max-width:64ch;}
.mc-stage{position:relative;margin-top:.7rem;}
.mc-svg{display:block;width:100%;height:auto;}
.mc-node{cursor:pointer;}
.mc-bar{cursor:pointer;transition:opacity .15s;}
.mc-label{font-family:'IBM Plex Mono',monospace;font-size:10.5px;fill:#aab0bd;pointer-events:none;user-select:none;}
.mc-axis text{font-family:'IBM Plex Mono',monospace;font-size:10px;fill:#565c6b;letter-spacing:.04em;}
.mc-axis line{stroke:#22222b;stroke-dasharray:2 5;}
.mc-link{fill:none;stroke-linecap:round;}
.mc-legend{display:flex;flex-wrap:wrap;gap:.5rem .8rem;margin-top:1rem;padding-top:.9rem;border-top:1px solid #1f1f27;}
.mc-chip{display:inline-flex;align-items:center;gap:.42rem;font-family:'IBM Plex Mono',monospace;font-size:10.5px;color:#9aa0ad;cursor:pointer;opacity:.9;transition:opacity .15s;user-select:none;}
.mc-chip:hover{opacity:1;}
.mc-chip.dim{opacity:.32;}
.mc-sw{width:9px;height:9px;border-radius:2px;flex:0 0 auto;box-shadow:0 0 7px currentColor;}
.mc-tip{position:absolute;pointer-events:none;z-index:5;opacity:0;transition:opacity .12s;max-width:248px;background:rgba(9,9,13,.96);border:1px solid #34343f;border-radius:8px;padding:.55rem .68rem;box-shadow:0 8px 30px -10px rgba(0,0,0,.9);}
.mc-tip-name{font-family:'Fraunces',Georgia,serif;font-weight:600;font-size:14.5px;color:#f0eee8;line-height:1.15;}
.mc-tip-year{font-family:'IBM Plex Mono',monospace;font-size:10px;color:#7e8492;margin:2px 0 7px;letter-spacing:.06em;}
.mc-tip-desc{font-family:'IBM Plex Mono',monospace;font-size:10.5px;line-height:1.55;color:#aeb3c0;}
.mc-tip-themes{display:flex;flex-wrap:wrap;gap:4px;margin-top:8px;}
.mc-tip-theme{font-family:'IBM Plex Mono',monospace;font-size:9px;padding:2px 6px;border-radius:4px;}
@media(max-width:540px){.mc-sub{font-size:10.5px;}.mc-label{font-size:9px;}}
</style>
<div class="mc-head">
  <div class="mc-kicker">A constellation of minds</div>
  <div class="mc-title">Ideas threaded through time</div>
  <div class="mc-sub">Each person has their own column; the bar spans their lifespan — birth to death, or to today for the living — with the node at its midpoint. Newest at the top. Hover a name to trace the ideas it shares with others.</div>
</div>
<div class="mc-stage">
  <svg class="mc-svg" role="img" aria-label="Timeline graph of thinkers connected by shared ideas"></svg>
  <div class="mc-tip"></div>
</div>
<div class="mc-legend"></div>
<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
(function(){
  var THEMES={
    bayesian:{label:'Probability & Bayesian inference',color:'#e0a458'},
    information:{label:'Information & entropy',color:'#5fd3c6'},
    statmech:{label:'Statistical mechanics & thermodynamics',color:'#e9724c'},
    computation:{label:'Computation & algorithms',color:'#9b8cff'},
    complexity:{label:'Complexity & emergence',color:'#7bc86b'},
    learning:{label:'Learning & intelligence',color:'#e06ca0'},
    life:{label:'Life & biology',color:'#4fb286'},
    physics:{label:'Physics & fields',color:'#6aa6e0'},
    philosophy:{label:'Philosophy & forms',color:'#b3a7d6'}
  };
  var NODES=[
    {n:'Plato',s:'Plato',y:-428,ap:1,t:['philosophy'],d:'Theory of Forms — perfect forms beyond the noisy instances we encounter.'},
    {n:'Marcus Aurelius',s:'Aurelius',y:121,t:['philosophy'],d:'Stoic emperor; the Meditations on the internal work of being a person.'},
    {n:'Thomas Bayes',s:'Bayes',y:1701,t:['bayesian'],d:"Bayes' theorem — the rule for updating beliefs in light of evidence."},
    {n:'Josiah Willard Gibbs',s:'Gibbs',y:1839,t:['statmech','information'],d:'Statistical mechanics, free energy, and the Gibbs distribution.'},
    {n:'Ludwig Boltzmann',s:'Boltzmann',y:1844,t:['statmech','information'],d:'S = k log W — entropy bridging microscopic chaos and macroscopic order.'},
    {n:'Nikola Tesla',s:'Tesla',y:1856,t:['physics'],d:'Alternating current and an intuitive feel for electromagnetism.'},
    {n:'George Pólya',s:'Pólya',y:1887,t:['bayesian'],d:'Plausible inference and heuristics — plausibility as extended logic.'},
    {n:'Erwin Schrödinger',s:'Schrödinger',y:1887,t:['physics','life','information'],d:'The wave equation and What Is Life? — physics giving rise to living order.'},
    {n:'Harold Jeffreys',s:'Jeffreys',y:1891,t:['bayesian'],d:'Built modern Bayesian statistics — priors, posterior odds, the Jeffreys prior.'},
    {n:'R.T. Cox',s:'Cox',y:1898,t:['bayesian'],d:"Cox's theorem — probability is the unique calculus of consistent belief."},
    {n:'Andrey Kolmogorov',s:'Kolmogorov',y:1903,t:['bayesian','computation','information'],d:'Axiomatized probability; co-founded algorithmic information theory.'},
    {n:'John von Neumann',s:'von Neumann',y:1903,t:['computation','complexity','physics'],d:'Computer architecture, game theory, self-replicating automata, QM foundations.'},
    {n:'Alan Turing',s:'Turing',y:1912,t:['computation','learning','life'],d:'Defined computation; asked if machines think; modeled morphogenesis.'},
    {n:'Claude Shannon',s:'Shannon',y:1916,t:['information','computation'],d:'Invented information theory — entropy, channel capacity, error correction.'},
    {n:'Ilya Prigogine',s:'Prigogine',y:1917,t:['statmech','complexity','life'],d:'Dissipative structures — order emerging far from equilibrium.'},
    {n:'Richard Feynman',s:'Feynman',y:1918,t:['physics'],d:'QED and path integrals; the joy of understanding things from scratch.'},
    {n:'Edwin T. Jaynes',s:'Jaynes',y:1922,t:['bayesian','information','statmech'],d:'Maximum entropy — statistical mechanics and inference as one activity.'},
    {n:'Ray Solomonoff',s:'Solomonoff',y:1926,t:['computation','bayesian','information'],d:'Universal induction — Bayes-optimal prediction weighted by description length.'},
    {n:'Geoffrey Hinton',s:'Hinton',y:1947,t:['learning','statmech'],d:'Boltzmann machines and backprop — statistical physics into learning.'},
    {n:'Stephen Wolfram',s:'Wolfram',y:1959,t:['computation','complexity'],d:'Simple computational rules generating natural complexity — rule 30.'},
    {n:'Karl Friston',s:'Friston',y:1959,t:['bayesian','statmech','learning'],d:'The free energy principle — perception, action, and learning as inference.'},
    {n:'Michael Levin',s:'M. Levin',y:1969,ap:1,t:['life','complexity','philosophy'],d:'Bioelectricity and regeneration — cells navigating a platonic space of forms.'},
    {n:'Blaise Agüera y Arcas',s:'Agüera y Arcas',y:1975,t:['learning','complexity','life'],d:'ML, biology, and philosophy on how intelligence emerges.'},
    {n:'Richard Sutton',s:'Sutton',y:1978,t:['learning','computation'],d:'Reinforcement learning and The Bitter Lesson — general methods that scale.'},
    {n:'Sergey Levine',s:'S. Levine',y:1984,ap:1,t:['learning','bayesian'],d:'RL, control, and planning as variational inference under one Bayesian frame.'}
  ];

  var PRESENT=2026;
  var DEATH={'Plato':-348,'Marcus Aurelius':180,'Thomas Bayes':1761,'Josiah Willard Gibbs':1903,'Ludwig Boltzmann':1906,'Nikola Tesla':1943,'George Pólya':1985,'Erwin Schrödinger':1961,'Harold Jeffreys':1989,'R.T. Cox':1991,'Andrey Kolmogorov':1987,'John von Neumann':1957,'Alan Turing':1954,'Claude Shannon':2001,'Ilya Prigogine':2003,'Richard Feynman':1988,'Edwin T. Jaynes':1998,'Ray Solomonoff':2009};

  // Build idea-lineage edges: within each theme, link consecutive thinkers in time.
  var byTheme={};
  NODES.forEach(function(nd,i){nd.index=i;nd.birth=nd.y;nd.death=DEATH.hasOwnProperty(nd.n)?DEATH[nd.n]:null;nd.themes=nd.t;nd.t.forEach(function(t){(byTheme[t]=byTheme[t]||[]).push(i);});});
  var links=[];
  Object.keys(byTheme).forEach(function(t){
    var idx=byTheme[t].slice().sort(function(a,b){return NODES[a].birth-NODES[b].birth;});
    for(var k=0;k<idx.length-1;k++) links.push({source:idx[k],target:idx[k+1],theme:t});
  });
  // degree for node sizing
  var deg={};
  links.forEach(function(l){deg[l.source]=(deg[l.source]||0)+1;deg[l.target]=(deg[l.target]||0)+1;});
  NODES.forEach(function(nd,i){nd.deg=deg[i]||0;nd.r=5+Math.sqrt(nd.deg)*2.4;});
  // parallel-edge curvature index per pair
  var pairs={};
  links.forEach(function(l){var a=Math.min(l.source,l.target),b=Math.max(l.source,l.target);var key=a+'-'+b;(pairs[key]=pairs[key]||[]).push(l);});
  Object.keys(pairs).forEach(function(key){var ls=pairs[key];ls.forEach(function(l,i){l.ci=i;l.cn=ls.length;});});
  links.forEach(function(l){l.source=NODES[l.source];l.target=NODES[l.target];});

  function fmtYear(y,ap){var p=ap?'c. ':'';if(y<0)return p+Math.abs(y)+' BCE';if(y<1000)return p+y+' CE';return p+y;}
  function lifespan(d){return fmtYear(d.birth,d.ap)+' – '+(d.death==null?'present':fmtYear(d.death,0));}

  var root,svgEl,tipEl,legendEl,stageEl,activeTheme=null;

  function boot(){
    if(!window.d3){return setTimeout(boot,60);}
    root=document.querySelector('.minds-constellation');
    if(!root)return;
    svgEl=root.querySelector('.mc-svg');
    tipEl=root.querySelector('.mc-tip');
    legendEl=root.querySelector('.mc-legend');
    stageEl=root.querySelector('.mc-stage');
    render();
    var rt;
    window.addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(render,220);});
  }

  function render(){
    var d3=window.d3;
    var width=Math.max(320,stageEl.clientWidth);
    var height=Math.round(Math.max(640,Math.min(1000,width*1.12)));
    var padL=58,padR=18,padT=24,padB=28,innerH=height-padT-padB;

    var frac=d3.scaleLinear().domain([-428,121,1701,1850,2000]).range([0.05,0.14,0.33,0.58,0.96]).clamp(true);
    function Y(y){return padT+(1-frac(y))*innerH;}

    var svg=d3.select(svgEl).attr('viewBox','0 0 '+width+' '+height).attr('preserveAspectRatio','xMidYMid meet');
    svg.selectAll('*').remove();

    // axis: century gridlines
    var axis=svg.append('g').attr('class','mc-axis');
    [-428,121,1700,1800,1900,2000].forEach(function(yr){
      var yy=Y(yr);
      axis.append('line').attr('x1',padL-12).attr('x2',width-padR).attr('y1',yy).attr('y2',yy);
      axis.append('text').attr('x',6).attr('y',yy+3).text(fmtYear(yr,0));
    });

    // one column per person, ordered by birth year (oldest at left)
    var ordered=NODES.slice().sort(function(a,b){return a.birth-b.birth;});
    var N=ordered.length,colW=(width-padL-padR)/N;
    ordered.forEach(function(nd,i){nd.colX=padL+(i+0.5)*colW;});
    NODES.forEach(function(nd){
      nd.bY=Y(nd.birth);nd.eY=Y(nd.death==null?PRESENT:nd.death);
      nd.x=nd.colX;nd.y=(nd.bY+nd.eY)/2;
    });
    var barW=Math.max(5,Math.min(13,colW*0.46));

    // lifespan bars (birth -> death/present), node sits at the midpoint
    var barSel=svg.append('g').selectAll('rect').data(NODES).enter().append('rect')
      .attr('class','mc-bar')
      .attr('x',function(d){return d.x-barW/2;})
      .attr('y',function(d){return Math.min(d.bY,d.eY);})
      .attr('width',barW)
      .attr('height',function(d){return Math.abs(d.bY-d.eY);})
      .attr('rx',barW/2)
      .attr('fill',function(d){return THEMES[d.themes[0]].color;})
      .attr('fill-opacity',0.15)
      .attr('stroke',function(d){return THEMES[d.themes[0]].color;})
      .attr('stroke-opacity',0.5).attr('stroke-width',1);

    // idea threads
    var linkSel=svg.append('g').selectAll('path').data(links).enter().append('path')
      .attr('class','mc-link').attr('stroke',function(l){return THEMES[l.theme].color;})
      .attr('d',function(l){
        var x1=l.source.x,y1=l.source.y,x2=l.target.x,y2=l.target.y;
        var off=(l.ci-(l.cn-1)/2)*20;
        if(!off){return 'M'+x1+','+y1+' L'+x2+','+y2;}
        var mx=(x1+x2)/2,my=(y1+y2)/2,dx=x2-x1,dy=y2-y1,len=Math.hypot(dx,dy)||1;
        var cx=mx+(-dy/len)*off,cy=my+(dx/len)*off;
        return 'M'+x1+','+y1+' Q'+cx+','+cy+' '+x2+','+y2;
      });

    // labels run vertically along each column
    var labelSel=svg.append('g').selectAll('text').data(NODES).enter().append('text')
      .attr('class','mc-label')
      .attr('transform',function(d){var ly=Math.max(padT+48,Math.min(height-padB-48,d.y));return 'translate('+d.x+','+ly+') rotate(-90)';})
      .attr('text-anchor','middle').attr('dominant-baseline','central')
      .style('paint-order','stroke').style('stroke','#0a0a0e').style('stroke-width','3px')
      .text(function(d){return d.s;});

    function over(e,d){focusNode(d);showTip(d);moveTip(e);}
    function move(e){moveTip(e);}
    function out(){hideTip();clearFocus();}
    barSel.on('mouseenter',over).on('mousemove',move).on('mouseleave',out);

    buildLegend();
    render._sel={link:linkSel,label:labelSel,bar:barSel};
    applyState();

    function neighborsOf(d){
      var set={};set[d.index]=1;
      links.forEach(function(l){if(l.source===d)set[l.target.index]=1;if(l.target===d)set[l.source.index]=1;});
      return set;
    }
    function focusNode(d){
      var nb=neighborsOf(d);
      linkSel.attr('stroke-opacity',function(l){return (l.source===d||l.target===d)?0.95:0.05;})
        .attr('stroke-width',function(l){return (l.source===d||l.target===d)?2.3:1;});
      barSel.attr('opacity',function(o){return nb[o.index]?1:0.1;});
      labelSel.attr('opacity',function(o){return nb[o.index]?1:0.1;})
        .attr('fill',function(o){return nb[o.index]?'#f0f1f5':'#aab0bd';});
    }
    function clearFocus(){applyState();}
  }

  function applyState(){
    var s=render._sel;if(!s)return;
    if(activeTheme){
      s.link.attr('stroke-opacity',function(l){return l.theme===activeTheme?0.92:0.05;})
        .attr('stroke-width',function(l){return l.theme===activeTheme?2.1:1;});
      s.bar.attr('opacity',function(o){return o.themes.indexOf(activeTheme)>=0?1:0.12;});
      s.label.attr('opacity',function(o){return o.themes.indexOf(activeTheme)>=0?1:0.16;})
        .attr('fill',function(o){return o.themes.indexOf(activeTheme)>=0?'#eceef3':'#aab0bd';});
    }else{
      s.link.attr('stroke-opacity',0.28).attr('stroke-width',1.4);
      s.bar.attr('opacity',1);
      s.label.attr('opacity',0.85).attr('fill','#aab0bd');
    }
  }

  function buildLegend(){
    legendEl.innerHTML='';
    Object.keys(THEMES).forEach(function(k){
      var c=document.createElement('div');c.className='mc-chip';
      c.innerHTML='<span class="mc-sw" style="background:'+THEMES[k].color+';color:'+THEMES[k].color+'"></span>'+THEMES[k].label;
      c.addEventListener('click',function(){activeTheme=(activeTheme===k)?null:k;syncChips();applyState();});
      c.addEventListener('mouseenter',function(){if(!activeTheme){previewTheme(k);}});
      c.addEventListener('mouseleave',function(){if(!activeTheme){applyState();}});
      c._key=k;legendEl.appendChild(c);
    });
    syncChips();
  }
  function syncChips(){
    Array.prototype.forEach.call(legendEl.children,function(c){
      c.classList.toggle('dim',!!activeTheme&&c._key!==activeTheme);
    });
  }
  function previewTheme(k){
    var s=render._sel;if(!s)return;
    s.link.attr('stroke-opacity',function(l){return l.theme===k?0.9:0.05;}).attr('stroke-width',function(l){return l.theme===k?2:1;});
    s.bar.attr('opacity',function(o){return o.themes.indexOf(k)>=0?1:0.14;});
    s.label.attr('opacity',function(o){return o.themes.indexOf(k)>=0?1:0.18;});
  }

  function showTip(d){
    var chips=d.themes.map(function(t){return '<span class="mc-tip-theme" style="background:'+THEMES[t].color+'22;color:'+THEMES[t].color+'">'+THEMES[t].label.split(' & ')[0]+'</span>';}).join('');
    tipEl.innerHTML='<div class="mc-tip-name">'+d.n+'</div><div class="mc-tip-year">'+lifespan(d)+'</div><div class="mc-tip-desc">'+d.d+'</div><div class="mc-tip-themes">'+chips+'</div>';
    tipEl.style.opacity=1;
  }
  function moveTip(e){
    var rect=stageEl.getBoundingClientRect();
    var x=e.clientX-rect.left,y=e.clientY-rect.top;
    var tw=tipEl.offsetWidth,th=tipEl.offsetHeight;
    var px=x+16;if(px+tw>rect.width)px=x-16-tw;if(px<0)px=6;
    var py=y+16;if(py+th>rect.height)py=y-16-th;if(py<0)py=6;
    tipEl.style.left=px+'px';tipEl.style.top=py+'px';
  }
  function hideTip(){tipEl.style.opacity=0;}
  stageWire();
  function stageWire(){/* tip follows cursor via node mousemove */}

  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',boot);}else{boot();}
})();
</script>
</div>

## Sergey Levine

Berkeley professor whose work casts reinforcement learning, control, and planning as variational inference under one Bayesian frame. The 2018 *RL and Control as Probabilistic Inference* tutorial pulled together threads I keep returning to whenever I think about decision-making under uncertainty.

## Richard Sutton (1978– )

Co-author, with Andrew Barto, of *Reinforcement Learning: An Introduction* and the temporal-difference methods at the core of the field — work that earned them the 2024 Turing Award. *The Bitter Lesson* is the essay I keep coming back to: the long-run winners are general methods that scale with computation, not the cleverness we hand-build into them.

## Blaise Agüera y Arcas (1975– )

Leads machine-learning research at Google's Paradigms of Intelligence team and writes across AI, biology, philosophy, and art with equal seriousness — *Who Are We Now?* and a steady stream of essays on what intelligence is and how it emerges. The kind of breadth I want to be capable of.

## Michael Levin

Tufts biologist studying bioelectricity, regeneration, and the agency of non-neural tissue — xenobots, anthrobots, and a body of work arguing that cells navigate a platonic space of possible forms. The clearest current case I know that intelligence and goal-directedness predate brains by a long way.

## Stephen Wolfram (1959– )

Built Mathematica, then spent decades arguing that simple computational rules — most famously cellular automata like *rule 30* — can generate the complexity we see in nature. *A New Kind of Science* and the Wolfram Physics Project are the most ambitious recent attempts to take "the universe is computation" literally as a research program.

## Karl Friston (1959– )

The free energy principle and active inference — a single variational quantity unifying perception, action, and learning under Bayesian inference. Living evidence that big foundational frames are still being written.

## Geoffrey Hinton (1947– )

Decades of work on neural networks before they were fashionable — Boltzmann machines, backpropagation as a learning rule, and the AlexNet moment that finally vindicated it all. Nobel in physics, 2024. The patience and the breadth — statistical physics into learning into language — is what I keep noticing.

## Ray Solomonoff (1926–2009)

Defined a universal prior over computable hypotheses by weighting them by their description length — *Solomonoff induction*, the Bayes-optimal predictor and one half of AIXI. The original answer to "how should one learn from data?", and the answer everything else still approximates.

## Edwin Thompson Jaynes (1922–1998)

Made Bayesian probability and the maximum-entropy principle into a working methodology. *Probability Theory: The Logic of Science* is one of those books I want to have read three times. Argued, persuasively, that statistical mechanics and inference are the same activity seen from different angles.

## Richard Feynman (1918–1988)

QED, path integrals, the diagrams that bear his name. But what inspires me is the *style* — the insistence on understanding things from scratch, the joy in figuring things out, the conviction that if you cannot explain it simply you do not understand it.

## Ilya Prigogine (1917–2003)

Showed that systems far from equilibrium can spontaneously organize into ordered structures by dissipating energy — *dissipative structures*. Made it possible to talk about life, weather, and cities as physics, not exceptions to it. Nobel in chemistry, 1977.

## Claude Shannon (1916–2001)

Invented information theory in one 1948 paper. Defined entropy as the expected log-improbability of a message, and from that single quantity reconstructed bandwidth, channel capacity, error correction, and how every form of communication has worked since.

## Alan Turing (1912–1954)

Defined what computation is. Then asked whether machines could think, and on the side wrote a paper showing how chemical reactions can generate biological pattern (morphogenesis). Range matched only by depth.

## John von Neumann (1903–1957)

The polymath ideal. Foundations of quantum mechanics, the computer architecture every modern machine still uses, game theory, cellular automata, self-replicating machines — all in one career, none of it shallow.

## Andrey Kolmogorov (1903–1987)

Soviet polymath. Axiomatized probability theory in 1933, then half a century later co-founded algorithmic information theory — *Kolmogorov complexity*, the length of the shortest program that produces a string, the substrate Solomonoff induction sits on. Few people have written down so much of what we now take as given.

## R.T. Cox (1898–1991)

Showed that any system of plausible reasoning consistent with a few mild desiderata must obey the rules of probability — *Cox's theorem* (1946). The clearest derivation of why probability *is* the calculus of belief, not just one option among many.

## Harold Jeffreys (1891–1989)

Geophysicist who, in *Theory of Probability* (1939), built modern Bayesian statistics — priors, posterior odds, model comparison — decades before any of it was respectable. The *Jeffreys prior* still bears his name.

## George Pólya (1887–1985)

Wrote *How to Solve It*, the field manual for mathematical thinking. *Patterns of Plausible Inference* set up the plausibility-as-extended-logic frame that Cox and Jaynes later formalized. Heuristics, plausible reasoning, and combinatorics in equal measure.

## Erwin Schrödinger (1887–1961)

Wrote down the wave equation, then in *What Is Life?* (1944) asked how the laws of physics could give rise to the informational order of living systems. That question helped seed molecular biology, and I think it is still the right question.

## Nikola Tesla (1856–1943)

Engineer-visionary with an almost preternatural feel for electromagnetic phenomena. Alternating current, the induction motor, polyphase distribution — the substrate of modern electrification. Imagined wireless power transmission decades before the math caught up.

## Ludwig Boltzmann (1844–1906)

Built statistical mechanics. *S = k log W* carved entropy into the bridge between microscopic chaos and macroscopic order — the equation that makes thermodynamics, information theory, and most of what comes after possible.

## Josiah Willard Gibbs (1839–1903)

American physicist who founded statistical mechanics and chemical thermodynamics almost single-handedly — ensembles, free energy, the *Gibbs distribution* that still shows up everywhere from physics to machine learning. He worked in near-total isolation at Yale, publishing in an obscure journal, and quietly built half the vocabulary I use to think about energy and probability.

## Thomas Bayes (1701–1761)

British minister and mathematician. *An Essay towards solving a Problem in the Doctrine of Chances*, published posthumously in 1763, gave us Bayes' theorem — the rule for updating beliefs in light of evidence. Probabilistic inference, machine learning, and the platonic optimal agent all trace back to one short paper.

## Marcus Aurelius (121–180)

Roman emperor and Stoic. The *Meditations* — written to himself, never meant for publication — are the clearest reminder I know that the work of being a person is mostly internal, and that most of the obstacles in the way are you. Two millennia later, still useful at 6 AM.

## Plato (c. 428–348 BCE)

*The Republic*, the Theory of Forms, the dialogue as a method of inquiry. Most of Western philosophy is still working in his vocabulary, and the *platonic* in "platonic ideal" is not metaphorical — it is the conviction that perfect forms exist beyond the noisy instances we encounter, and that thinking is partly the work of remembering them.
