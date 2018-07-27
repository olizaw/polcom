// ---------------- HELPER ------------------

// show slide function
function showSlide(id) {
    $(".slide").hide(); //jquery - all elements with class of slide - hide
    $("#" + id).show(); //jquery - element with given id - show
}

// background
function bgChange(bg) {
    document.body.style.background = bg;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
}

// fade in/out
jQuery(function(){

   // Fade In
   $("#myImage").fadeIn();

   // Fade Out
   $("#myImage").fadeOut();

});

//Handles audio; indexes into the sprite to play the prompt associated with a critical word 
playPrompt = function(word) {
	audioSprite.removeEventListener('timeupdate', handler);
	audioSprite.currentTime = spriteData[word].start;
	audioSprite.play();

	handler = function() {
		if (this.currentTime >= spriteData[word].start + spriteData[word].length) {
			this.pause();
		}
	};
	audioSprite.addEventListener('timeupdate', handler, false);
}

// randomize
function random(a, b) {
    if (typeof b == "undefined") {
        a = a || 2;
        return Math.floor(Math.random() * a);
    } else {
        return Math.floor(Math.random() * (b - a + 1)) + a;
    }
}

// current date and time
getCurrentDate = function () {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    return (month + "/" + day + "/" + year);
}

getCurrentTime = function () {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();

    if (minutes < 10) minutes = "0" + minutes;
    return (hours + ":" + minutes);
}
