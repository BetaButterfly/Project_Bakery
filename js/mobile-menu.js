document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  const btnOpen = document.querySelector('.menu-btn-open');
  const btnClose = document.querySelector('.menu-btn-close');

  if (!mobileMenu || !btnOpen || !btnClose) {
    return;
  }

  const openMenu = () => {
    mobileMenu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  btnOpen.addEventListener('click', openMenu);
  btnClose.addEventListener('click', closeMenu);

  // Закриття при кліку на будь-яке посилання в меню
  mobileMenu.querySelectorAll('.mobile-menu__link').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Закриття по Esc
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });
});
