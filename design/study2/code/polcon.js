var allimages = ["test1_background.png", "test1_listener1.png"]
var images = new Array();
for (i = 0; i < allimages.length; i++) {
    images[i] = new Image();
    images[i].src = "figs/" + allimages[i];
}

showSlide("instructions");


var experiment = {
    within_trial: 0,
    
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
        console.log(experiment.within_trial)
        experiment.listener1 = "test1_listener1";
        experiment.listener2 = "test1_listener2";
        experiment.speaker1 = "test1_speaker1";
        experiment.speaker2 = "test1_speaker2";

        leftname = "figs/" + experiment.speaker1 + ".png";
        centername = "figs/" + experiment.listener1 + ".png";
        centername2 = "figs/" + experiment.listener2 + ".png";
        rightname = "figs/" + experiment.speaker2 + ".png";

        if (experiment.within_trial == 0) {
            var characters_html = "";
            characters_html += '<div><img class="pic" src="' + centername + '"alt="' + centername + '" id= "centerPic"/></div>'

            $("#characters").html(characters_html);
            experiment.within_trial++;

        } else if (experiment.within_trial == 1) {
            var characters_html = "";
            characters_html += '<div><img class="pic" src="' + leftname + '"alt="' + leftname + '" id= "leftPic"/></div>'
            characters_html += '<div><img class="pic" src="' + centername + '"alt="' + centername + '" id= "centerPic"/></div>'

            $("#characters").html(characters_html);
            experiment.within_trial++;

        } else if (experiment.within_trial == 2) {
            var characters_html = "";
            characters_html += '<div><img class="pic" src="' + leftname + '"alt="' + leftname + '" id= "leftPic2"/></div>'
            characters_html += '<div><img class="pic" src="' + centername2 + '"alt="' + centername2 + '" id= "centerPic"/></div>'
            characters_html += '<div><img class="pic" src="' + rightname + '"alt="' + rightname + '" id= "rightPic"/></div>'

            $("#characters").html(characters_html);
            experiment.within_trial++;

        } else if (experiment.within_trial == 3) {
//            var characters_html = "";
//            characters_html += '<div><img class="pic" src="' + leftname + '"alt="' + leftname + '" id= "leftPic"/></div>'
//            characters_html += '<div><img class="pic" src="' + centername2 + '"alt="' + centername2 + '" id= "centerPic"/></div>'
//            characters_html += '<div><img class="pic" src="' + rightname + '"alt="' + rightname + '" id= "rightPic"/></div>'
            $("#centerPic").fadeOut("slow");

            $("#characters").html(characters_html);
            experiment.within_trial = 0;
            // trialNum++

        }

        showSlide("stage");
        bgChange("url('figs/practice1_background.png')");

    },

    next2: function () {
        //        function changepic() {
        //            document.getElementById("leftPic").style.top = 2000 + "px";
        //        }
        //        changepic();
        $("#centerPic").fadeOut("slow");

    }
}