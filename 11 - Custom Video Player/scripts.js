//Get the elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')
const fullscreenButton = player.querySelector('[data-fullscreen');


//build out Functions
function togglePlay(){
    if (video.paused){
        video.play();
        //toggle.textContent = ("❚❚");
    }else{
        video.pause();
        //toggle.textContent = ("►");
    }
};

function updateButtion(){
    const icon = video.paused ? '►' : '❚❚';
    toggle.textContent = icon;
}

function skip(){
    const skipAmount = this.dataset.skip;
    video.currentTime += parseFloat(skipAmount);
};

function handleRangeUpdate(){
    console.log(this.value);
    video[this.name] = this.value;

}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
   // console.log(e);
    const scrubTime = (e.offsetX/progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function goFullScreen(){
    video.webkitRequestFullscreen();
}

//Create Event Listeners
video.addEventListener('click',togglePlay);
toggle.addEventListener('click',togglePlay);
video.addEventListener('play', updateButtion);
video.addEventListener('pause', updateButtion);
skipButtons.forEach(button => button.addEventListener('click',skip));
ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));
video.addEventListener('timeupdate', handleProgress);
progress.addEventListener('click', scrub);
let mousedown = false;

progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
fullscreenButton.addEventListener('click', goFullScreen);