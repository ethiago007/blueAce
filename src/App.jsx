import React, { useState, useEffect } from "react";
import ResponsiveAppBar from "./component/navbar";
import TextBig from "./component/text";
import InteractRobot from "./component/midrobot";
import CardFeatures from "./component/features";
import VerticalStepperLayout from "./component/how";
import PriceCard from "./component/pricing";
import Reviews from "./component/reviews";
import Reviews2 from "./component/reviewmain";
import Footer from "./component/footer";
import Preloader from "./component/loader";
import { Box } from "@mui/material";
import "./App.css";
import "@fontsource/inter";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "robot.png"; 
    img.onload = () => {
      setIsImageLoaded(true); 
    };
    setTimeout(() => {
      setIsLoading(false); 
    }, 7000);
  }, []);

  return (
    <>
      <div>
        {isLoading ? (
          <Preloader />
        ) : (
          <div>
            <ResponsiveAppBar />
            <br />
            <br />
            <TextBig />
            <br />
            <InteractRobot isImageLoaded={isImageLoaded} />{" "}
            <Box className="hope">
              <CardFeatures />
              <VerticalStepperLayout />
            </Box>
            <PriceCard />
            <Reviews />
            <Reviews2 />
            <Footer />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
