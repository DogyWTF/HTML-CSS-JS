let menu = document.querySelector(".menu")
let btn = document.querySelector(".menu_btn")
let btn2 = document.querySelector(".menu_btn1")

btn.addEventListener("click", () => {
    menu.style.right = `0%`;
})
btn2.addEventListener("click", () => {
    menu.style.right = `-100%`;
})