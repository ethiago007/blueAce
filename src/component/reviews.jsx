import React from "react";
import { Box, Typography } from "@mui/material";

function Reviews() {
  return (
    <>
      <Box
        sx={{
          display: "block",
          justifyContent: "center",
          fontFamily: "Inter, sans-serif",
          color: "#FAFAFA",
          mb: 5
        }}
      >
        <br />
        <br />
        <br />
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
      </Box>
    </>
  );
}

export default Reviews;
