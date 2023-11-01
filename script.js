function fullScreenVideo(){
	ver video = document.getElementById('bck-video');
	if (video.requestFullscreen(){
		video.requestFullscreen();
	}else if (video.mozRequrestFullScreen){
		video.mozRequestFullScreen();
	}else if (video.webkitRequestFullscreen){
		video.webkit.RequestFullscreen()
	}else if (video.msRequestFullscreen){
		vide.msRequestFullscreen()
	}
}
fullScreenVideo();
