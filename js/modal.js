const modalRoot = document.querySelector(".modal");
const modalContent = document.querySelector(".modal_content");

const handleModalOpen = () => {
  modalRoot.classList.remove("hidden_modal");
  modalContent.focus();
};

const modalOpenner = document.querySelector(".modal_oppener");
modalOpenner.addEventListener("click", handleModalOpen);

const handleModalClose = () => {
  modalRoot.classList.add("hidden_modal");
};

const modalCloser = document.querySelector(".modal_closer");
modalCloser.addEventListener("click", handleModalClose);

const handleModalBlur = (e) => {
  if (!modalContent.contains(e.relatedTarget)) {
    handleModalClose();
  }
};

modalContent.addEventListener("focusout", handleModalBlur);
