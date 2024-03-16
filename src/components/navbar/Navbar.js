import {
  AppBar,
  Box,
  Button,
  Container,
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
          <Box height={"40px"} width={"auto"}>
            <img src={LOGO} alt="logo" width={"100%"} height={"100%"} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
                  <Typography textAlign="center" color={"#000"}>
                    {page?.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page?.name}
                onClick={() => handleClickMenu(page?.route)}
                sx={{ my: 2, color: "#000", display: "block" }}
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
