const btnsContainer = document.getElementById("tab_buttons_container");

const btnsCollection = btnsContainer.querySelectorAll("button");

const btnsArray = Array.from(btnsCollection);

btnsArray.forEach((btnEl) => {
  const handleClick = (e) => {
    const clickedBtn = e.target;

    clickedBtn.classList.add("active_button");

    btnsArray.forEach((btnEl) => {
      if (btnEl !== clickedBtn) {
        btnEl.classList.remove("active_button");
      }
    });
  };

  btnEl.addEventListener("click", handleClick);
});
