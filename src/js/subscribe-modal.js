(() => {

    const componentRoot=document.querySelector("section.subscribe");

    const refs = {
      openModalBtn: componentRoot.querySelector("[data-modal-open]"),
      closeModalBtn: componentRoot.querySelector("[data-modal-close]"),
      modal: componentRoot.querySelector("[data-modal]"),
      closeModalSubmit: componentRoot.querySelector("[data-modal-close-submit]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.closeModalSubmit.addEventListener("click", toggleModal);
  

    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
    
  })();