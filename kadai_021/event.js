'use strict'

const button = document.getElementById('btn');
const newText = document.getElementById('text');

button.addEventListener('click',() => {
    setTimeout(() => {
        newText.textContent = 'ボタンをクリックしました'
    }, 2000);
});