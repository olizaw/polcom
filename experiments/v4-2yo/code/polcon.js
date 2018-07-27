// ---------------- PARAMETERS ------------------

var cond = random(2) + 1;
//var cond = document.getElementById("order").value

//amount of white space between trials
var normalpause = 1500;


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
for (i = 0; i < backgroundList.length; i++) {
    images[i] = new Image();
    images[i].src = "figs/" + backgroundList[i] + ".png";
}

for (i = 0; i < listenerList.length; i++) {
    images[i] = new Image();
    images[i].src = "figs/" + listenerList[i] + ".png";
}

for (i = 0; i < speakerList.length; i++) {
    images[i] = new Image();
    images[i].src = "figs/" + speakerList[i] + ".png";
}

//dot game
createDot = function(dotx, doty, i, tag) {
	var dots;
	if (tag === "smiley") {
		dots = ["smiley1", "smiley2", "smiley3", "smiley4", "smiley5"];
	} else {
		dots = [1, 2, 3, 4, 5];
	}

	var dot = document.createElement("img");
	dot.setAttribute("class", "dot");
	dot.id = "dot_" + dots[i];
	if (tag === "smiley") {
		dot.src = "dots/dot_" + "smiley" + ".jpg";
	} else {
		dot.src = "dots/dot_" + dots[i] + ".jpg";
	}

    var x = Math.floor(Math.random()*950);
    var y = Math.floor(Math.random()*540);

    var invalid = "true";

    //make sure dots do not overlap
    while (true) {
    	invalid = "true";
	   	for (j = 0; j < dotx.length ; j++) {
    		if (Math.abs(dotx[j] - x) + Math.abs(doty[j] - y) < 250) {
    			var invalid = "false";
    			break; 
    		}
		}
		if (invalid === "true") {
 			dotx.push(x);
  		  	doty.push(y);
  		  	break;	
  	 	}
  	 	x = Math.floor(Math.random()*400);
   		y = Math.floor(Math.random()*400);
	}

    dot.setAttribute("style","position:absolute;left:"+x+"px;top:"+y+"px;");
   	training.appendChild(dot);
}

