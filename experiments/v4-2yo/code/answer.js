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
