let isOpen = false;

const handleBtnClick = () => {
  const navbar = document.querySelector(".navbar");

  const openClass = "navbar-open";

  if (isMenuOpen) {
    navbar.classList.remove(openClass);

    isMenuOpen = false;
  } else {
    navbar.classList.add(openClass);
    isMenuOpen = true;
  }
};

const button = document.querySelector(".nav-toggle-button");

button.addEventListener("click", handleBtnClick);
