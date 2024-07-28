import {
    mobileModalBtn,
    modal,
    closeModalBtn,
    menuBtn,
    menuList,
} from './elements.js'


mobileModalBtn.addEventListener("click",() => {
    modal.classList.toggle("is-open");
})

closeModalBtn.addEventListener("click",() => {
    modal.classList.remove("is-open");
})

modal.addEventListener("click", (evt) => {
    if (evt.target.nodeName !== "A") {
        return;
    }
    modal.classList.remove("is-open");
})

menuBtn.addEventListener("click",() => {
    menuList.classList.toggle("is-open");
})

menuList.addEventListener("click", (evt) => {
    if (evt.target.nodeName !== "A") {
        return;
    }
    menuList.classList.remove("is-open");
})