document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.backdrop');
  const modalBtnOpen = document.querySelector('.modal-btn-open');
  const modalBtnClose = document.querySelector('.modal-btn-close');

  if (!modal || !modalBtnOpen || !modalBtnClose) {
    return;
  }

  const openModal = () => {
    modal.classList.remove('backdrop__is-hidden');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.add('backdrop__is-hidden');
    document.body.style.overflow = '';
  };

  modalBtnOpen.addEventListener('click', openModal);
  modalBtnClose.addEventListener('click', closeModal);

  // Закриття по кліку на фон (не на саму модалку)
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Закриття по Esc
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('backdrop__is-hidden')) {
      closeModal();
    }
  });
});
