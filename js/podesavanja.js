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

    const clickedButtonId = clickedBtn.id;
    const matchingParagraph = document.querySelector(
      `[data-ownerId="${clickedButtonId}"]`
    );

    const tabContentCollection = document.querySelectorAll(".tabContent");
    const tabContentArray = Array.from(tabContentCollection);

    tabContentArray.forEach((tabContentEl) => {
      if (tabContentEl.dataset.ownerid !== clickedButtonId) {
        tabContentEl.classList.add("hidden");
      } else {
        matchingParagraph.classList.remove("hidden");
      }
    });
  };

  btnEl.addEventListener("click", handleClick);
});
