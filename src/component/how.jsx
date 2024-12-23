import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import "@fontsource/inter";

const steps = [
  {
    number: "1",
    title: "SIGN UP",
    description:
      "Click on get started to signup using either email or your Google account. Fill in your details and select the type of interview and preferred industry or organization.",
    image: "sign up.png",
  },
  {
    number: "2",
    title: "MOCK INTERVIEW",
    description:
      "Conduct your mock interview by engaging in a live, simulated interview with InteractAI. Respond to questions and chat freely as you would in an interview.",
    image: "interview.jpg",
  },
  {
    number: "3",
    title: "REVIEW AND ASSESSMENT",
    description:
      "Review your interview performance including response quality, time management, pacing, and tone analysis.",
    image: "assessment.jpg",
  },
];

const VerticalStepperLayout = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          fontFamily: "Inter, sans-serif",
          padding: { md: "100px", xs: "none", sm: "100px" },
        }}
      >
        <br /><br />
        <Typography
          sx={{ display: "flex", justifyContent: "center", fontSize: "20px" }}
        >
          How it works
        </Typography>
        <br />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            gap: 4,
            p: 4,
            backgroundColor: "#FFFFFF",
          }}
        >
          <Box sx={{ flex: 1 }}>
            {steps.map((step, index) => (
              <Box
                key={index}
                sx={{ display: "flex", gap: {md: 8, xs: 6} }}
                component={motion.div}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  
                 
                  <Box
                    sx={{
                      width: { md: "90px", xs: "50px" },
                      height: { md: "90px", xs: "50px" },
                      borderRadius: "50%",
                      backgroundColor:
                        index === activeStep || index < activeStep
                          ? "#212AE3"
                          : "#888EFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    
                    {step.number}
                  </Box>
                  {index < steps.length - 1 && (
                    <Box
                      sx={{
                        width: "2px",
                        height: { md: "80px", xs: "120px" },
                        backgroundColor:
                          index < activeStep ? "#212AE3" : "#888EFF",
                        marginTop: "4px",
                      }}
                    ></Box>
                  )}
                </Box>

                <Box >
                
                  <Typography
                    sx={{
                      color: "#212AE3",
                      fontSize: {md: "17px", xs: "15px"},
                      fontWeight: 500,
                    }}
                  >
                    {step.title}
                  </Typography>
                  
                  <Typography variant="body2">{step.description}</Typography>
                </Box>
                
              </Box>
            ))}

            <Box sx={{ mt: 3 }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="contained"
                sx={{ marginRight: 1 }}
              >
                Back
              </Button>
              &nbsp;
              <Button
                disabled={activeStep === steps.length - 1}
                onClick={handleNext}
                variant="contained"
              >
                Next
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            key={steps[activeStep].image}
          >
            <img
              src={steps[activeStep].image}
              alt={`Step ${activeStep + 1}`}
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "300px",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default VerticalStepperLayout;

