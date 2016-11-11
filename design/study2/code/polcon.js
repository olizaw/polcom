var allImages = ["test1_listener1", "test1_listener2", "test1_speaker1", "test1_speaker2"]
var images = new Array();
for (i = 0; i < allImages.length; i++) {
    images[i] = new Image();
    images[i].src = "figs/" + allImages[i] + ".png";
}

var listenerList = [];
var speakerList = [];
for (i = 1; i < 13; i++) {
    for (j = 1; j < 3; j++) {
        listenerList.push("test" + i + "_listener" + j);
        speakerList.push("test" + i + "_speaker" + j);
    }
}

//******for handling sound; see helper function playPrompt(word)
var audioSprite = $("#sound_player")[0];
var handler;

showSlide("instructions");


var experiment = {
    trial_num: 0,
    within_trial: 0,
    listenerList: listenerList,
    speakerList: speakerList,

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
        experiment.listener1 = listenerList[2*experiment.trial_num];
        experiment.listener2 = listenerList[2*experiment.trial_num+1];
        experiment.speaker1 = speakerList[2*experiment.trial_num];
        experiment.speaker2 = speakerList[2*experiment.trial_num+1];

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

            $('#leftPic').bind('click touchstart', function (event) {
                playPrompt("apple_pos");
            });

        } else if (experiment.within_trial == 2) {
            var characters_html = "";
            characters_html += '<div><img class="pic" src="' + leftname + '"alt="' + leftname + '" id= "leftPic2"/></div>'
            characters_html += '<div><img class="pic" src="' + centername2 + '"alt="' + centername2 + '" id= "centerPic"/></div>'
            characters_html += '<div><img class="pic" src="' + rightname + '"alt="' + rightname + '" id= "rightPic"/></div>'

            $("#characters").html(characters_html);
            experiment.within_trial++;
            $('#rightPic').bind('click touchstart', function (event) {
                playPrompt("apple_neg");
            });

        } else if (experiment.within_trial == 3) {
            $("#centerPic").fadeOut("slow");

            $("#characters").html(characters_html);
            experiment.within_trial = 0;

            $('#leftPic2').bind('click touchstart', function (event) {
                playPrompt("apple_pos");
            });
            $('#rightPic').bind('click touchstart', function (event) {
                playPrompt("apple_neg");
            });
            experiment.trial_num++;

        }

        showSlide("stage");
        bgChange("url('figs/practice1_background.png')");

    }
}