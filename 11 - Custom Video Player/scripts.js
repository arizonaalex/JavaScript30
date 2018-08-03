//Get the elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')


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

//Create Event Listeners
video.addEventListener('click',togglePlay);
toggle.addEventListener('click',togglePlay);
video.addEventListener('play', updateButtion);
video.addEventListener('pause', updateButtion);
skipButtons.forEach(button => button.addEventListener('click',skip));
ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));
