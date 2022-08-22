let isMenuOpen = false;

const menuRoot = document.querySelector(".menu_root");
const menuBtn = document.querySelector(".table_menu_btn");

const openMenuclass = "menuOpen";

const closeMenu = () => {
  menuRoot.classList.remove(openMenuclass);
  isMenuOpen = false;
};

let timerId;

const handleMenuBtnClick = () => {
  if (!isMenuOpen) {
    menuRoot.classList.add(openMenuclass);
    isMenuOpen = true;
    menuRoot.focus();
    window.clearTimeout(timerId);
  } else {
    closeMenu();
  }
};

const handleMenuRootBlur = (e) => {
  if (e.relatedTarget === menuBtn) {
    // close menu after click event to prevent reopening
    timerId = window.setTimeout(() => {
      closeMenu();
    }, 500);
  } else {
    closeMenu();
  }
};

menuBtn.addEventListener("click", handleMenuBtnClick);
menuRoot.addEventListener("blur", handleMenuRootBlur);
