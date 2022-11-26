
(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  refs.openModalBtn.forEach(open =>
    open.addEventListener('click', toggleModal)
  );

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  // refs.modal.addEventListener('click', () => {
  //   refs.modal.classList.add('is-hidden');
  // });

  refs.closeModalBtn.addEventListener('click', () => {
    refs.modal.classList.add('is-hidden');
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      refs.modal.classList.add('is-hidden');
    }
  });
  refs.modal.removeEventListener('click', {});
  refs.closeModalBtn.removeEventListener('click', {});
})();

document.removeEventListener('click', {});
