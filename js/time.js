function currentTime() // Сама функция
{
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hours = plusZero(hours);
    minutes = plusZero(minutes);
    seconds = plusZero(seconds);
    document.querySelector('.time').innerHTML = hours+":"+minutes+":"+seconds;
    setTimeout(currentTime,1000);
}
currentTime(); // Запустить функцию

function plusZero(number)
{
    if (number < 10)
    {
        return "0"+number
    }
    else
    {
        return number
    }
}
