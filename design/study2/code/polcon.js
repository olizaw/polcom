var allImages = ["test1_listener1", "test1_listener2", "test1_speaker1", "test1_speaker2"]
var images = new Array();
for (i = 0; i < allImages.length; i++) {
    images[i] = new Image();
    images[i].src = "figs/" + allImages[i] + ".png";
}

// listener and speaker
var listenerList = [];
var speakerList = [];
for (i = 1; i < 13; i++) {
    for (j = 1; j < 3; j++) {
        listenerList.push("test" + i + "_listener" + j);
        speakerList.push("test" + i + "_speaker" + j);
    }
}

// script
var page1_script = ["Anne was in a room where the lights were on.", "Fred had some water.", "This is Rick’s room.", "This is Simon.", "Tasha had a bar of chocolate.", "One day Kathy was singing.", "Tom was running inside the house.", "Alice had some bread.", "Chris had scissors in his hand.", "Kate is good at solving puzzles.", "One day Miles was shouting.", "Lucy had a new game."];
var page2_script = ["Greg doesn’t like bright lights. Let's hear what he said!", "Jamie wanted more water in her cup. Let's hear what she said!"];
var page3_script = ["Bob also doesn’t like bright lights. Let's hear what he said!", "Suzy also wanted more water in her cup. Let's hear what she said!"];
var page4_script = ["Do you remember what Greg and Bob said? Let's hear them one more time!", "Do you remember what Jamie and Suzy said? Let's hear them one more time!"];
var page5_script = ["Which one was being more polite?", "Which one was being nicer?"];
var page5_script = ["Which one would you rather play with?", "Which one will Fred give water to?"];


//******for handling sound; see helper function playPrompt(word)
var audioSprite = $("#sound_player")[0];
var handler;

//amount of white space between trials
var normalPause = 0; 

showSlide("instructions");


var experiment = {
    trial_num: 0,
    total_trial_num: 2, // fixme
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
        experiment.listener1 = listenerList[2 * experiment.trial_num];
        experiment.listener2 = listenerList[2 * experiment.trial_num + 1];
        experiment.speaker1 = speakerList[2 * experiment.trial_num];
        experiment.speaker2 = speakerList[2 * experiment.trial_num + 1];

        leftname = "figs/" + experiment.speaker1 + ".png";
        centername = "figs/" + experiment.listener1 + ".png";
        centername2 = "figs/" + experiment.listener2 + ".png";
        rightname = "figs/" + experiment.speaker2 + ".png";

        if (experiment.trial_num == experiment.total_trial_num) { 
            experiment.end();
        } else {

        if (experiment.within_trial == 0) {
            var characters_html = "";
            characters_html += '<div><img class="pic" src="' + centername + '"alt="' + centername + '" id= "centerPic"/></div>'
            $("#characters").html(characters_html);
            var prompt_html = page1_script[experiment.trial_num]
            $("#prompt").html(prompt_html);            
            experiment.within_trial++;

        } else if (experiment.within_trial == 1) {
            var characters_html = "";
            characters_html += '<div><img class="pic" src="' + leftname + '"alt="' + leftname + '" id= "leftPic"/></div>'
            characters_html += '<div><img class="pic" src="' + centername + '"alt="' + centername + '" id= "centerPic"/></div>'
            $("#characters").html(characters_html);
            var prompt_html = page2_script[experiment.trial_num]
            $("#prompt").html(prompt_html);            
            experiment.within_trial++;

            $('#leftPic').bind('click touchstart', function (event) {
                playPrompt("apple_pos"); //fixme
            });

        } else if (experiment.within_trial == 2) {
            var characters_html = "";
            characters_html += '<div><img class="pic" src="' + leftname + '"alt="' + leftname + '" id= "leftPic2"/></div>'
            characters_html += '<div><img class="pic" src="' + centername2 + '"alt="' + centername2 + '" id= "centerPic"/></div>'
            characters_html += '<div><img class="pic" src="' + rightname + '"alt="' + rightname + '" id= "rightPic"/></div>'
            $("#characters").html(characters_html);
            var prompt_html = page3_script[experiment.trial_num]
            $("#prompt").html(prompt_html);            
            experiment.within_trial++;
            $('#rightPic').bind('click touchstart', function (event) {
                playPrompt("apple_neg"); //fixme
            });

        } else if (experiment.within_trial == 3) {
            $("#centerPic").fadeOut("slow");

            $("#characters").html(characters_html);
            experiment.within_trial = 0;

            $('#leftPic2').bind('click touchstart', function (event) {
                playPrompt("apple_pos"); //fixme
            });
            $('#rightPic').bind('click touchstart', function (event) {
                playPrompt("apple_neg"); //fixme
            });
            var prompt_html = page4_script[experiment.trial_num]
            $("#prompt").html(prompt_html);            
            experiment.trial_num++;
        }

        showSlide("stage");
        bgChange("url('figs/practice1_background.png')");
        }

    },
    
    end: function() {
    		setTimeout(function() {
			$("#stage").fadeOut();
		}, normalPause);
		showSlide("finish");
		document.body.style.background = "black";
}
}