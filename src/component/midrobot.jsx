import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import "../App.css";

function InteractRobot({ isImageLoaded }) {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (isImageLoaded) {
      setImageSrc("robot.png");
    }
  }, [isImageLoaded]);

  return (
    <div>
      <Box
        sx={{
          color: "#FAFAFA",
          fontFamily: "Inter, sans-serif",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {isImageLoaded ? (
          <motion.img
            src={imageSrc}
            alt="Robot"
            className="robot"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          />
        ) : (
          <p>Loading...</p>
        )}
      </Box>
    </div>
  );
}

export default InteractRobot;