//for dot game
var dots = ["dot_1", "dot_2", "dot_3", "dot_4", "dot_5", "x", "dot_smiley"];
for (i = 0; i<dots.length; i++) {
	images[i] = new Image();
	images[i].src = "dots/" + dots[i] + ".jpg";
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
    question1: "",
    question2: "",
    answer1: "",
    answer2: "",
    date: getCurrentDate(),
    timestamp: getCurrentTime(),
    reactiontime: 0,
    total_trial_num: 13, // fixme
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
//        experiment.next();
        experiment.training(0);

    },
    
    	//sets up and allows participants to play "the dot game"
	training: function(dotgame) {
		var allDots = ["dot_1", "dot_2", "dot_3", "dot_4", "dot_5", 
						"dot_smiley1", "dot_smiley2", "dot_smiley3", 
						"dot_smiley4", "dot_smiley5"];
		var xcounter = 0;
		var dotCount = 5;

		//preload sound
		if (dotgame === 0) {
			audioSprite.play();
			audioSprite.pause();
		}

		var dotx = [];
		var doty = [];

		if (dotgame === 0) {
			for (i = 0; i < dotCount; i++) {
				createDot(dotx, doty, i, "");
			}
		} else {
			for (i = 0; i < dotCount; i++) {
				createDot(dotx, doty, i, "smiley");
			}
		}
		showSlide("training");
		$('.dot').bind('click touchstart', function(event) {
	    	var dotID = $(event.currentTarget).attr('id');

	    	//only count towards completion clicks on dots that have not yet been clicked
	    	if (allDots.indexOf(dotID) === -1) {
	    		return;
	    	}
	    	allDots.splice(allDots.indexOf(dotID), 1);
	    	document.getElementById(dotID).src = "dots/x.jpg";
	    	xcounter++
	    	if (xcounter === dotCount) {
	    		setTimeout(function () {
	    			$("#training").hide();
	    			if (dotgame === 0) {		
	    				//hide old x marks before game begins again
	    				var dotID;
	    				for (i = 1; i <= dotCount; i++) {
	    					dotID = "dot_" + i;
	    					training.removeChild(document.getElementById(dotID));
	    				}
						experiment.training();
						dotgame++; 
					} else {
						//document.body.style.background = "black";
						setTimeout(function() {
//							showSlide("prestudy");
							experiment.next();
						}, normalpause);
					}
				}, normalpause);
			}
	    });	   
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
//              showSlide("finish");

        } else {
            bgChange("url('figs/" + backgroundList[experiment.trial_num] + ".png')");

            //audio preloading
            audioSprite.play();
            audioSprite.pause();


            if (experiment.within_trial == 0) {
                document.getElementById('proceed').hidden=false;
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
                var characters_html = "";
                characters_html += '<div><img class="pic" src="' + leftname + '"alt="' + leftname + '" id= "leftPic2"/></div>'
                characters_html += '<div><img class="pic" src="' + centername2 + '"alt="' + centername2 + '" id= "centerPic"/></div>'
                characters_html += '<div><img class="pic" src="' + rightname + '"alt="' + rightname + '" id= "rightPic2"/></div>'
                $("#characters").html(characters_html);
                $("#centerPic").fadeOut("slow");

                $('.pic').bind('click touchstart', function (event) {
                    var picID = $(event.currentTarget).attr('id');
                    if (clickDisabled) return;
                    clickDisabled = true;
                    setTimeout(function () {
                    clickDisabled = false;
                    }, normalPause);
					if (picID === "rightPic2") {
                        playPrompt(experiment.speaker2); //fixme
                    } else if (picID === "leftPic2") {
                        playPrompt(experiment.speaker1); //fixme
                    }

                });
                var prompt_html = page4_script[experiment.trial_num]
                $("#prompt").html(prompt_html);
                experiment.within_trial++;
            } else if (experiment.within_trial == 4) {
                clickDisabled = false;
                var prompt_html = page5_script[experiment.trial_num]
                experiment.question1 = question1[experiment.trial_num]
                $('.pic').unbind('click touchstart');
                
                $('.pic').bind('click touchstart', function (event) {
                    var picID = $(event.currentTarget).attr('id');
                    if (picID === "leftPic2") {
                        $('#leftPic2').css('border-width', answer_border_width);
				        experiment.side1 = "L";
                    } else if (picID === "rightPic2") {
                        $('#rightPic2').css('border-width', answer_border_width);
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
            	if (experiment.trial_num == 0) {
                clickDisabled = false;
                $('.pic').css('border-width', '0px');
                var prompt_html = page6_script[experiment.trial_num]
                experiment.question2 = question2[experiment.trial_num]
                $('.pic').unbind('click touchstart');

                $('.pic').bind('click touchstart', function (event) {
                    var picID = $(event.currentTarget).attr('id');
                    if (picID === "leftPic2") {
                        $('#leftPic2').css('border-width', answer_border_width);
				        experiment.side2 = "L";
                    } else if (picID === "rightPic2") {
                        $('#rightPic2').css('border-width', answer_border_width);
 				       experiment.side2 = "R";
                   }
                    if (clickDisabled) return;
                    clickDisabled = true;
                    setTimeout(function () {
                        experiment.within_trial++;
                        experiment.next();
                    }, normalPause);
                });
                } else {
                 	 experiment.side2 = "NA";

                     setTimeout(function () {
                        experiment.within_trial++;
                        experiment.next();
                    }, 30);
                }
                } else if (experiment.within_trial == 6) {
                                                         
if (
(cond == 1 && experiment.trial_num == 0 && experiment.side1 == "L") ||
(cond == 1 && experiment.trial_num == 1 && experiment.side1 == "L") ||
(cond == 1 && experiment.trial_num == 2 && experiment.side1 == "L") ||
(cond == 1 && experiment.trial_num == 3 && experiment.side1 == "L") ||
(cond == 1 && experiment.trial_num == 4 && experiment.side1 == "R") ||
(cond == 1 && experiment.trial_num == 5 && experiment.side1 == "R") ||
(cond == 1 && experiment.trial_num == 6 && experiment.side1 == "R") ||
(cond == 1 && experiment.trial_num == 7 && experiment.side1 == "R") ||
(cond == 1 && experiment.trial_num == 8 && experiment.side1 == "R") ||
(cond == 1 && experiment.trial_num == 9 && experiment.side1 == "L") ||
(cond == 1 && experiment.trial_num == 10 && experiment.side1 == "L") ||
(cond == 1 && experiment.trial_num == 11 && experiment.side1 == "R") ||
(cond == 1 && experiment.trial_num == 12 && experiment.side1 == "L") ||
(cond == 2 && experiment.trial_num == 0 && experiment.side1 == "R") ||
(cond == 2 && experiment.trial_num == 1 && experiment.side1 == "R") ||
(cond == 2 && experiment.trial_num == 2 && experiment.side1 == "L") ||
(cond == 2 && experiment.trial_num == 3 && experiment.side1 == "R") ||
(cond == 2 && experiment.trial_num == 4 && experiment.side1 == "R") ||
(cond == 2 && experiment.trial_num == 5 && experiment.side1 == "R") ||
(cond == 2 && experiment.trial_num == 6 && experiment.side1 == "L") ||
(cond == 2 && experiment.trial_num == 7 && experiment.side1 == "R") ||
(cond == 2 && experiment.trial_num == 8 && experiment.side1 == "R") ||
(cond == 2 && experiment.trial_num == 9 && experiment.side1 == "R") ||
(cond == 2 && experiment.trial_num == 10 && experiment.side1 == "L") ||
(cond == 2 && experiment.trial_num == 11 && experiment.side1 == "L") ||
(cond == 2 && experiment.trial_num == 12 && experiment.side1 == "R")
) {
                    	experiment.answer1 = 1;
                    } else {
                    	experiment.answer1 = 0;
                    }

if (
(cond == 1 && experiment.trial_num == 0 && experiment.side2 == "R") ||
(cond == 2 && experiment.trial_num == 0 && experiment.side2 == "L")
) { 
experiment.answer2 = 1;
} else if (experiment.side2 == "NA") {
experiment.answer2 = "NA";
} else {
experiment.answer2 = 0;
}     
                    setTimeout(function () {
                        $("#stage").fadeOut();
                        experiment.processOneRow();
                        experiment.within_trial = 0;
                        experiment.trial_num++;
                        setTimeout(function () {
                            experiment.next()
                        }, normalPause);
                    }, 800);

                };
            showSlide("stage");
            $("#prompt").html(prompt_html);
            }

        },


    //concatenates all experimental variables into a string which represents one "row" of data in the eventual csv, to live in the server
	processOneRow: function() {        
        var dataforRound = experiment.subid;
		dataforRound += "," + experiment.order
		dataforRound += "," + experiment.trial_num
		dataforRound += "," + experiment.side1
		dataforRound += "," + experiment.side2
		dataforRound += "," + experiment.question1
		dataforRound += "," + experiment.question2
		dataforRound += "," + experiment.answer1
		dataforRound += "," + experiment.answer2
		dataforRound += "," + experiment.date + "," + experiment.timestamp + "\n";
		$.post("https://langcog.stanford.edu/cgi-bin/EJY/polcon/polconstudysave.php", {
			postresult_string: dataforRound
		});
	},
    end: function () {
        showSlide("finish");
    }
}