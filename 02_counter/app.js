let count = 0;
const countEl = document.getElementById('count');
const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');

function checkNegativeOrPositive () {
    if (count > 0) {
        countEl.style.color = "green";
    } else if (count < 0) {
        countEl.style.color = "red";
    } else {
        countEl.style.color = "#161616";
    }
}

function increaseCount() {
    count++;
    countEl.textContent = count;
    checkNegativeOrPositive();
}
function decreaseCount() {
    count--;
    countEl.textContent = count;
    checkNegativeOrPositive();
}

function resetCount() {
    count = 0;
    countEl.textContent = count;
    checkNegativeOrPositive();
}

increaseBtn.addEventListener("click", increaseCount);
decreaseBtn.addEventListener("click", decreaseCount);
resetBtn.addEventListener("click", resetCount);