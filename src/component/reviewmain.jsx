import React from "react";
import { Box, Typography, Button } from "@mui/material";

function Reviews2() {
  return (
    <>
      <Box
        sx={{
          display: "block",
          justifyContent: "center",
          fontFamily: "Inter, sans-serif",
          color: "#FAFAFA",
          backgroundImage: "url('/Ellipse 99.png')",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: "50vh",
          width: "100%"
        }}
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
              display: "flex",
              justifyContent: "center",
              color: "#FAFAFA",
              fontWeight: 500,
              textAlign: "center",
              width: { xs: "100%", sm: "70%", md: "60%" },
              fontSize: { xs: "17px", sm: "20px", md: "30px" },
              paddingLeft: {xs: 3, sm: 5},
              paddingRight: {xs: 3, sm: 5}
            }}
          >
            “ InteractAI prepared me for my first job interview as a virtual
            assistant. I aced the interview and got retained at the company.
            Everyone should totally use it ”
          </Typography>
        </Box>
        <br />
        <br />
        <Box>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "#E4E4E4",
              fontWeight: 500,
              textAlign: "center",
              fontSize: { xs: "10px", sm: "12px", md: "18px" },
            }}
          >
            Romanio Alberto
          </Typography>
        </Box>
        <br />
        <br />
        <br />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#212AE3",
              color: "#FAFAFA",
              textTransform: "initial",
              fontFamily: "Inter, sans-serif",
              paddingLeft: "18px",
              paddingRight: "18px"
            }}
          >
            {" "}
            Get Started For Free{" "}
          </Button>
        </Box>
        <br />
        <br />
        <br />
       
      </Box>
    </>
  );
}

export default Reviews2;
