import { useState } from 'react'
import ResponsiveAppBar from './component/navbar'
import TextBig from './component/text';
import InteractRobot from './component/midrobot';
import CardFeatures from './component/features';
import VerticalStepperLayout from './component/how';
import PriceCard from './component/pricing';
import { Box } from '@mui/material';
import './App.css'
import '@fontsource/inter';

function App() {


  return (
    <>
      <ResponsiveAppBar />
      <br></br>
      <br></br>
      <TextBig />
      <br></br>
      <InteractRobot />
      <Box className="hope">
      <CardFeatures />
      <VerticalStepperLayout />
      </Box>
      <PriceCard />
      
     
    </>
  )
}

export default App
