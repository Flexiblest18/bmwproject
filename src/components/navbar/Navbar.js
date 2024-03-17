import {
  AppBar,
  Box,
  Button,
  Container,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LOGO from "../../../src/assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClickMenu = (route) => {
    handleCloseNavMenu();
    navigate(route);
  };

  const pages = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Car",
      route: "/car",
    },
    {
      name: "About Us",
      route: "/about-us",
    },
    {
      name: "Contact Us",
      route: "/contact-us",
    },
  ];

  const path = window.location.pathname;

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "#fff",
        boxShadow: "2px 4px 16px rgba(112, 144, 176, 0.2)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              alignItems: "center",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#000"
            >
              <MenuIcon />
            </IconButton>
            <Box
              height={"40px"}
              width={"auto"}
              onClick={() => navigate("/")}
              sx={{ cursor: "pointer" }}
            >
              <img
                src={LOGO}
                alt="logo"
                width={"100%"}
                height={"100%"}
                style={{ objectFit: "cover" }}
              />
            </Box>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page?.name}
                  onClick={() => handleClickMenu(page?.route)}
                >
                  <Typography
                    textAlign="center"
                    color={page?.name === path ? "#4b7bec" : "#000"}
                  >
                    {page?.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Hidden mdDown>
            <Box
              height={"40px"}
              width={"40px"}
              onClick={() => navigate("/")}
              sx={{ cursor: "pointer" }}
            >
              <img
                src={LOGO}
                alt="logo"
                width={"40px"}
                height={"40px"}
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Hidden>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page?.name}
                onClick={() => handleClickMenu(page?.route)}
                sx={{
                  my: 2,
                  color: page?.route === path ? "#4b7bec" : "#000",
                  display: "block",
                  "&:hover": {
                    color: "#4b7bec",
                  },
                }}
              >
                {page?.name}
              </Button>
            ))}
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{ bgcolor: "#4b7bec" }}
              onClick={() => navigate("/sign-in")}
            >
              Sign In
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
