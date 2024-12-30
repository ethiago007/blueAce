import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion"; 
import "../App.css";
import "@fontsource/inter";

function TextBig() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>
      <Box>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
        >
          <Box
            sx={{
              color: "#FAFAFA",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                width: { xs: "100%", sm: "100%", md: "50%" },
                fontSize: { xs: "25px", sm: "30px", md: "40px" },
              }}
            >
              Ace Your Next <span className="inter">Interview</span> with our
              AI-Powered Mock Sessions
            </Typography>
          </Box>
        </motion.div>
        <br />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={fadeInUp}
        >
          <Box
            sx={{
              color: "#FAFAFA",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                width: { xs: "100%", sm: "100%", md: "60%" },
                fontSize: { xs: "12px", sm: "17px", md: "20px" },
              }}
            >
              Prepare confidently with personalized mock Interviews, real-time
              feedback, and actionable insights
            </Typography>
          </Box>
        </motion.div>
        <br />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          variants={buttonAnimation}
        >
          <Box
            sx={{
              color: "#FAFAFA",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                backgroundColor: "#212AE3",
                color: "#FAFAFA",
                textTransform: "initial",
                width: "130px",
              }}
            >
              Get Started
            </Button>
          </Box>
        </motion.div>
        <br />
        <br />
      </Box>
    </>
  );
}

export default TextBig;
