
const videobtn = document.querySelector("#videobtn");
const videoInput = document.querySelector("#videoInput");
const videoPlayer = document.querySelector("#main");
const VLCicon = document.querySelector("#vlc-icon");


const handleInput = ()=> {
    console.log("input is selected")
    // you have to click that button
    videoInput.click();
}

const acceptInputHandler = (obj)=> {
    // console.log("file is selected");
    // console.log("obj", ob.target.files);
    // to get file selected
    const selectedVideo = obj.target.files[0];
    // console.log("selected file", selectedFiles)
    // src -> base^4
    const link = URL.createObjectURL(selectedVideo);

    const video = document.createElement("video");
    video.src = link;
    video.setAttribute("class","video");
    videoPlayer.appendChild(video);
    video.controls="true";
    video.play();
    video.volume = 0.3;
    // console.log("duration of the video", video.duration);

    video.addEventListener("loadedmetadata", function(){
        // your time will there
    })
    VLCicon.style.display = "none";

}

videobtn.addEventListener("click", handleInput);
// when file is selected
videoInput.addEventListener("change", acceptInputHandler);


/*****volume and speed *******/
const speedUp = document.querySelector("#speedUp");
const speedDown = document.querySelector("#speedDown");
const volumeUP = document.querySelector("#volumeUp");
const volumeDown = document.querySelector("#volumeDown");
const toast = document.querySelector(".toast");

const speedUpHandler =()=> {
    // alert("speedUp is clicked");
    // video -> speed increase
        // * where is the video 
    // which property you will use to increase its video
        // * how much you want to increase
    const video = document.querySelector("video");

    if(video==null) {
        // video is not present then
        return;
    }
    if(video.playbackRate > 3) {
        return;
    }
    const increaseSpeed = video.playbackRate + 0.5;
    video.playbackRate = increaseSpeed;
    console.log("Increase Speed", increaseSpeed);
    showToast(increaseSpeed + "X");
}

const speedDownHandler = () => {
    const video = document.querySelector("video");

    if(video == null) {
        return;
    }
    if(video.playbackRate > 0) {
        const decreaseSpeed = video.playbackRate - 0.5;
        console.log("Decrease Speed", decreaseSpeed);
        video.playbackRate = decreaseSpeed;
        showToast(decreaseSpeed + "X");
    }
    
}

const volumeUpHandler = () => {
    // alert("clicked");
    // select the video
    const video = document.querySelector("video");
    if(video == null) {
        return;
    }
    if(video.volume >= 0.9) {
        return;
    }
    const increaseVolume = video.volume + 0.1;
    console.log("Increase Volume", increaseVolume);
    video.volume = increaseVolume;
    const percentage = (increaseVolume*100) + "%";
    showToast(percentage);
}

const volumeDownHandler = () => {
    // alert("clicked");
    // select the video
    const video = document.querySelector("video");
    if(video == null) {
        return;
    }
    if(video.volume <= 0.1) {
        video.volume = 0;
        return;
    }
    const decreaseVolume = video.volume - 0.1;
    console.log("Decrease Volume", decreaseVolume);
    video.volume = decreaseVolume;
    const percentage = (decreaseVolume*100) + "%";
    showToast(percentage);
}

function showToast(message) {
    // toast show
    toast.textContent = message;
    toast.style.display = "block";
    setTimeout(() => {
        toast.style.display = "none";
    }, 1500)
}

// identify on which event your logic should trigger
speedUp.addEventListener("click", speedUpHandler);
speedDown.addEventListener("click", speedDownHandler);
volumeUP.addEventListener("click", volumeUpHandler);
volumeDown.addEventListener("click", volumeDownHandler);


/****** Controls **************/
const playbtn = document.querySelector(".playbtn");
const fullScreen = document.querySelector(".fullscreen");

const handleFullScreen = () => {
    videoPlayer.requestFullscreen();
}

fullScreen.addEventListener("click", handleFullScreen);
