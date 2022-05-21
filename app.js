const loadText = document.querySelector('.loading-text');
const background = document.querySelector('.bg');

let loading = 0;

function blurring() {

    loading++;

    if (loading > 99) {
        clearInterval(interval);     
    }

    loadText.innerHTML = `${loading}%`
    loadText.style.opacity = scale(loading, 0, 100, 1, 0);
    background.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`
}

let interval = setInterval(blurring, 30); 

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}