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