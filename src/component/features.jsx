import React from "react";
import {
  Typography,
  Box,
  Card,
  Grid2,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import "@fontsource/inter";
import { motion } from "framer-motion";

function CardFeatures() {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          display: "block",
          justifyContent: "center",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <br />
        <br />
        <br />
        <Typography
          sx={{ display: "flex", justifyContent: "center", fontSize: "20px" }}
        >
          Features
        </Typography>
        <br />
        <Box sx={{ flexGrow: 1, fontFamily: "Inter, sans-serif" }}>
          <Grid2
            container
            spacing={2}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Grid2 size={{ xs: 8, md: 5 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Card sx={{ boxShadow: "none", backgroundColor: "#FAFAFA", borderRadius: 6 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="../Illustration.png"
                      alt=""
                      sx={{
                       objectFit: "cover",
                       width: "90%",
                       display: "block",
                       margin: "auto", 
                       paddingTop: {md: 2, xs: 0, sm: 3},
                       borderRadius: 5,
                      }}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        sx={{ fontWeight: "bold", fontSize: "17px", textAlign: "left" }}
                        component="div"
                      >
                        Mock Live Interviews
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.black", textAlign: "left" }}>
                        InteractAI helps simulate interviews tailored to specific
                        job roles, industries, and experience level.
                      </Typography>
                    </CardContent>
                    <Box sx={{display: {md: "block", xs: "none", sm: "none"}}}> <br /> </Box>
                  </CardActionArea>
                  
                </Card>
              </motion.div>
            </Grid2>
            <Grid2 size={{ xs: 8, md: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Card sx={{ boxShadow: "none", backgroundColor: "#FAFAFA", borderRadius: 6 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="../Illustration (1).png"
                      alt=""
                      sx={{
                        objectFit: "cover",
                        width: "100%",
                        display: "block",
                        margin: "auto", 
                        paddingTop: {md: 3, xs: 0, sm: 3},
                        borderRadius: 5,
                        height: "127px"
                       }}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        sx={{ fontWeight: "bold", fontSize: "17px", textAlign: "left" }}
                        component="div"
                      >
                        Skill Assessment and Feedback
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.black", textAlign: "left" }}>
                        During the interview, InteractAI assesses users strengths
                        and weaknesses and give feedback.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </motion.div>
            </Grid2>
          </Grid2>
          <br />
          <Grid2
            container
            spacing={2}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Grid2 size={{ xs: 8, md: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Card sx={{ boxShadow: "none", backgroundColor: "#FAFAFA", borderRadius: 6 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="../Illustration (2).png"
                      alt=""
                      sx={{
                        objectFit: "cover",
                        width: "90%",
                        display: "block",
                        margin: "auto", 
                        paddingTop: {md: 1, xs: 0, sm: 3},
                        borderRadius: 5,
                        height: "147px"
                       }}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        sx={{ fontWeight: "bold", fontSize: "17px", textAlign: "left" }}
                        component="div"
                      >
                        Resume Analysis
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.black", textAlign: "left" }}>
                        InteractAI allows users to upload resumes and get tailored
                        improvement tips.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </motion.div>
            </Grid2>
            <Grid2 size={{ xs: 8, md: 5 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Card sx={{ boxShadow: "none", backgroundColor: "#FAFAFA", borderRadius: 6 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="../Illustration (3).png"
                      alt=""
                      sx={{
                        objectFit: "cover",
                        width: "90%",
                        display: "block",
                        margin: "auto", 
                        paddingTop: {md: 2, xs: 0, sm: 3},
                        borderRadius: 5,
                       }}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        sx={{ fontWeight: "bold", fontSize: "17px", textAlign: "left" }}
                        component="div"
                      >
                        Resource Library
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.black", textAlign: "left" }}>
                        We offer common questions asked during interviews by
                        hiring mangers and provide examples for behavioral and
                        technical questions.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </motion.div>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </div>
  );
}

export default CardFeatures;
