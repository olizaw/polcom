var allimages = ["test1_background.png", "test1_listener1.png"]
var images = new Array();
for (i = 0; i < allimages.length; i++) {
	images[i] = new Image();
	images[i].src = "figs/" + allimages[i];
}

showSlide("instructions");

var experiment = {
    checkInput: function () {
        //subject ID
        if (document.getElementById("subjectID").value.length < 1) {
            $("#checkMessage").html('<font color="red">You must input a subject ID</font>');
            return;
        }
        experiment.subid = document.getElementById("subjectID").value;
        experiment.next();
    },

    next: function () {
        showSlide("stage");
        bgChange("url('figs/practice1_background.png')");

    }
}