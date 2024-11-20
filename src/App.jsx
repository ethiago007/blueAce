import { useState } from 'react'
import ResponsiveAppBar from './component/navbar'
import TextBig from './component/text';
import YoutubeEmbed from './component/video';
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
      <YoutubeEmbed embedId="XQUJAQ_7tHc" />
    </>
  )
}

export default App
