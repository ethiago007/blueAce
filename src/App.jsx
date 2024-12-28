import { useState } from 'react'
import ResponsiveAppBar from './component/navbar'
import TextBig from './component/text';
import InteractRobot from './component/midrobot';
import CardFeatures from './component/features';
import VerticalStepperLayout from './component/how';
import PriceCard from './component/pricing';
import { Box } from '@mui/material';
import Reviews from './component/reviews';
import Reviews2 from './component/reviewmain';
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
      <Reviews />
      <Reviews2 />
     
    </>
  )
}

export default App
