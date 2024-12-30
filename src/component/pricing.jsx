import * as React from "react";
import {
  Paper,
  Stack,
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import "@fontsource/inter";

const PriceCard = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FAFAFA",
        justifyContent: "center",
      }}
    >
      <br />
      <br />
      <br />
      <Typography
        sx={{
          fontFamily: "Inter, sans-serif",
          display: "flex",
          justifyContent: "center",
          fontSize: "20px",
        }}
      >
        Pricing Plans
      </Typography>
      <Stack
        direction={{ md: "row", sm: "column", xs: "column" }}
        spacing={{ md: 16, sm: 8, xs: 5 }}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Box sx={{ display: "block", justifyContent: "center" }}>
          <Card
            sx={{
              width: { md: 350, sm: 350, xs: 250 },
              borderRadius: "24px",
              position: "relative",
              top: "45px",
              justifySelf: "center",
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                sx={{ color: "#1E1E1E", fontSize: 16, fontWeight: "400" }}
              >
                Free
              </Typography>
              <Typography
                sx={{ fontSize: "36px", color: "#030303", fontWeight: "500" }}
                component="div"
              >
                $0<span className="lite">/year</span>
              </Typography>
              <Divider />
              <br />
              <Box>
                <Typography sx={{ color: "#030303", mb: 1 }}>
                  • Advanced analytics
                </Typography>
                <Typography sx={{ color: "#030303", mb: 1 }}>
                  • CV review with InteractAI
                </Typography>
                <Typography sx={{ color: "#030303", mb: 1 }}>
                  • <span className="strike"> Access to resources </span>
                </Typography>
                <Typography sx={{ color: "#030303", mb: 1 }}>
                  •{" "}
                  <span className="strike">
                    {" "}
                    Unlimited mock live interview{" "}
                  </span>
                </Typography>
                <Typography sx={{ color: "#030303", mb: 1 }}>
                  •{" "}
                  <span className="strike"> Interview question database </span>
                </Typography>
                <Typography sx={{ color: "#030303" }}>
                  • <span className="strike"> Fast track feedback </span>
                </Typography>
              </Box>
            </CardContent>
            <CardActions></CardActions>
          </Card>
          <div
            style={{
              borderRadius: "24px",
              backgroundColor: "#303030",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "85px",
              justifySelf: "center",
            }}
            className="responsive-div"
          >
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "16px",
                color: "#FFFFFF",
                mt: 6.5,
              }}
            >
              {" "}
              Get Started for Free{" "}
              <svg
                width="20"
                height="10"
                viewBox="0 0 20 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289L15.7071 0.292893C15.3166 -0.0976311 14.6834 -0.0976311 14.2929 0.292893C13.9024 0.683418 13.9024 1.31658 14.2929 1.70711L16.5858 4L1 4C0.447716 4 0 4.44772 0 5C0 5.55229 0.447716 6 1 6L16.5858 6L14.2929 8.29289C13.9024 8.68342 13.9024 9.31658 14.2929 9.70711C14.6834 10.0976 15.3166 10.0976 15.7071 9.70711L19.7071 5.70711Z"
                  fill="#FFFFFF"
                />
              </svg>
            </Typography>
          </div>
        </Box>
        <Box sx={{ display: "block", justifyContent: "center" }}>
          <Card
            sx={{
              width: { md: 350, sm: 350, xs: 250 },
              borderRadius: "24px",
              position: "relative",
              top: "45px",
              justifySelf: "center",
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                sx={{ color: "#1E1E1E", fontSize: 16, fontWeight: "400" }}
              >
                Premium
              </Typography>
              <Typography
                sx={{ fontSize: "36px", color: "#030303", fontWeight: "500" }}
                component="div"
              >
                $100<span className="lite">/year</span>
              </Typography>
              <Divider />
              <br />
              <Box>
                <Typography sx={{ color: "#030303", mb: 1 }}>
                  • Advanced analytics
                </Typography>
                <Typography sx={{ color: "#030303", mb: 1 }}>
                  • CV review with InteractAI
                </Typography>
                <Typography sx={{ color: "#030303", mb: 1 }}>
                  • Access to resources
                </Typography>
                <Typography sx={{ color: "#030303", mb: 1 }}>
                  • Unlimited mock live interview
                </Typography>
                <Typography sx={{ color: "#030303", mb: 1 }}>
                  • Interview question database
                </Typography>
                <Typography sx={{ color: "#030303" }}>
                  • Fast track feedback
                </Typography>
              </Box>
            </CardContent>
            <CardActions></CardActions>
          </Card>
          <div
            style={{
              borderRadius: "24px",
              backgroundColor: "#212AE3",
              display: "flex",
              justifyContent: "center",
              height: "85px",
              justifySelf: "center",
            }}
            className="responsive-div"
          >
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "16px",
                color: "#FFFFFF",
                mt: 6.5,
              }}
            >
              {" "}
              Upgrade To Premium{" "}
              <svg
                width="20"
                height="10"
                viewBox="0 0 20 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289L15.7071 0.292893C15.3166 -0.0976311 14.6834 -0.0976311 14.2929 0.292893C13.9024 0.683418 13.9024 1.31658 14.2929 1.70711L16.5858 4L1 4C0.447716 4 0 4.44772 0 5C0 5.55229 0.447716 6 1 6L16.5858 6L14.2929 8.29289C13.9024 8.68342 13.9024 9.31658 14.2929 9.70711C14.6834 10.0976 15.3166 10.0976 15.7071 9.70711L19.7071 5.70711Z"
                  fill="#FFFFFF"
                />
              </svg>
            </Typography>
          </div>
        </Box>
      </Stack>
      <br />
      <br />
      <br />
      <br />
    </Box>
  );
};
export default PriceCard;
