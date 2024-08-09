/*console.log("hello pushes!");
var timur = 14;
document.querySelector(".main").style.background = "blue";
console.log(document.querySelector(".product__title").innerHTML);

document.querySelector(".product__title").innerHTML = "я умнее себя";

var hyz = "ХА! Я умнее тебя! у меня памяти 16 мегабайт хах";
console.log(hyz)

Переменная - хранилище информации: имя - тимур, значение - 14!!!
*/
const shopBtn = document.querySelector('.product__btn');
let buyf = false;
let price = shopBtn.previousSibling.previousSibling.innerText;
let basket = 0;
console.log(price);
const basketPrice = document.querySelector('.price');
price = parseInt(price)
const dqSn = document.querySelector(".bodyr");

function buy()
{
    console.log('сработало');
    
    if (buyf == false)
        {
        shopBtn.style.background = "green";
        shopBtn.innerText = "В корзине";
        shopBtn.style.color = "blue";
        buyf = true;
        basket = basket+price;
    }
    else
    {
        shopBtn.style.background = "black";
        shopBtn.innerText = "уверен?";
        shopBtn.style.color = "red";
        buyf = false;
        basket = basket-price;
    }
    basketPrice.innerText = basket+ 'Р';
}

const shoppr = document.querySelector('.product__price')
let prin = false;
function prip()
{
    console.log('сработало 2');

    if (prin == false)
    {
        shoppr.style.color = "green";
        shoppr.innerText = "Скидки!) 10$";
        prin = true;
    }
    else
    {
        shoppr.style.color = "red";
        shoppr.innerText = "Скидок нет!( 10000000$";
        prin = false;
    }
}
let nights = false;
function night()
{
    if (nights == false)
    {
        dqSn.style.background = "gray";
        document.querySelector('.header').style.background = "rgb(58, 58, 58)";
        nights = true;
    }
    else
    {
        dqSn.style.background = "white";
        document.querySelector('.header').style.background = "rgb(200, 200, 200)";
        nights = false;
    }
}