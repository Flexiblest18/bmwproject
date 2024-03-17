import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import CarCard from "../../../components/car-card/CarCard";
import IMG1 from "../../../assets/images/i1.jpg";
import M4 from "../../../assets/images/m4.jpg";
import M5 from "../../../assets/images/m5.jpg";
import M6 from "../../../assets/images/m6.jpg";
import GT4 from "../../../assets/images/bmw_m4_gt4.jpg";
import i8 from "../../../assets/images/i8.jpg";
import { useNavigate } from "react-router-dom";

const cars = [
  {
    title: "BMW i1",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla lacinia magna euismod laoreet.",
    img: IMG1,
    price: "$10,000",
  },
  {
    title: "BMW M4",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla lacinia magna euismod laoreet.",
    img: M4,
    price: "$15,000",
  },
  {
    title: "BMW M5",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla lacinia magna euismod laoreet.",
    img: M5,
    price: "$20,000",
  },
  {
    title: "BMW M6",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla lacinia magna euismod laoreet.",
    img: M6,
    price: "$30,000",
  },
  {
    title: "BMW GT4",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla lacinia magna euismod laoreet.",
    img: GT4,
    price: "$50,000",
  },
  {
    title: "BMW i8",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla lacinia magna euismod laoreet.",
    img: i8,
    price: "$40,000",
  },
];

const BrandNewCarSection = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <Typography variant="h4" mb={4} fontWeight={600} fontFamily={"poppins"}>
          Brand New Car
        </Typography>
        <Box>
          <Grid container spacing={2}>
            {cars.map((car, index) => (
              <Grid key={index} item xs={12} sm={12} md={6} lg={4}>
                <CarCard
                  title={car.title}
                  des={car.des}
                  img={car.img}
                  price={car.price}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box mt={5} display={"flex"} justifyContent={"center"}>
          <Button
            sx={{ bgcolor: "#4b7bec", color: "#fff" }}
            variant="contained"
            onClick={() => navigate("/car")}
          >
            See All
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default BrandNewCarSection;
