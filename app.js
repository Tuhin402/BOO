gsap.from("#leftside", {
  scrollTrigger: {
    scrub: true,
  },
  x: -100,
});

gsap.from("#rightside", {
  scrollTrigger: {
    scrub: true,
  },
  x: 200,
});

gsap.from("#leftpumpkin", {
  scrollTrigger: {
    scrub: true,
  },
  x: -150,
});

gsap.from("#rightpumpkin", {
  scrollTrigger: {
    scrub: true,
  },
  x: 250,
});

gsap.to("#leftpumpkin", {
  y: -40,
  repeat: -1,
  yoyo: true,
  duration: 2,
  ease: "power1.inOut"
});

gsap.to("#rightpumpkin", {
  y: -40,
  repeat: -1,
  yoyo: true,
  duration: 2,
  ease: "power1.inOut"
});

gsap.fromTo(
  "#title",
  { scale: 1.5, opacity: 0.7, x: 10, y: 10 },
  {
    scale: 1,
    opacity: 1,
    x: -10,
    y: -10,
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: "power3.inOut",
    onRepeat: function () {
      gsap.to("#title", {
        rotation: gsap.utils.random(-3, 3),
        duration: 0.3,
        ease: "rough({ strength: 1.5, points: 20, template: linear, taper: none })"
      });
    }
  }
);

gsap.from(".scroll-down", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".parallax",
    start: "top 80%",
    end: "top 20%",
    toggleActions: "restart none none none"
  }
});

gsap.to(".scroll-icon", {
  y: 15,
  repeat: -1,
  yoyo: true,
  duration: 1,
  ease: "power1.inOut"
});

var swiper = new Swiper(".mySwiper", {
  speed: 700,
  enabled: true,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// mute - unmute script 
const audio = document.getElementById('halloween-music');
const muteButton = document.getElementById('mute-button');
const muteIcon = document.getElementById('mute-icon');

window.addEventListener('load', () => {
  audio.play().catch((e) => {
    console.log('Auto-play prevented:', e);
  });
});

let isMuted = false;

muteButton.addEventListener('click', () => {
  if (isMuted) {
    audio.muted = false;
    muteIcon.textContent = '🔇';
  } else {
    audio.muted = true;
    muteIcon.textContent = '🔊';
  }
  isMuted = !isMuted;
});

// custom cursor script 
const customCursor = document.querySelector('.custom-cursor');

gsap.set(customCursor, {
  xPercent: -50,
  yPercent: -50
});

window.addEventListener('mousemove', (e) => {
  gsap.to(customCursor, {
    duration: 0.2,
    x: e.clientX,
    y: e.clientY,
    ease: 'power3.out'
  });
});

document.querySelectorAll('a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    gsap.to(customCursor, {
      duration: 0.3,
      width: 50,
      height: 50,
      background: 'rgb(255, 0, 0)',
      ease: 'power3.out'
    });
  });

  link.addEventListener('mouseleave', () => {
    gsap.to(customCursor, {
      duration: 0.3,
      width: 10,
      height: 10,
      background: 'rgba(255, 0, 0, 0.7)',
      ease: 'power3.out'
    });
  });
});

// navbar script =============================================================

const menuIcon = document.getElementById("menu-icon");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("close-btn");

const toggleWebsitesBtn = document.getElementById('toggle-websites-btn');
const hiddenWebsites = document.getElementById('hidden-websites');
const arrowIcon = document.getElementById('arrow-icon');

menuIcon.addEventListener("click", function () {
  overlay.classList.add("open");
});

closeBtn.addEventListener("click", function () {
  overlay.classList.remove("open");
});

toggleWebsitesBtn.addEventListener("click", function () {
  if (hiddenWebsites.style.maxHeight === "0px" || hiddenWebsites.style.maxHeight === "") {
    hiddenWebsites.style.maxHeight = hiddenWebsites.scrollHeight + "px";
    arrowIcon.classList.remove("fa-circle-chevron-down");
    arrowIcon.classList.add("fa-circle-chevron-up");
  } else {
    hiddenWebsites.style.maxHeight = "0px";
    arrowIcon.classList.remove("fa-circle-chevron-up");
    arrowIcon.classList.add("fa-circle-chevron-down");
  }
});

// Game Logic =====================================
// Loader Animation
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  
  const broomAnimation = gsap.fromTo('.witch-broom', {
    x: '-100%',
    opacity: 1
  }, {
    x: '120%',
    opacity: 1,
    duration: 4,
    ease: 'linear',
    repeat: -1
  });

  gsap.to(loader, {
    opacity: 0,
    duration: 1,
    ease: 'power2.inOut', 
    onComplete: () => {
      loader.style.display = 'none'; 
      broomAnimation.kill(); 
    }
  });
});

