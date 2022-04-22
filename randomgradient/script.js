const card = document.querySelector('.card');

function handleRandomBackground(random) {
    if (random === 'hslaColor') {
        return Math.floor(Math.random() * 360);
    } else if (random === 'percentage') {
        return Math.floor(Math.random() * 60);
    } else if (random === 'percentage2'){
        return Math.floor(Math.random() * 100);
    }

    // let handlehandleRandomBackground = Math.floor(Math.random() * 360);
    // let randomPercentage = Math.floor(Math.random() * 100);
    // console.log(handlehandleRandomBackground, randomPercentage);

}

function handleBackgroundHTML() {
    return `background-color:hsla(${handleRandomBackground('hslaColor')},${handleRandomBackground('percentage')}%,65%,1);
    background-image:
    radial-gradient(at ${handleRandomBackground('percentage2')}% ${handleRandomBackground('percentage2')}%, hsla(${handleRandomBackground('hslaColor')},${handleRandomBackground('percentage')}%,65%,1) 0px, transparent 50%),
    radial-gradient(at ${handleRandomBackground('percentage2')}% ${handleRandomBackground('percentage2')}%, hsla(${handleRandomBackground('hslaColor')},${handleRandomBackground('percentage')}%,75%,1) 0px, transparent 50%),
    radial-gradient(at ${handleRandomBackground('percentage2')}% ${handleRandomBackground('percentage2')}%, hsla(${handleRandomBackground('hslaColor')},${handleRandomBackground('percentage')}%,78%,1) 0px, transparent 50%),
    radial-gradient(at ${handleRandomBackground('percentage2')}% ${handleRandomBackground('percentage2')}%, hsla(${handleRandomBackground('hslaColor')},${handleRandomBackground('percentage')}%,71%,1) 0px, transparent 50%),
    radial-gradient(at ${handleRandomBackground('percentage2')}% ${handleRandomBackground('percentage2')}%, hsla(${handleRandomBackground('hslaColor')},${handleRandomBackground('percentage')}%,62%,1) 0px, transparent 50%),
    radial-gradient(at ${handleRandomBackground('percentage2')}% ${handleRandomBackground('percentage2')}%, hsla(${handleRandomBackground('hslaColor')},${handleRandomBackground('percentage')}%,75%,1) 0px, transparent 50%),
    radial-gradient(at ${handleRandomBackground('percentage2')}% ${handleRandomBackground('percentage2')}%, hsla(${handleRandomBackground('hslaColor')},${handleRandomBackground('percentage')}%,66%,1) 0px, transparent 50%);`
}

card.style = handleBackgroundHTML();
