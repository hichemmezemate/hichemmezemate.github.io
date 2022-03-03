
let myBtn = document.querySelector('#menuBtn');
let Box = document.querySelector('#slideBox');

myBtn.addEventListener('click', showTab);
Box.addEventListener('mouseleave', hideTab );

function showTab() {
    Box.classList.toggle("change");
}

function hideTab() {
    Box.classList.toggle('change')
}

