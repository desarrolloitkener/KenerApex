const form = document.getElementById('registrationForm');
const formCard = document.getElementById('formCard');
const formSuccess = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = Object.fromEntries(new FormData(form));
    console.info('[Demo] Confirmación enviada:', data);

    formCard.classList.add('hidden');
    formSuccess.classList.remove('hidden');
    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}
