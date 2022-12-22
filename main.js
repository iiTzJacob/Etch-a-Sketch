const board = document.querySelector(".drawing-pad");
const small = document.querySelector("#small");
const medium = document.querySelector("#medium");
const big = document.querySelector("#big");
let size = 0;

small.addEventListener('click', function() {
    size = parseFloat(small.value);
    console.log(size);
})

medium.addEventListener('click', function() {
    size = parseFloat(medium.value);
    console.log(size);
})

big.addEventListener('click', function() {
    size = parseFloat(big.value);
    console.log(size);
})

