import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import BANNER from "../../../../src/assets/images/banner.png";

const FirstSection = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={5}>
          <Box display={"flex"} alignItems={"center"} height={"600px"}>
            <Box>
              <Typography
                variant="h4"
                fontWeight={600}
                sx={{ fontFamily: "poppins" }}
              >
                Let’s, find your dream car Easily
              </Typography>
              <Typography sx={{ fontFamily: "poppins" }}>
                Our service best and good quality, Best car in the world
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={7}>
          <Box height="600px" width={"100%"}>
            <img
              src={BANNER}
              alt="car"
              height={"100%"}
              width="100%"
              style={{
                // backgroundSize: "cover",
                // backgroundRepeat: "no-repeat",
                // backgroundPosition: "center",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FirstSection;
