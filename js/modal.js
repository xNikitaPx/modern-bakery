const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelector(".modal-btn-open");
const modalButtonOpen = document.querySelector(".modal-button-open");
const modalBtnClose = document.querySelector(".modal-btn-close");
const toggleModal = () => modal.classList.toggle("is-hidden");

modalBtnOpen.addEventListener("click", toggleModal);
modalButtonOpen.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);
