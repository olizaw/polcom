// listener, speaker, background names
var listenerList = [];
var speakerList = [];
var backgroundList = [];
for (i = 0; i < 13; i++) {
    for (j = 1; j < 3; j++) {
        listenerList.push("test" + i + "_listener" + j);
        speakerList.push("test" + i + "_speaker" + j);
    }
}
for (i = 0; i < 13; i++) {
    backgroundList.push("test" + i + "_background");
}

// load images
var images = new Array();
for (i = 0; i < listenerList.length; i++) {
    images[i] = new Image();
    images[i].src = "figs/" + listenerList[i] + ".png";
    images[i].src = "figs/" + speakerList[i] + ".png";
    images[i].src = "figs/" + backgroundList[i] + ".png";
}

// script
var page1_script = ["Look, this is Carol.",
                    "Anne was in a room where the lights were on.",
                    "Fred had some water.",
                    "This is Rick's room.",
                    "This is Simon.",
                    "Tasha had a bar of chocolate.",
                    "One day Kathy was singing.",
                    "Tom was running inside the house.",
                    "Alice had some bread.",
                    "Chris had scissors in his hand.",
                    "Kate is good at solving puzzles.",
                    "One day Miles was shouting.",
                    "Lucy had a new game."];
var page2_script = ["Drew kicked Carol.", 
                    "Greg doesn\'t like bright lights. Let's hear what he said!",
                    "Jamie wanted more water in her cup. Let's hear what she said!",
                   "Millie thought Rick's room was too messy. Let's hear what she said!",
                   "Carla wanted someone to go to the store with. Let's hear what she said!",
                   "Louis wanted some chocolate. Let's hear what he said!",
                   "Josh didn\'t like Kathy's song. Let's hear what he said!",
                   "Marie wanted Tom to stop running. Let's hear what she said!",
                   "Claude was hungry. Let's hear what he said!",
                   "Jean wanted to use the scissors. Let's hear what she said!",
                   "Scott needed help with his puzzle. Let's hear what he said!",
                   "Jenny heard Miles shout. Let's hear what she said!",
                  "Joe wanted to learn Lucy's game. Let's hear what he said!",
                   ];
var page3_script = ["Graham gave Carol a gift.",
                    "Bob also doesn\'t like bright lights. Let's hear what he said!",
                    "Suzy also wanted more water in her cup. Let's hear what she said!",
                   "Franny also thought Rick's room was too messy. Let's hear what she said!",
                   "Ashley also wanted someone to go to the store with. Let's hear what she said!",
                   "Paul also wanted some chocolate. Let's hear what he said!",
                   "Andy didn\'t like Kathy's song either. Let's hear what she said!",
                   "Amy also wanted Tom to stop running. Let's hear what she said!",
                   "Ernie was hungry too. Let's hear what he said!",
                   "Mia also wanted to use the scissors. Let's hear what she said!",
                   "Johnny also needed help with his puzzle. Let's hear what he said!",
                   "Susie also heard Miles shout. Let's hear what she said!",
                   "Sammy wanted to learn Lucy's game too. Let's hear what he said!",
                   ];
var page4_script = ["Remember, Drew kicked Carol. Graham gave her a gift.",
                    "Do you remember what Greg and Bob said? Let's hear them one more time!",
                    "Do you remember what Jamie and Suzy said? Let's hear them one more time!",
                    "Do you remember what Millie and Franny said? Let's hear them one more time!",
                    "Do you remember what Carla and Ashley said? Let's hear them one more time!",
                    "Do you remember what Louis and Paul said? Let's hear them one more time!",
                    "Do you remember what Josh and Andy said? Let's hear them one more time!",
                    "Do you remember what Marie and Amy said? Let's hear them one more time!",
                    "Do you remember what Claude and Ernie said? Let's hear them one more time!",
                    "Do you remember what Jean and Mia said? Let's hear them one more time!",
                    "Do you remember what Scott and Johnny said? Let's hear them one more time!",
                    "Do you remember what Jenny and Susie said? Let's hear them one more time!",
                    "Do you remember what Joe and Sammy said? Let's hear them one more time!",
                   ];
var page5_script = ["Which one was being meaner?",
                    "Which one was being more polite?",
                    "Which one was being nicer?",
                    "Which one was being meaner?",
                    "Which one was being nicer?",
                    "Which one was being meaner?",
                    "Which one was being more polite?",
                    "Which one was being nicer?",
                    "Which one was being meaner?",
                    "Which one was being more rude?",
                    "Which one was being more polite?",
                    "Which one was being more rude?",
                    "Which one was being more rude?",
                   ];
var page6_script = ["Which one was being nicer?",
                    "Which one would you rather play with?",
                    "Which one will Fred give water to?",
                    "Which one would you rather play with?",
                    "Which one will Simon go to store with?",
                    "Which one will Tasha give chocolate to?",
                    "Which one would you rather play with?",
                    "Which one would you rather play with?",
                    "Which one would you rather play with?",
                    "Which one will Chris give the scissors to?",
                    "Which one will Kate help with the puzzle?",
                    "Which one would you rather play with?",
                    "Which one will Lucy teach about the game?",
                   ];


