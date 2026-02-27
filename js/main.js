/* ============================================
   DYNAMIC YEAR — footer copyright
   ============================================ */
document.getElementById("year").innerHTML = new Date().getFullYear();


/* ============================================
   PROGRESS BAR — scroll position indicator
   ============================================ */
window.addEventListener('scroll', () => {
  const s = document.documentElement.scrollTop;
  const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.getElementById('progress-bar').style.width = (s / h * 100) + '%';
});


/* ============================================
   NAVBAR — scroll effect + active link + section pill
   ============================================ */
const navbar  = document.getElementById('navbar');
const navPill = document.getElementById('navPill');
const SECTIONS = ['home','about','team','services','portfolio','blog','testimonials','faq','contact'];

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
  updateActiveNav();
});

/* Highlights the correct nav link based on scroll position */
function updateActiveNav() {
  const links = document.querySelectorAll('.nav-links a');
  let current = '';

  SECTIONS.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 110) current = id;
  });

  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });

  /* Update the section pill label in the navbar */
  if (current) navPill.textContent = current.charAt(0).toUpperCase() + current.slice(1);
}


/* ============================================
   MOBILE MENU — hamburger open/close
   ============================================ */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

function toggleMobile() {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
}

function closeMobile() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('mobileClose').addEventListener('click', closeMobile);


/* ============================================
   SCROLL REVEAL — fade-in elements on scroll
   ============================================ */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));


/* ============================================
   SECTION BACKGROUNDS — alternating bg classes
   ============================================ */
const bgMap = {
  home:         'bg-a',
  about:        'bg-b',
  team:         'bg-c',
  services:     'bg-b',
  portfolio:    'bg-a',
  blog:         'bg-b',
  testimonials: 'bg-c',
  faq:          'bg-b',
  contact:      'bg-a'
};

SECTIONS.forEach(id => {
  const el = document.getElementById(id);
  if (el && bgMap[id]) el.classList.add(bgMap[id]);
});


/* ============================================
   BLOG — Read More / Read Less toggle
   ============================================ */
function toggleBlog(id, btn) {
  const card = document.getElementById(id);
  if (card.classList.contains('expanded')) {
    card.classList.remove('expanded');
    btn.textContent = 'Read More →';
  } else {
    card.classList.add('expanded');
    btn.textContent = 'Read Less ↑';
  }
}


/* ============================================
   CONTACT FORM — validation + submission
   ============================================ */
function sendMessageAlert() {
  const form     = document.getElementById('contactForm');
  const inputs   = form.querySelectorAll('input');
  const textarea = form.querySelector('textarea');
  const name     = inputs[0].value.trim();
  const email    = inputs[1].value.trim();
  const message  = textarea.value.trim();

  /* Validate required fields */
  if (name === '' || email === '' || message === '') {
    alert("Please fill in all required fields ⚠️");
    return;
  }

  alert("Thank you for contacting SHK Devs 🚀 We will get back to you soon!");
  form.reset();
}


/* ============================================
   ALERT METHODS — Home section buttons
   ============================================ */
function servicesAlert()  { alert("You clicked on Explore Services 🚀"); }
function portfolioAlert() { alert("You clicked on Our Work 💼"); }
function contactAlert()   { alert("You clicked on Get in Touch 📩"); }
function discoverAlert()  { alert("Discovering smart digital solutions ✨"); }


/* ============================================
   ALERT METHODS — About section buttons
   ============================================ */
function teamAlert()      { alert("Meet the experts behind SHK Devs 👨‍💻👩‍💻"); }
function solutionsAlert() { alert("Exploring our smart digital solutions 🚀"); }
function startProjectAlert() { alert("Let's start building something amazing together ✨"); }


/* ============================================
   ALERT METHODS — Team section buttons
   ============================================ */
function contactTeamAlert() { alert("Our team is ready to help you 🤝"); }


/* ============================================
   ALERT METHODS — Services section buttons
   ============================================ */
function quoteAlert() { alert("Let's start your project and turn ideas into reality 🚀"); }


/* ============================================
   ALERT METHODS — Blog / CTA buttons
   ============================================ */
function ctaContactAlert() { alert("Ready to kickstart your next amazing project with SHK Devs? 🚀"); }


/* ============================================
   ALERT METHODS — FAQ section buttons
   ============================================ */
function faqContactAlert() { alert("Need help? Our team is here to support you anytime! 🤝"); }