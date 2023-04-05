
const prices = document.getElementsByClassName('price')
const prices1 = document.getElementsByClassName('price1')

const price1 = Number(prices1[0].textContent)
let price = 0

document.querySelector('.byn').innerHTML = price1;
document.querySelector('.euro').innerHTML = price;

const include = document.getElementsByClassName('include')

function addition() {
    let price = 0
    for(let j = 0; j < include.length; j++){
        if(include[j].checked){
            price += Number(prices[j].textContent)
        }
        document.querySelector('.byn').innerHTML = price1;
        document.querySelector('.euro').innerHTML = price;
    }
}



