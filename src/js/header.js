import {
    mobileModalBtn,
    modal,
    closeModalBtn,
    menuBtn,
    menuList,
    body,
} from './elements.js'

mobileModalBtn.addEventListener("click",() => {
    modal.classList.toggle("is-open");
    body.classList.toggle('no-scroll');
})

closeModalBtn.addEventListener("click",() => {
    modal.classList.remove("is-open");
    body.classList.toggle('no-scroll');
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
    }
)