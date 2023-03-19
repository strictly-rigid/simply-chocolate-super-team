(() => {
  const componentRoot = document.querySelector('.top-sell');

  const refs = {
    openModalBtn: componentRoot.querySelector('[data-modal-open-buynow]'),
    closeModalBtn: componentRoot.querySelector('[data-modal-close-buynow]'),
    modal: componentRoot.querySelector('[data-modal-buynow]'),
    closeModalSubmit: componentRoot.querySelector(
      '[data-modal-close-submit-buynow]'
    ),
  };

  refs.openModalBtn.addEventListener('click', toggleModalBuyNow);
  refs.closeModalBtn.addEventListener('click', toggleModalBuyNow);
  refs.closeModalSubmit.addEventListener('click', toggleModalBuyNow);

  function toggleModalBuyNow() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
