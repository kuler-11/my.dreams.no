let elemLi = document.createElement("li");
let elemStart = document.querySelector('.gds__list');
let elemName = document.createElement("p");

elemName.classList.add("gds__text");
elemName.innerText = "timeline machine (машина времени) Т-800";

elemLi.classList.add("gds__item");

elemStart.innerText = "оно";

function upd()
{
    elemLi.appendChild(elemName);
    elemStart.appendChild(elemLi);
    console.log('dfhwhf')
}