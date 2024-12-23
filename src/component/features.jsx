import React from "react";
import {
    Typography,
    Box,
    Card,
    Grid2,
    CardActionArea,
    CardContent,
    CardMedia
} from "@mui/material";
import '@fontsource/inter';


function CardFeatures() {
    return (
        <div>

            <Box sx={{ backgroundColor: '#FFFFFF', fontFamily: 'Inter, sans-serif', display: 'block', justifyContent: 'center', fontFamily: 'Inter, sans-serif' }}>
                <br /><br /><br />
                <Typography sx={{ display: 'flex', justifyContent: 'center', fontSize: '20px' }}>
                    Features
                </Typography>
                <br /><br />
                <Box sx={{ flexGrow: 1, fontFamily: 'Inter, sans-serif', }}>

                    <Grid2 container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid2 size={{ xs: 8, md: 5 }}>
                            <Card sx={{boxShadow: 'none', backgroundColor: '#FAFAFA'}}>
                                <CardActionArea>

                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="../Illustration.png"
                                        alt=""
                                        
                                    />
                                    <CardContent>
                                        <Typography gutterBottom sx={{ fontWeight: 'bold', fontSize: '17px' }} component="div">
                                            Mock Live Interviews
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.black' }}>
                                            InteractAI helps simulate interviews tailored to specific job roles, industries, and experience level.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid2>
                        <Grid2 size={{ xs: 8, md: 3 }}>
                            <Card sx={{boxShadow: 'none', backgroundColor: '#FAFAFA'}}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="../Illustration (1).png"
                                        alt=""
                                        
                                    />
                                   <CardContent>
                                        <Typography gutterBottom sx={{ fontWeight: 'bold', fontSize: '17px' }} component="div">
                                            Skill Assessment and Feedback
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.black' }}>
                                        During the interview, InteractAI assesses users strengths and weaknesses and give feedback.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid2>
                    </Grid2>
                    <br />
                    <Grid2 container spacing={2} sx={{ display: 'flex', justifyContent: 'center', }}>
                        <Grid2 size={{ xs: 8, md: 3 }}>
                            <Card sx={{boxShadow: 'none', backgroundColor: '#FAFAFA'}}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="../Illustration (2).png"
                                        alt=""
                                        
                                    />
                                   <CardContent>
                                        <Typography gutterBottom sx={{ fontWeight: 'bold', fontSize: '17px' }} component="div">
                                            Resume Analysis
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.black' }}>
                                        InteractAI allows users to upload resumes and get tailored improvement tips.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid2>
                        <Grid2 size={{ xs: 8, md: 5 }}>
                            <Card sx={{boxShadow: 'none', backgroundColor: '#FAFAFA'}}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="../Illustration (3).png"
                                        alt=""
                                        
                                    />
                                   <CardContent>
                                        <Typography gutterBottom sx={{ fontWeight: 'bold', fontSize: '17px' }} component="div">
                                            Resource Library
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.black' }}>
                                        We offer common questions asked during interviews by hiring mangers and provide examples for behavioral and technical questions.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid2>
                        
                    </Grid2>
                    
                </Box>
                
            </Box>

        </div>
    )
}

export default CardFeatures
