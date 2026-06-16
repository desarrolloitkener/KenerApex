/**
 * Kener Apex Landing — Interactions
 * Countdown, demo toggle (Centro de Comunicación), chatbot placeholder
 */

const EVENT_DATE = new Date('2026-09-04T08:00:00-05:00'); // 4 sep 2026, hora Cancún

function updateCountdown() {
  const now = new Date();
  const diff = EVENT_DATE - now;

  const els = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds'),
  };

  if (diff <= 0) {
    Object.values(els).forEach((el) => { if (el) el.textContent = '00'; });
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  if (els.days) els.days.textContent = String(days).padStart(2, '0');
  if (els.hours) els.hours.textContent = String(hours).padStart(2, '0');
  if (els.minutes) els.minutes.textContent = String(minutes).padStart(2, '0');
  if (els.seconds) els.seconds.textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* Demo: alternar vista de médico logueado */
const demoToggle = document.getElementById('demoToggle');
const commCenter = document.getElementById('communicationCenter');

if (demoToggle && commCenter) {
  demoToggle.addEventListener('click', () => {
    const isActive = demoToggle.classList.toggle('active');
    commCenter.classList.toggle('hidden', !isActive);

    if (isActive) {
      commCenter.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

/* Chatbot placeholder */
const chatbotBtn = document.getElementById('chatbotBtn');
if (chatbotBtn) {
  chatbotBtn.addEventListener('click', () => {
    const faq = document.getElementById('faq');
    if (faq) {
      faq.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

/* Acordeón: solo un item abierto por grupo */
document.querySelectorAll('.accordion').forEach((accordion) => {
  accordion.querySelectorAll('.accordion-item').forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        accordion.querySelectorAll('.accordion-item').forEach((other) => {
          if (other !== item) other.open = false;
        });
      }
    });
  });
});
