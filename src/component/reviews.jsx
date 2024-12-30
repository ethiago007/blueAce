import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

function Reviews() {
  return (
    <>
      <Box
        sx={{
          display: "block",
          justifyContent: "center",
          fontFamily: "Inter, sans-serif",
          color: "#FAFAFA",
          mb: 5,
        }}
      >
        <br />
        <br />
        <br />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              fontSize: "20px",
              color: "#FAFAFA",
            }}
          >
            Take our users word for it
          </Typography>
        </motion.div>
      </Box>
    </>
  );
}

export default Reviews;
