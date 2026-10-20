const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const menuButton = document.getElementById('menuButton');
const nav = document.getElementById('nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

const spinButton = document.getElementById('spinButton');
if (spinButton) {
  spinButton.addEventListener('click', () => {
    const wheel = document.getElementById('spinWheel');
    const result = document.getElementById('spinResult');
    spinButton.disabled = true;
    result.textContent = 'Spinning demo…';
    const demoPosition = Math.floor(Math.random() * 20) + 1;
    wheel.style.transition = 'transform 2s cubic-bezier(.12,.7,.2,1)';
    wheel.style.transform = `rotate(${720 + Math.random() * 1440}deg)`;
    window.setTimeout(() => {
      result.textContent = `Demo result: position ${demoPosition}. This is not a real or reserved payout position.`;
      spinButton.disabled = false;
    }, 2100);
  });
}

const form = document.getElementById('registerForm');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    document.getElementById('formMessage').textContent =
      'Preview only: no account was created and no details were saved or sent.';
    form.reset();
  });
}