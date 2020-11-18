const app = () => {
    const song = document.querySelector('.song'),
        play = document.querySelector('.play'),
        outline = document.querySelector('.moving_outline circle'),
        video =  document.querySelector('.vid_container video');

    //sounds
     const sounds = document.querySelectorAll('.sound_picker button'),

    //time display
            timedisplay = document.querySelector('.time_display'),
            timeSelect = document.querySelectorAll('.time_select button');

  //get the length of the outline
const outlineLength = outline.getTotalLength();
// console.log(outlineLength);

    //duration
    let fakeDuration = 600;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;
 
    //pick different sounds
    sounds.forEach(sound => {
        sound.addEventListener('click', function(){
            song.src = this.getAttribute('data-sound');
            video.src = this.getAttribute('data-video');
            checkPlay(song);
        });
    });
    
    //play sound
    play.addEventListener('click', () => {
        checkPlay(song);
    });


    //select sound
    timeSelect.forEach(option =>{
        option.addEventListener('click', function(){
            fakeDuration = this.getAttribute('data-time');
            timedisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`
        });
    });


    //Create a function specific to stop and play sound
    const checkPlay = song => {
        if(song.paused){
            song.play(); 
            video.play();
            play.src = 'svg/pause.svg';
        } else {
            song.pause();
            video.pause();
            play.src = 'svg/play.svg';
        }
    };

    //we can animate the circle
    song.ontimeupdate = () => {
        let currTime = song.currentTime,
         elaped = fakeDuration - currTime,
         seconds = Math.floor(elaped % 60),
         minutes = Math.floor(elaped / 60);

    //animate the circle 
    let progress = outlineLength - (currTime / fakeDuration ) * outlineLength;
    outline.style.strokeDashoffset = progress;

    //animate the text
    timedisplay.textContent = `${minutes}:${seconds}`;

    if(currTime > fakeDuration){
        song.pause();
        song.currentTime = 0;
        play.src = 'svg/play.svg';
        video.pause();
    }
    }; 
};

app();


