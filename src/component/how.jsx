import React, { useRef, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
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
  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxVisibleRatio = 0;
        let newActiveStep = activeStep;

        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index, 10);

          if (entry.intersectionRatio > maxVisibleRatio) {
            maxVisibleRatio = entry.intersectionRatio;
            newActiveStep = index;
          }
        });

        if (newActiveStep !== activeStep) {
          setActiveStep(newActiveStep);
        }
      },
      { threshold: Array.from({ length: 11 }, (_, i) => i * 0.1) } // Gradual thresholds for smooth detection
    );

    stepRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      stepRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, [activeStep]);

  return (
    <Box
      sx={{
        fontFamily: "Inter, sans-serif",
        backgroundColor: "#FFFFFF",
        padding: { xs: "40px", md: "100px", sm: "100px" },
        mt: 6,
      }}
    >
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: "20px",
        }}
      >
        How it works
      </Typography>
      {steps.map((step, index) => (
        <Box
          key={index}
          ref={(el) => (stepRefs.current[index] = el)}
          data-index={index}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            padding: "50px 0",
            gap: "20px",
          }}
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: activeStep === index ? 1 : 0.5,
            y: activeStep === index ? 0 : 20,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Text Content */}
          <Box sx={{ flex: 1, textAlign: "left" }}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "500",
                color: "#212AE3",
                marginBottom: "16px",
              }}
            >
              {step.title}
            </Typography>
            <Typography
              sx={{ fontSize: "16px", color: "#555", fontWeight: "400" }}
            >
              {step.description}
            </Typography>
          </Box>

          {/* Image */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img
              src={step.image}
              alt={`Step ${index + 1}`}
              style={{
                width: "100%",
                maxWidth: "400px",
                height: "auto",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default VerticalStepperLayout;
