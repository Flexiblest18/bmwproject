import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import BANNER from "../../../src/assets/images/aboutus.jpg";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const AboutUs = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container maxWidth="xl">
        <Box mt={15}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box height="600px">
                <img
                  src={BANNER}
                  alt="car"
                  height={"100%"}
                  width="100%"
                  style={{
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box display={"flex"} pt={10} height={"600px"}>
                <Box ml={"2rem"}>
                  <Typography
                    variant="h4"
                    fontWeight={600}
                    sx={{ fontFamily: "poppins" }}
                  >
                    Contact Us
                  </Typography>
                  <Typography sx={{ fontFamily: "poppins" }}>
                    I'm a General Manager of BMW. All of you can Contact We have
                    a good review and best service. Our service best and good
                    quality, Best car in the world
                  </Typography>

                  <Typography
                    variant="h4"
                    fontWeight={600}
                    sx={{ fontFamily: "poppins" }}
                    mt={10}
                  >
                    Mr. Hean Sovanndara
                  </Typography>
                  <Typography sx={{ fontFamily: "poppins" }}>
                    I'm a General Manager of BMW. All of you can Contact We have
                    a good review and best service. Our service best and good
                    quality, Best car in the world.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed nec nulla lacinia magna
                    euismod laoreet. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Sed nec nulla lacinia magna euismod
                    laoreet.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default AboutUs;
