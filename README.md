Preschool children's understanding of polite requests
===

This repository contains the following materials for the paper: 
Yoon, E. J., & Frank, M. C. (under review). Preschool children's understanding of polite requests. 

  * [Tablet task for Experiment 3](http://langcog.stanford.edu/expts/EJY/polcon/polcon.html)
  * PDF of the [paper](04_writing/cogsci2019/polcon_cogsci2019.pdf)

## Preregistration:
* [Experiment 2](https://osf.io/qkn8m/register/5771ca429ad5a1020de2872e)
* [Experiment 3](https://osf.io/rjsx5/register/5771ca429ad5a1020de2872e)

## Requirements to knit manuscript

1) Install `cogsci2016` from this GitHub repository:
```S
devtools::install_github("kemacdonald/cogsci2016")
```

2) Make sure the following software is installed:

- [R](http://www.r-project.org/) (2.11.1 or later)
- [RStudio](http://www.rstudio.com/) (0.98.932 or later) is optional; if you don't use RStudio, you need to install [pandoc](http://johnmacfarlane.net/pandoc/) using the [instructions for your operating system](https://github.com/rstudio/rmarkdown/blob/master/PANDOC.md)
- A [TeX](http://de.wikipedia.org/wiki/TeX) distribution (2013 or later; e.g., [MikTeX](http://miktex.org/) for Windows, [MacTeX](https://tug.org/mactex/) for Mac, or [TeX Live]

3) Note the package versions with which the analyses were run:

bindrcpp_0.2.2,   langcog_0.1.9001, here_0.1,         broom_0.4.3,     
ggthemes_3.4.0,   brms_2.0.1,       Rcpp_0.12.19,     lme4_1.1-15,     
Matrix_1.2-12,    forcats_0.2.0,    stringr_1.3.1,    dplyr_0.7.7,     
purrr_0.2.5,      readr_1.1.1,      tidyr_0.7.2,      tibble_1.4.2,    
tidyverse_1.2.1,  xtable_1.8-2,     ggplot2_3.0.0,    png_0.1-7,

You do not need to install these particular versions to be able to run the script, but some numerical values may differ (e.g.,  regression model results).
