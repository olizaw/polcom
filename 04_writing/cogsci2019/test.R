# define contrast weights for question type (expt 1, 2)
attr_vs_imp <- c(-1/4, -1/4, -1/4, -1/4, 1/2, 1/2) # attributes vs. social implications
pol_vs_nice <- c(-1/2, -1/2, 1/2, 1/2, 0, 0) # polite-rude vs. nice-mean
pos_vs_neg <- c(-1, 1, -1, 1, 0, 0) # positive vs. negative
pol_vs_rude <- c(-1, 1, 0, 0, 0, 0) 
nice_vs_comp <- c(0, 0, 1/2, 1/2, -1/2, -1/2)
pol_vs_comp <- c(-1/2, -1/2, 0, 0, 1/2, 1/2) 
pol_vs_all <- c(-1, 1/5, 1/5,1/5,1/5,1/5)
pol_vs_play <- c(-1, 0, -1, 0, 2, 0)

mat.temp <- rbind(constant=1/6, pol_vs_all, pol_vs_play, attr_vs_imp, pol_vs_nice, pos_vs_neg)
mat <- solve(mat.temp)
# drop first column
mat <- mat[ , -1]
mat <- mat[ , -1]
mat <- mat[ , -1]

# define contrast weights for request type
please_vs_two <- c(-2, 1, 1)
two_vs_canyou <- c(-1, 2, -1)
two_vs_canyouplz <- c(-1, -1, 2)

mat.temp2 <- rbind(please_vs_two, two_vs_canyou, two_vs_canyouplz)
mat2 <- solve(mat.temp2)
# drop first column
mat2 <- mat2[ , -1]

model1 <- d %>% 
  filter(expt == "v1") %>%
  mutate(question_type = fct_relevel(question_type, "polite", "rude", "nice", "mean", "play", "comp")) %>%
  mutate(request_type = fct_relevel(request_type, "please")) %>%
  glmer(correct ~ scale(age) + question_type + request_type + (1| subid),
       contrasts=list(question_type = mat),
       family="binomial",
       data = .)



# define contrast weights for comparisons of interest
asl_noasl <- c(-1 , 1/3, 1/3,  1/3) # ASL vs. No-ASL
face_objBull <- c( 0,   -1,  1, 0 ) # Face vs. Object and Bullseye
asl_face <- c( -1,   1,   0,   0 )
# create temporary matrix of weights
mat.temp <- rbind(constant=1/4, asl_noasl, face_objBull, asl_face)
# invert it
mat <- solve(mat.temp)
# drop first column
mat <- mat[ , -1]
