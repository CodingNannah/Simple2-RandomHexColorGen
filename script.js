const colors = document.querySelectorAll('.color-box h2');
// console.log(colors);

function generateColors() {
    colors.forEach((color) => {
        let hexCode = '#' + Math.random().toString(16).substring(2, 8) ;
        // console.log(hexCode);
        color.style.backgroundColor = hexCode;
        color.innerHTML = hexCode;
    })
}

generateColors();