import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const CarCard = ({ title, img, des, price }) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ boxShadow: "2px 4px 16px rgba(112, 144, 176, 0.2)" }}>
      <CardMedia sx={{ height: 300 }} image={img} title={title} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontFamily={"poppins"}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          fontFamily={"poppins"}
        >
          {des}
        </Typography>

        <Box
          sx={{ bgcolor: "rgba(75, 123, 236, 0.2)" }}
          p={1.5}
          borderRadius={1}
          mt={2}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography
              sx={{ color: "#4b7bec", fontWeight: "bold" }}
              fontFamily={"poppins"}
            >
              {price}
            </Typography>
            <Button
              variant="contained"
              sx={{
                boxShadow: "none",
                bgcolor: "#4b7bec",
                fontFamily: "poppins",
              }}
              onClick={() => navigate("/see-more")}
            >
              See details
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CarCard;
