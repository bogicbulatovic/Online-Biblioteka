const resetButton = document.querySelector(".reset_password_button");

resetButton.addEventListener("click", function () {
  let modal = document.querySelector(".reset_password_modal");
  modal.classList.remove("hidden_modal");
});

const cancelButton = document.querySelector(".close");

cancelButton.addEventListener("click", function () {
  let modal = document.querySelector(".reset_password_modal");
  modal.classList.add("hidden_modal");
});
