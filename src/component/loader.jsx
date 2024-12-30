import React from "react";
import { bouncy } from "ldrs";
import { Box } from "@mui/material";

function Preloader() {
  bouncy.register();
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
        }}
      >
        <l-bouncy size="98" speed="1.2" color="#212AE3"></l-bouncy>
      </Box>
    </>
  );
}

export default Preloader;
