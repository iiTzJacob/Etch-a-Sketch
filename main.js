function makeSquare(side) {
    const total = side * side;
    const html = [];
    for (let i = 0; i < total; i++) {
        html.push('<div class="square"></div>');
    }
    return html.join('');
}

const container = document.querySelector('.container');
container.innerHTML = makeSquare(16)

const squares = container.querySelectorAll('.square');

function changeColor() {
    this.classList.toggle('black');
}

squares.forEach(square => square.addEventListener('mouseover', changeColor));

const btn = document.querySelector('.button');
btn.addEventListener('click', changeLayout);

function changeLayout() {
    const size = parseInt(prompt("How many square would you like?"));
    
    if (size > 1 && size < 100) {
        let squareSize = (960 / size) - 2;

        document.documentElement.style.setProperty('--side-square', squareSize + 'px');
        container.innerHTML = makeSquare(size);

        const squares = container.querySelectorAll('.square');
        squares.forEach(square => square.addEventListener('mouseover', changeColor));
    } else {
        alert("The number must be between 1 and 100!");
    }
}