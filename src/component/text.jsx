import React from "react";
import { Box, Typography, Button } from "@mui/material";
import "../App.css";

function TextBig() {
  return (
    <>
      <Box>
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
        <br></br>
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
        <br></br>
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
            {" "}
            Get Started{" "}
          </Button>
        </Box>
        <br></br>
        <br></br>
      </Box>
    </>
  );
}

export default TextBig;
