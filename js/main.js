const navHTML = `
<nav class="nav" id="nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <div class="nav-logo-icon">Y</div>
      Y'abal
    </a>
    <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation menu">
      <span></span><span></span><span></span>
    </button>
    <div class="nav-links" id="navLinks">
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="programs.html">Programs</a>
      <a href="impact.html">Impact</a>
      <a href="news.html">News</a>
      <a href="contact.html">Contact</a>
      <a href="donate.html" class="nav-donate-btn">Donate</a>
    </div>
  </div>
</nav>`;

const footerHTML = `
<footer class="footer">
  <div class="footer-grid">
    <div>
      <h4>Y'abal</h4>
      <p>Y'abal is a Belgian non-profit organisation (ASBL) dedicated to promoting the social and economic advancement of disadvantaged groups in Belgium and across Europe. Founded in 2016 in Hasselt, we work to create lasting change through education, economic development, and community building.</p>
    </div>
    <div>
      <h4>Quick Links</h4>
      <ul class="footer-links">
        <li><a href="about.html">About Us</a></li>
        <li><a href="programs.html">Our Programs</a></li>
        <li><a href="impact.html">Our Impact</a></li>
        <li><a href="news.html">News</a></li>
        <li><a href="donate.html">Donate</a></li>
      </ul>
    </div>
    <div>
      <h4>Programs</h4>
      <ul class="footer-links">
        <li><a href="programs.html#education">Education Initiative</a></li>
        <li><a href="programs.html#economic">Economic Empowerment</a></li>
        <li><a href="programs.html#community">Community Development</a></li>
      </ul>
    </div>
    <div>
      <h4>Contact</h4>
      <ul class="footer-links">
        <li>Villerspark 4/6</li>
        <li>3500 Hasselt, Belgium</li>
        <li><a href="mailto:ouajoa2@gmail.com">ouajoa2@gmail.com</a></li>
        <li><a href="tel:+32470123456">+32 470 12 34 56</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2024 Y'abal ASBL. All rights reserved. Belgian Enterprise Number: 0665.759.401</p>
    <p><a href="privacy-policy.html">Privacy Policy</a></p>
  </div>
</footer>`;

function initNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  const nav = document.getElementById('nav');
  
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }
  
  window.addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 10);
  });

  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      item.classList.toggle('open');
    });
  });

  const active = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === active) a.classList.add('active');
  });
}

document.addEventListener('DOMContentLoaded', initNav);
