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
        experiment.listener1 = "test1_listener1";
        experiment.listener2 = "test1_listener2";
        experiment.speaker1 = "test1_speaker1";
        experiment.speaker2 = "test1_speaker2";

        var characters_html = "";
        //HTML for left
        leftname = "figs/" + experiment.speaker1 + ".png";
        centername = "figs/" + experiment.listener1 + ".png";
        rightname = "figs/" + experiment.speaker2 + ".png";
        
        characters_html += '<div><img class="pic" src="' + leftname + '"alt="' + leftname + '" id= "leftPic"/></div>'
        characters_html += '<div><img class="pic" src="' + centername + '"alt="' + centername + '" id= "centerPic"/></div>'
        characters_html += '<div><img class="pic" src="' + rightname + '"alt="' + rightname + '" id= "rightPic"/></div>'

//        characters_html += '<table align = "center"><tr><td align="center"><img class="pic" src="' + leftname + '"alt="' + leftname + '" id= "leftPic"/></td>';

        //HTML for center
//        characters_html += '<td align="center"><img class="pic" src="' + centername + '"alt="' + centername + '"  id= "centerPic"/></td>';

        //HTML for right
//        characters_html += '<td align="center"><img class="pic" src="' + rightname + '"alt="' + rightname + '" id= "rightPic"/></td>';

//        characters_html += '</tr></table>';
        $("#characters").html(characters_html);

        showSlide("stage");
        bgChange("url('figs/practice1_background.png')");

    },

    next2: function () {
//        function changepic() {
//            document.getElementById("leftPic").style.top = 2000 + "px";
//        }
//        changepic();
         $("#leftPic").fadeOut("slow");

    }
}