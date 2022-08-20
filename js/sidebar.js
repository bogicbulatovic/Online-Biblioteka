let isOpen = false

const handleBtnClick = () => {


    const navbar = document.querySelector(".navbar");

    const openClass = "navbar-open"

    if (isOpen) {

        navbar.classList.remove(openClass);

        isOpen = false;
    } else {

        navbar.classList.add(openClass)
        isOpen = true
    }


}


const button = document.querySelector(".nav-toggle-button")

button.addEventListener("click", handleBtnClick)


