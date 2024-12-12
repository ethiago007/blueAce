import { useState } from 'react'
import ResponsiveAppBar from './component/navbar'
import TextBig from './component/text';
import InteractRobot from './component/midrobot';
import CardFeatures from './component/features';
import VerticalStepperWithImage from './component/how';
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
      <CardFeatures />
      <VerticalStepperWithImage />
    </>
  )
}

export default App