// Chair Movement and Sound Effect
const chair = document.getElementById('chair');
const chairSound = document.getElementById('chair-sound');
const bulbSound = document.getElementById('bulb-sound');
const ghost = document.getElementById('ghost');

// for the chair 
let chairTimeline = gsap.timeline({ paused: true, repeat: 0 });

chairTimeline.to(chair, {
  rotation: 15,
  transformOrigin: "bottom center",
  ease: "power1.inOut",
  duration: 2,
  yoyo: true,
  repeat: 5
});

chair.addEventListener('mouseover', () => {
  chairTimeline.restart();
  chairSound.play();
});

chair.addEventListener('click', () => {
  chairTimeline.restart();
  chairSound.play();
});

// for the book 
gsap.timeline({ repeat: -1, yoyo: true, delay: 3 })
  .to('#book', {
    y: -30, 
    duration: 2,
    ease: 'power1.inOut',
  })
  .to('#book', {
    rotation: () => gsap.utils.random(-30, 30), 
    duration: 0.3, 
    ease: 'rough({ strength: 2, points: 20, taper: "none", randomize: true, clamp: false })',
  }, 0) 
  .to('#book', {
    opacity: () => gsap.utils.random(0.6, 1), 
    duration: 1.5,
    ease: 'power1.inOut',
  }, 0);

// for the ghost 
function showGhost() {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  gsap.set(ghost, { x, y });
  gsap.to(ghost, { display: 'block', opacity: 1, duration: 1 });
  gsap.to(ghost, {
    opacity: 0, duration: 2, delay: 1, onComplete: () => {
      ghost.style.display = 'none';
      setTimeout(showGhost, 5000);
    }
  });
}

setTimeout(showGhost, 5000);

setInterval(() => {
  if (Math.random() > 0.5) {
    bulbSound.play();
  }
}, 2000);

// game logic ==============================================
// questions
const questions = [
  {
      question: 'Which path leads to salvation?',
      options: {
          wrong1: 'The Dark Woods',
          wrong2: 'The Graveyard',
          right: 'The Glowing Lantern Road',
          wrong3: 'The Haunted Castle',
      }
  },
  {
      question: 'What lies beyond the dark forest?',
      options: {
          wrong1: 'A bottomless pit',
          right: 'A hidden sanctuary',
          wrong2: 'A cursed village',
          wrong3: 'An old grave',
      }
  },
  {
      question: 'Whose voice whispers in the dark?',
      options: {
          right: 'The ancient spirits',
          wrong1: 'The wandering souls',
          wrong2: 'The lost children',
          wrong3: 'The forest beast',
      }
  },
  {
      question: 'Which item holds the curse?',
      options: {
          wrong1: 'The broken mirror',
          right: 'The blood-stained necklace',
          wrong2: 'The cursed doll',
          wrong3: 'The haunted painting',
      }
  },
  {
      question: 'What must you say to escape?',
      options: {
          wrong1: 'The sacred oath',
          right: 'The words of passage',
          wrong2: 'The cursed incantation',
          wrong3: 'The silent plea',
      }
  }
];

let currentQuestion = 0;
const modal = document.getElementById('question-modal');
const jumpScareModal = document.getElementById('jump-scare-modal');
const holyScrollModal = document.getElementById('holy-scroll-modal');
const questionTitle = document.getElementById('question-title');
const questionText = document.getElementById('question-text');
const quizForm = document.getElementById('quiz-form');
const nextFearBtn = document.getElementById('next-fear');
const jumpScareSound = document.getElementById('jump-scare-sound');

document.getElementById('test-fate-btn').addEventListener('click', () => {
    modal.style.display = 'flex';
    loadQuestion(currentQuestion);
});

nextFearBtn.addEventListener('click', () => {
    const selectedAnswer = quizForm.querySelector('input[name="answer"]:checked');

    if (!selectedAnswer) return; 

    if (selectedAnswer.value.startsWith('wrong')) {
        triggerJumpScare();
    } else {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion(currentQuestion);
        } else {
            showHolyScroll();
        }
    }
});

function loadQuestion(index) {
    const question = questions[index];
    questionTitle.textContent = `Question ${index + 1}`;
    questionText.textContent = question.question;
    quizForm.innerHTML = '';

    Object.keys(question.options).forEach(key => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="radio" name="answer" value="${key}"> ${question.options[key]}`;
        quizForm.appendChild(label);
    });
}

function triggerJumpScare() {
    modal.style.display = 'none';
    jumpScareModal.style.display = 'flex';
    jumpScareSound.play();

    document.getElementById('try-again').addEventListener('click', () => {
        jumpScareModal.style.display = 'none';
        currentQuestion = 0;
        loadQuestion(currentQuestion);
        modal.style.display = 'flex';
    });
}

function showHolyScroll() {
    modal.style.display = 'none';
    holyScrollModal.style.display = 'flex';
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
}