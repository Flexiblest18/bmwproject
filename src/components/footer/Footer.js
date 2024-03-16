import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box width={"100%"} mt={8}>
      <Box display={"flex"} justifyContent={"center"}>
        <Typography mr={2}>HOME</Typography>
        <Typography mr={2}>CAR</Typography>
        <Typography mr={2}>ABOUT US</Typography>
        <Typography>CONTACT US</Typography>
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
