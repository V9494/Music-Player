
//Created the array arr which contains the objects.
let arr = [{name:"Arjan Vailly Ne", url:"./songs/Arjan Vailly Ne.mp3",img:"./images/animal.jpg", Artist:"Bhuppinder Babble", Duration:"3:02"},

{name:"Jale 2", url:"./songs/Jale 2.mp3",img:"./images/jale.jpg",Artist:"Sapana Choudhary",Duration:"2:09"},

{name:"Pehle Bhi Main", url:"./songs/Pehle Bhi Main.mp3",img:"./images/animal.jpg",Artist:"Raj Shekher",Duration:"4:10"},

{name:"Ram Siya Ram",url:"./songs/Ram Siya Ram.mp3",img:"./images/ram2.jpg",Artist:"Ajay Atul",Duration:"3:50"}];



let body = document.querySelector('body');
let AllSongs = document.querySelector(".All-songs");
let poster = document.querySelector(".image")
let SongInfo = document.querySelector(".right-side");
let Songs = document.querySelector(".songs");

let selectedSong = 0; //It uses for the containing the id of the song.

let playSong = document.querySelector("#play");
let forward = document.querySelector("#forward");
let backward = document.querySelector("#backward");
let alertSong = document.querySelector("#alert");
let player = document.querySelector("#player");

let flag = 0; // it is used for the play and stop song

let audio = new Audio(); //Created the object of the audio.

//Created the main function.
function mainFunction(){
    var clutter = ""; //Clutter initially containing empty string.

    arr.forEach(function(elem,id){ //Uses the for each loop adding the data into clutter using dynamicly.

        clutter += `<div class="songs" id = ${id}>  
            <img src="${elem.img}" alt="">
             <h4>${elem.name}</h4>
             <h5>${elem.Duration}</h5>
             <h4>${elem.Artist}</h4>
            </div>`
        //4 objects are added in the clutter.
    });
    AllSongs.innerHTML = clutter; //AllSongs is basically container clutter added init.

    //arr[selectedSong].img is act as that arr[0].img => 0 index song image.

    poster.innerHTML = ` <img src="${arr[selectedSong].img}" 
    alt="">`; //poster means changes the image which the song plays

    //audio.src = arr[0].url; Getting the link of 0 index song.

    audio.src = arr[selectedSong].url;

    //Here chages the SongDetail which you played.
    SongInfo.innerHTML = `<p id="title">Title</p>
    <h1 id="SongName">${arr[selectedSong].name}</h1>
    <h2 id="singer">${arr[selectedSong].Artist}</h2>
    <p id="Artist">Artist</p>`
    // Songs.style.backgroundColor = "red";
    
}

//Calling the mainFunction();
mainFunction();

//Adding the eventlistner to the AllSongs container

AllSongs.addEventListener("click", function(dets){

    //dets means details.

    //dets.target.id = getting the perticulaer index of the that song after the Clicking on it.
    selectedSong = dets.target.id;
   
    poster.innerHTML = ` <img src="${arr[selectedSong].img}" alt="">`
    // body.style.backgroundImage = `"url(${arr[selectedSong].img})"`;
    // body.style.filter = blur("10px");

    //Calling the mainFunction because the SelectedSong now update.
    mainFunction();
    audio.play();

    //adding the animation after the song plays

    poster.style.animation = "rotatea 5s linear infinite";
    
    playSong.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    flag = 1;
    
    
});

//add listeners for the play song.
playSong.addEventListener("click", function(){
    if(flag == 0)
    {
        playSong.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
        mainFunction();
        audio.play();
        flag = 1;
        poster.style.animation = "rotatea 5s linear infinite";
        
    }
    else{
        playSong.innerHTML = `<i class="ri-play-fill"></i>`;
        mainFunction();
        audio.pause();
        flag = 0;
        poster.style.animation = "stop";
    }
})



//add listeners for the forward function.
forward.addEventListener('click',function(){
    if(selectedSong < arr.length - 1){
        playSong.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
        selectedSong++;
        mainFunction();
        audio.play();
        poster.style.animation = "rotatea 5s linear infinite";
        
        forward.style.opacity = 1;
        backward.style.opacity = 1;
    }
    else{
        forward.style.opacity = 0.4;
    }
});


//add listeners for the backward function.
backward.addEventListener('click',function(){
    if(selectedSong > 0){
        playSong.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
        selectedSong--;
        mainFunction();
        audio.play();
        poster.style.animation = "rotatea 5s linear infinite";
        
        backward.style.opacity = 1;
        forward.style.opacity = 1;
    }
    else{
        backward.style.opacity = 0.4;
        
    }
});


//added the event listener for the song ended. Which helps play the next song after completion of the song

audio.addEventListener("ended",function(){

    //if the selectedsong in smaller than 3 the play next song.
    if(selectedSong < arr.length-1){
        // audio.src = arr[selectedSong+1].url; => error
        selectedSong++;
        mainFunction();
        audio.play();
    }
})


