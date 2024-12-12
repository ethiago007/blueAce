import React from "react";
import { Typography,
    Box
 } from "@mui/material";
import '../App.css'


function InteractRobot() {
  return (
    <div>
       <Box sx={{ color: '#FAFAFA', fontFamily: 'Inter, sans-serif', display: 'flex', justifyContent: 'center' }}>
                <img src="robot.png" alt="" className="robot" />
            </Box>
    </div>
  )
}

export default InteractRobot
