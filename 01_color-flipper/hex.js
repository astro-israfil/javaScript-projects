const colorSwitcherBtn = document.querySelector('.color-switcher-btn');
const colorCode = document.querySelector('.color-code');

function getRandomHexColor () {
    const hexTemp = '0123456789ABCDEF';
    let hexCode = '#';

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * hexTemp.length);
        hexCode += hexTemp.charAt(randomIndex);
    }
    
    return hexCode;
}

function setBackgroundColor () {
    const bgColor = getRandomHexColor();
    document.body.style.backgroundColor = bgColor;
    colorCode.innerText = bgColor;
}

colorSwitcherBtn.addEventListener("click", setBackgroundColor);