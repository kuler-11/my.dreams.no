const video = document.querySelector('#myVideo');
const btnPlay = document.querySelector('#play');
let number = 0;
const playlist = ["video1","video2","video3"];
//const playlust = ["video3","video2","video1"];
function play()
{
    console.log('кнопка')
    if (video.paused == false)
    {
        video.pause();
        btnPlay.innerText = "Play"
    }
    else
    {
        video.play();
        btnPlay.innerText = "pause"
    }
}

const muten = document.querySelector('#mute');

function mute()
{
    console.log('sneaky time!')
if (video.muted == false)
{
    muten.innerText = "on"
    video.muted = true;
    muten.style.background = "green";
}
else
{
    muten.innerText = "off"
    video.muted = false;
    muten.style.background = "red";
}
}


function next()
{
    if (number < playlist.length-1)
        {
            number++;
        }
        else    
        {
            number = 0;
        }
        video.src = `video/${playlist[number]}.mp4`;
}
function prev()
{
    if (number > 0)
        {
            number--;
        }
        else
        {
            number = playlist.length-1;
        }
        video.src = `video/${playlist[number]}.mp4`;
}
