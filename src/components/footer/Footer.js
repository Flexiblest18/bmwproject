import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box width={"100%"} mt={8}>
      <Box display={"flex"} justifyContent={"center"}>
        <Typography
          mr={2}
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "#4b7bec",
            },
          }}
          onClick={() => navigate("/")}
        >
          HOME
        </Typography>
        <Typography
          mr={2}
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "#4b7bec",
            },
          }}
          onClick={() => navigate("/car")}
        >
          CAR
        </Typography>
        <Typography
          mr={2}
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "#4b7bec",
            },
          }}
          onClick={() => navigate("/about-us")}
        >
          ABOUT US
        </Typography>
        <Typography
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "#4b7bec",
            },
          }}
          onClick={() => navigate("/contact-us")}
        >
          CONTACT US
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} mt={2} mb={2}>
        <Avatar sx={{ bgcolor: "#4b7bec", mr: "4px" }}>B</Avatar>
        <Avatar sx={{ bgcolor: "#4b7bec", mr: "4px" }}>M</Avatar>
        <Avatar sx={{ bgcolor: "#4b7bec" }}>W</Avatar>
      </Box>
      <hr />
      <Typography fontSize={14} textAlign={"center"} color="#7f8c8d" mb={8}>
        Copyright 2024
      </Typography>
    </Box>
  );
};

export default Footer;
