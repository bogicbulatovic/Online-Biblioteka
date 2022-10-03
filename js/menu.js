const menuWraps = document.querySelectorAll(".menu_trigger_wrap");

menuWraps.forEach((menuWrap) => {
  const menuRoot = menuWrap.querySelector(".menu_root");
  const menuBtn = menuWrap.querySelector(".menu_anchor");

  let isMenuOpen = false;

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
      if (!menuRoot.contains(e.relatedTarget)) {
        closeMenu();
      }
    }
  };

  menuBtn.addEventListener("click", handleMenuBtnClick);
  menuRoot.addEventListener("blur", handleMenuRootBlur);
});
