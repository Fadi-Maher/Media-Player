let playBtn = document.getElementById("playBtn");
let pauseBtn = document.getElementById("pauseBtn");
let muteBtn = document.getElementById("muteBtn");
let resetBtn = document.getElementById("resetBtn");

let timer = document.querySelectorAll('input[type="range"]')[0];
let volume = document.querySelectorAll('input[type="range"]')[1];
  




///////////audios//////////////////////
let audio1 = document.getElementById("audio1");


 ////////////////songNames//////////////////////////
let songName1=document.getElementById("songName1")
let songName2=document.getElementById("songName2")
let songName3=document.getElementById("songName3")


/////////////// image /////////////////////////////////////
let image= document.getElementById("image")

////////////play fun ///////////////
playBtn.onclick = function() {
    audio1.play();
};

////////////pause fun ///////////////
 pauseBtn.onclick = function() {
    audio1.pause();
};

////////////mute fun ///////////////
 muteBtn.onclick = function() {
    audio1.muted=!audio1.muted
};

////////////reset fun ///////////////
 resetBtn.onclick = function() {
      audio1.currentTime = 0;
    audio1.pause()
 }
///////////////songNames fun  ///////////////////
 songName1.onclick=function(){
     image.src = "./download (1).jfif";
    audio1.src= "./1.mp3"
    timer.min=0
    timer.max=232
    timer.value = 0;  
    audio1.play()
 }

songName2.onclick = function() {
    image.src = "./download (2).jfif";
    audio1.src = "./2.mp3";
    timer.min = 0
    timer.max = 272;
     timer.value = 0;  
    audio1.play();
};

songName3.onclick = function() {
    image.src= "./download.jfif"
    audio1.src = "./3.mp3"; 
    timer.min=0
    timer.max=223
    audio1.play(); 
};

////////////////handle timer //////////////////////////////////////////////

timer.oninput= function(){
 audio1.currentTime = timer.value
    timer.min=0
    if( image.src === "./download (1).jfif"){
        timer.max=232
    }
    if( image.src === "./download (2).jfif"){
        timer.max=272
    }
    if( image.src === "./download.jfif"){
        timer.max=216
    }
audio1.play()
}

////////////////handle volume //////////////////////////////////////////////

volume.oninput=function(){
    audio1.volume = volume.value/100
}