import React, { useState } from 'react';
import {
    Stepper,
    Step,
    StepLabel,
    Button,
    Grid2,
    Box
} from '@mui/material';

const steps = ['Step 1', 'Step 2', 'Step 3'];
const images = [
    'https://via.placeholder.com/300?text=Image+1',
    'https://via.placeholder.com/300?text=Image+2',
    'https://via.placeholder.com/300?text=Image+3',
];

const VerticalStepperWithImage = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
    const handleBack = () => setActiveStep((prev) => Math.max(prev - 1, 0));

    return (
        <>
        <Box sx={{backgroundColor: '#FFFFFF'}}>
        <br /><br />
        <Grid2 container spacing={2} alignItems="center" >
            {/* Stepper on the Left */}
            <Grid2 item xs={12} md={6}>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Box mt={2}>
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        variant="contained"
                        style={{ marginRight: '10px' }}
                    >
                        Back
                    </Button>
                    <Button
                        disabled={activeStep === steps.length - 1}
                        onClick={handleNext}
                        variant="contained"
                    >
                        Next
                    </Button>
                </Box>
            </Grid2>

            {/* Image on the Right */}
            <Grid2 item xs={12} md={6}>
                <Box
                    sx={{
                        width: '100%',
                        height: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img
                        src={images[activeStep]}
                        alt={`Step ${activeStep + 1}`}
                        style={{ maxWidth: '100%', borderRadius: '8px' }}
                    />
                </Box>
            </Grid2>
        </Grid2>
        </Box>
        </>
    );
};

export default VerticalStepperWithImage;