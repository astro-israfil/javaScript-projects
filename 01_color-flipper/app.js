const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const colorSwitcherBtn = document.querySelector('.color-switcher-btn');
const colorCode = document.querySelector('.color-code');

function randomColorSelector(colorsArr) {
    if (Array.isArray(colorsArr)) {
        const randomIndex = Math.floor(Math.random() * colorsArr.length);
        console.log(randomIndex);
        return colorsArr[randomIndex];
    } else {
        return "#FFF";
    }
}

function setBackgroundColor () {
    const bgColor = randomColorSelector(colors);
    document.body.style.backgroundColor = bgColor;
    colorCode.textContent = bgColor;
}

colorSwitcherBtn.addEventListener("click", setBackgroundColor);