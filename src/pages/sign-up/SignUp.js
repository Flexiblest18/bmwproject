import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import BgImg from "../../../src/assets/images/sign-up.jpg";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundImage: `url(${BgImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Box
        height={"100vh"}
        width={"100vw"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          bgcolor={"#fff"}
          p={3}
          borderRadius={2}
          sx={{ width: { xs: 300, md: 450 } }}
        >
          <Typography
            variant="h4"
            fontWeight={600}
            fontFamily={"Poppins"}
            mb={2}
          >
            Create account
          </Typography>
          <form>
            <Box display={"flex"} flexDirection={"column"}>
              <label>Username</label>
              <TextField
                variant="outlined"
                sx={{ height: "40px" }}
                fullWidth
                type="text"
                placeholder="Username"
              />
            </Box>
            <Box display={"flex"} flexDirection={"column"} mt={3}>
              <label>Email</label>
              <TextField
                variant="outlined"
                sx={{ height: "40px" }}
                fullWidth
                type="email"
                placeholder="Email"
              />
            </Box>
            <Box display={"flex"} flexDirection={"column"} mt={3}>
              <label>Password</label>
              <TextField
                variant="outlined"
                sx={{ height: "40px" }}
                fullWidth
                type="password"
                placeholder="Password"
              />
            </Box>
            <Box mt={5}>
              <Button
                variant="contained"
                fullWidth
                sx={{ bgcolor: "#4b7bec" }}
                onClick={() => navigate("/sign-in")}
              >
                Sign Up
              </Button>
            </Box>
            <Box fontSize={14} textAlign={"center"} mt={2}>
              <Typography color={"#636364"}>
                You already have an account?
                <span
                  style={{
                    fontWeight: 600,
                    textDecoration: "underline",
                    paddingLeft: "0.7rem",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/sign-in")}
                >
                  Sign In
                </span>
              </Typography>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
