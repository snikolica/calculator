'use strict'

const result = document.querySelector('.result');
const symbols = document.querySelectorAll('.symbol-type');
const numbers = document.querySelectorAll('.number');
const zero = document.querySelector('.zero');
const equally = document.querySelector('.equally');
const del = document.querySelector('.del');


let b;
numbers.forEach(num => {
    
    num.addEventListener('click', () => {
        result.textContent += Number(num.textContent);
    })

})

    zero.addEventListener('click', (e) => {
        result.textContent += Number(zero.textContent);
    })



symbols.forEach(sym => {
    sym.addEventListener('click', () => {
         result.textContent += sym.textContent;
    })
})
equally.addEventListener('click', () => {
    result.textContent = eval(result.textContent)
})
del.addEventListener('click', () => {
    result.textContent =  result.textContent.slice(0,-1)
})