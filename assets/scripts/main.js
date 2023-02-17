let navToggle = document.getElementById("nav-toggle")
let navClose = document.getElementById("nav-close")
let navMenu = document.getElementById("nav-menu")

navToggle.addEventListener("click", function () {
    navMenu.classList.add("active")
})

navClose.addEventListener("click", function () {
    navMenu.classList.remove("active")
})