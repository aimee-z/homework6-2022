var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	console.log("The current volume is " + video.volume)
	document.querySelector("#volume").innerHTML = video.volume*100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slower")
	console.log("The current speed is " + video.playbackRate)
	var speed = video.playbackRate
	video.playbackRate = 0.95*speed
	console.log("The new speed is " + video.playbackRate)
})

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Faster")
	console.log("The current speed is " + video.playbackRate)
	video.playbackRate /=0.95
	console.log("The new speed is " + video.playbackRate)
})

document.querySelector("#mute").addEventListener("click", function() {
	console.log("The value of mute is " + video.muted)
	if (video.muted == false) {
		video.muted = true
		document.querySelector("#mute").innerHTML = "UnMute" 
		console.log("Muted")
	}
	else {
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"
		console.log("Unmuted")
	}
})

document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value)
	video.volume = this.value/100
	document.querySelector("#volume").innerHTML = video.volume*100 + "%"
})

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Current location of the video is: " + video.currentTime)
	video.currentTime = video.currentTime + 15
	if (video.currentTime >= 67.403333) {
		video.currentTime = 0
	}
	console.log("New location of the video is: " + video.currentTime)
})

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School")
	video.classList.add("oldSchool")
})

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original")
	video.classList.remove("oldSchool")
})