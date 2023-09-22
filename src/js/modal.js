document.addEventListener('DOMContentLoaded', function () {
  const modals = document.querySelectorAll('.modal');
  const modalTriggers = document.querySelectorAll('.js-modal-open');
  const closeButtons = document.querySelectorAll('.js-modal-close');
  const backdrop = document.querySelector('.modal-backdrop');
  const body = document.body;

  function openModal(modalId) {
    const modal = document.querySelector(`[data-modal-id="${modalId}"]`);
    modal.classList.add('open');
    backdrop.classList.add('open');
    body.classList.add('no-scroll');
    document.addEventListener('keydown', closeModalOnEscape);
  }

  function closeModal(modalId, event) {
    event.preventDefault();
    const modal = document.querySelector(`[data-modal-id="${modalId}"]`);
    modal.classList.remove('open');
    backdrop.classList.remove('open');
    body.classList.remove('no-scroll');
    document.removeEventListener('keydown', closeModalOnEscape);

    //   BUY NOW THANK YOU
    if (event.currentTarget.classList?.contains('modal-buy-now-form-submit')) {
      openModal(2);
    }

    //   LEAVE REVIEW THANK YOU
    if (event.currentTarget.classList?.contains('modal-leave-review-btn')) {
      openModal(4);
    }
  }

  function closeModalOnEscape(event) {
    if (event.key === 'Escape') {
      modals.forEach(modal => {
        if (modal.classList.contains('open')) {
          closeModal(modal.dataset.modalId, event);
        }
      });
    }
  }

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', function () {
      const modalId = this.dataset.modal;
      openModal(modalId);
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', function (event) {
      const modalId = this.dataset.modal;
      closeModal(modalId, event);
    });
  });

  backdrop.addEventListener('click', function (event) {
    modals.forEach(modal => {
      if (modal.classList.contains('open')) {
        closeModal(modal.dataset.modalId, event);
      }
    });
  });
});
