//-------- HELPER --------

function random(a, b) {
    if (typeof b == "undefined") {
        a = a || 2;
        return Math.floor(Math.random() * a);
    } else {
        return Math.floor(Math.random() * (b - a + 1)) + a;
    }
}

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


// ---------------- PARAMETERS ------------------

var cond = random(2) + 1;
//var cond = document.getElementById("order").value

// listener, speaker, background names
var listenerList = [];
var speakerList = [];
var backgroundList = [];
if (cond == 1) {
    for (i = 0; i < 13; i++) {
        for (j = 1; j < 3; j++) {
            listenerList.push("order1_" + "test" + i + "_listener" + j);
            speakerList.push("order1_" + "test" + i + "_speaker" + j);
        }
    }
    for (i = 0; i < 13; i++) {
        backgroundList.push("order1_" + "test" + i + "_background");
    }
} else {
    for (i = 0; i < 13; i++) {
        for (j = 1; j < 3; j++) {
            listenerList.push("order2_" + "test" + i + "_listener" + j);
            speakerList.push("order2_" + "test" + i + "_speaker" + j);
        }
    }
    for (i = 0; i < 13; i++) {
        backgroundList.push("order2_" + "test" + i + "_background");
    }
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
if (cond == 1) {
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



} else {

    var page1_script = ["Look, this is Carol.",
                    "Kate is good at solving puzzles.",
                    "One day Miles was shouting.",
                    "Tom was running inside the house.",
                    "Alice had some bread.",
                    "Lucy had a new game.",
                    "Chris had scissors in his hand.",
                    "One day Kathy was singing.",
                    "Tasha had a bar of chocolate.",
                    "This is Simon.",
                    "This is Rick's room.",
                    "Fred had some water.",
                    "Anne was in a room where the lights were on.",
                   ];
    var page2_script = ["Graham gave Carol a gift.",
                   "Scott needed help with his puzzle. Let's hear what he said!",
                   "Jenny heard Miles shout. Let's hear what she said!",
                   "Marie wanted Tom to stop running. Let's hear what she said!",
                   "Claude was hungry. Let's hear what he said!",
                  "Joe wanted to learn Lucy's game. Let's hear what he said!",
                   "Jean wanted to use the scissors. Let's hear what she said!",
                   "Josh didn\'t like Kathy's song. Let's hear what he said!",
                   "Louis wanted some chocolate. Let's hear what he said!",
                   "Carla wanted someone to go to the store with. Let's hear what she said!",
                   "Millie thought Rick's room was too messy. Let's hear what she said!",
                    "Jamie wanted more water in her cup. Let's hear what she said!",
                    "Greg doesn\'t like bright lights. Let's hear what he said!",

                   ];
    var page3_script = ["Drew kicked Carol.",
                   "Johnny also needed help with his puzzle. Let's hear what he said!",
                   "Susie also heard Miles shout. Let's hear what she said!",
                   "Amy also wanted Tom to stop running. Let's hear what she said!",
                   "Ernie was hungry too. Let's hear what he said!",
                   "Sammy wanted to learn Lucy's game too. Let's hear what he said!",
                   "Mia also wanted to use the scissors. Let's hear what she said!",
                   "Andy didn\'t like Kathy's song either. Let's hear what she said!",
                   "Paul also wanted some chocolate. Let's hear what he said!",
                   "Ashley also wanted someone to go to the store with. Let's hear what she said!",
                   "Franny also thought Rick's room was too messy. Let's hear what she said!",
                    "Suzy also wanted more water in her cup. Let's hear what she said!",
                    "Bob also doesn\'t like bright lights. Let's hear what he said!",

                   ];
    var page4_script = ["Remember, Graham gave her a gift. Drew kicked Carol. ",
                    "Do you remember what Scott and Johnny said? Let's hear them one more time!",
                    "Do you remember what Jenny and Susie said? Let's hear them one more time!",
                    "Do you remember what Marie and Amy said? Let's hear them one more time!",
                    "Do you remember what Claude and Ernie said? Let's hear them one more time!",
                    "Do you remember what Joe and Sammy said? Let's hear them one more time!",
                    "Do you remember what Jean and Mia said? Let's hear them one more time!",
                    "Do you remember what Josh and Andy said? Let's hear them one more time!",
                    "Do you remember what Louis and Paul said? Let's hear them one more time!",
                    "Do you remember what Carla and Ashley said? Let's hear them one more time!",
                    "Do you remember what Millie and Franny said? Let's hear them one more time!",
                    "Do you remember what Jamie and Suzy said? Let's hear them one more time!",
                    "Do you remember what Greg and Bob said? Let's hear them one more time!",
                   ];
    var page5_script = ["Which one was being meaner?",
                    "Which one was being more polite?",
                    "Which one was being more rude?",
                    "Which one was being meaner?",
                    "Which one was being nicer?",
                    "Which one was being more rude?",
                    "Which one was being more polite?",
                    "Which one was being more rude?",
                    "Which one was being nicer?",
                    "Which one was being meaner?",
                    "Which one was being nicer?",
                    "Which one was being meaner?",
                    "Which one was being more polite?",
                   ];
    var page6_script = ["Which one was being nicer?",
                    "Which one will Kate help with the puzzle?",
                    "Which one would you rather play with?",
                    "Which one would you rather play with?",
                    "Which one would you rather play with?",
                    "Which one will Lucy teach about the game?",
                    "Which one will Chris give the scissors to?",
                    "Which one would you rather play with?",
                    "Which one will Tasha give chocolate to?",
                    "Which one will Simon go to store with?",
                    "Which one would you rather play with?",
                    "Which one will Fred give water to?",
                    "Which one would you rather play with?",
                   ];
}


//******for handling sound; see helper function playPrompt(word)
var audioSprite = $("#sound_player")[0];
var handler;

//amount of pause between questions
var normalPause = 1800;

// answer border width
var answer_border_width = "5px";

showSlide("instructions");


var experiment = {

    subid: "",
    trial_num: 0,
    order: cond,
    side1: "",
    side2: "",
    date: getCurrentDate(),
    timestamp: getCurrentTime(),
    reactiontime: 0,
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

            //audio preloading
            audioSprite.play();
            audioSprite.pause();


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
                        experiment.side1 = "L";
                    } else if (picID === "rightPic") {
                        $('#rightPic').css('border-width', answer_border_width);
                        experiment.side1 = "R";
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
                        experiment.side2 = "L";
                    } else if (picID === "rightPic") {
                        $('#rightPic').css('border-width', answer_border_width);
                        experiment.side2 = "R";
                    }
                    if (clickDisabled) return;
                    clickDisabled = true;
                    setTimeout(function () {
                        $("#stage").fadeOut();
                        experiment.processOneRow();
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

    //concatenates all experimental variables into a string which represents one "row" of data in the eventual csv, to live in the server
    processOneRow: function () {
        var dataforRound = experiment.subid;
        dataforRound += "," + experiment.order
        dataforRound += "," + experiment.trial_num
        dataforRound += "," + experiment.side1
        dataforRound += "," + experiment.side2
        dataforRound += "," + experiment.date + "," + experiment.timestamp + "\n";
        $.post("https://langcog.stanford.edu/cgi-bin/EJY/polcon/polconstudysave.php", {
            postresult_string: dataforRound
        });
    },
    end: function () {
        setTimeout(function () {
            $("#stage").fadeOut();
        }, normalPause);
        showSlide("finish");
        document.body.style.background = "white";
    }
}