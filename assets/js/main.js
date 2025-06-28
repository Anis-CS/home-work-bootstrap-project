let nav = document.querySelector('.navbar');
window.onscroll = function(){
    if(document.documentElement.scrollTop >50){
        nav.classList.add('header-scrolled');
    }else{
        nav.classList.remove('header-scrolled');
    }
}



document.addEventListener("DOMContentLoaded", function () {
    const playBtn = document.getElementById("playVideoBtn");
    const closeBtn = document.getElementById("closeVideoBtn");
    const videoContainer = document.getElementById("videoContainer");
    const videoFrame = document.getElementById("videoFrame");
    const videoURL = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // change to your URL

    playBtn.addEventListener("click", function () {
        videoContainer.classList.remove("d-none");
        videoFrame.src = videoURL;
    });

    closeBtn.addEventListener("click", function () {
        videoContainer.classList.add("d-none");
        videoFrame.src = "";
    });
});