//******for handling sound; see helper function playPrompt(word)
var audioSprite = $("#sound_player")[0];
var handler;

//amount of pause between questions
var normalPause = 800;

// answer border width
var answer_border_width = "5px";

showSlide("instructions");


var experiment = {
    trial_num: 0,
    total_trial_num: 12, // fixme
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
            bgChange("url('figs/" + backgroundList[experiment.trial_num] + ".png')");

            if (experiment.within_trial == 0) {
                var characters_html = "";
                characters_html += '<div><img class="pic" src="' + centername + '"alt="' + centername + '" id= "centerPic"/></div>'
                $("#characters").html(characters_html);
                $("#centerPic").fadeIn("slow");
                var prompt_html = page1_script[experiment.trial_num]
                experiment.within_trial++;

            } else if (experiment.within_trial == 1) {
                clickDisabled = false;
                var characters_html = "";
                characters_html += '<div><img class="pic" src="' + leftname + '"alt="' + leftname + '" id= "leftPic"/></div>'
                characters_html += '<div><img class="pic" src="' + centername + '"alt="' + centername + '" id= "centerPic"/></div>'
                $("#characters").html(characters_html);
                $('#leftPic').bind('click touchstart', function (event) {
                    if (clickDisabled) return;
                    clickDisabled = true;
                    playPrompt(experiment.speaker1); //fixme
                });
                var prompt_html = page2_script[experiment.trial_num]
                experiment.within_trial++;


            } else if (experiment.within_trial == 2) {
                clickDisabled = false;
                var characters_html = "";
                characters_html += '<div><img class="pic" src="' + leftname + '"alt="' + leftname + '" id= "leftPic2"/></div>'
                characters_html += '<div><img class="pic" src="' + centername2 + '"alt="' + centername2 + '" id= "centerPic"/></div>'
                characters_html += '<div><img class="pic" src="' + rightname + '"alt="' + rightname + '" id= "rightPic"/></div>'
                $("#characters").html(characters_html);
                $('#rightPic').bind('click touchstart', function (event) {
                    if (clickDisabled) return;
                    clickDisabled = true;
                    playPrompt(experiment.speaker2); //fixme
                });
                var prompt_html = page3_script[experiment.trial_num]
                experiment.within_trial++;

            } else if (experiment.within_trial == 3) {
                clickDisabled = false;
                $("#centerPic").fadeOut("slow");
                $("#characters").html(characters_html);

                $('.pic').bind('click touchstart', function (event) {
                    var picID = $(event.currentTarget).attr('id');
                    if (clickDisabled) return;
                    clickDisabled = true;
                    setTimeout(function () {
                    clickDisabled = false;
                    }, normalPause);
                    if (picID === "leftPic2") {
                        playPrompt(experiment.speaker1); //fixme
                    } else if (picID === "rightPic") {
                        playPrompt(experiment.speaker2); //fixme
                    }

                });
                var prompt_html = page4_script[experiment.trial_num]
                $("#prompt").html(prompt_html);
                experiment.within_trial++;
            } else if (experiment.within_trial == 4) {
                clickDisabled = false;
                var prompt_html = page5_script[experiment.trial_num]
                $('.pic').unbind('click touchstart');
                $('.pic').bind('click touchstart', function (event) {
                    var picID = $(event.currentTarget).attr('id');
                    if (picID === "leftPic2") {
                        $('#leftPic2').css('border-width', answer_border_width);
                    } else if (picID === "rightPic") {
                        $('#rightPic').css('border-width', answer_border_width);
                    }
                    if (clickDisabled) return;
                    clickDisabled = true;
                    setTimeout(function () {
                        experiment.within_trial++;
                        experiment.next();
                    }, normalPause);

                });
            } else if (experiment.within_trial == 5) {
                clickDisabled = false;
                $('.pic').css('border-width', '0px');
                var prompt_html = page6_script[experiment.trial_num]
                $('.pic').unbind('click touchstart');
                $('.pic').bind('click touchstart', function (event) {
                    var picID = $(event.currentTarget).attr('id');
                    if (picID === "leftPic2") {
                        $('#leftPic2').css('border-width', answer_border_width);
                    } else if (picID === "rightPic") {
                        $('#rightPic').css('border-width', answer_border_width);
                    }
                    if (clickDisabled) return;
                    clickDisabled = true;
                    setTimeout(function () {
                        $("#stage").fadeOut();
                        experiment.within_trial = 0;
                        experiment.trial_num++;
                        setTimeout(function () {
                            experiment.next()
                        }, 800);
                    }, normalPause);

                });
            }

            showSlide("stage");
            $("#prompt").html(prompt_html);
        }

    },

    end: function () {
        setTimeout(function () {
            $("#stage").fadeOut();
        }, normalPause);
        showSlide("finish");
        document.body.style.background = "white";
    }
}