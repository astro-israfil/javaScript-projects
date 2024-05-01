const navEl = document.querySelector('.nav-links');
const hambugerBtn = document.querySelector('.nav-toggle-btn');

hambugerBtn.addEventListener("click", function () {
    navEl.classList.toggle("show-links");
})