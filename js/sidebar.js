let isSidebarOpen = false;

const handleBtnClick = () => {
  const navbar = document.querySelector(".container");

  const openClass = "sidebar-open";

  if (isSidebarOpen) {
    navbar.classList.remove(openClass);

    isSidebarOpen = false;
  } else {
    navbar.classList.add(openClass);
    isSidebarOpen = true;
  }
};

const button = document.querySelector(".nav-toggle-button");

button.addEventListener("click", handleBtnClick);
