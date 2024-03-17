import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "500px",
          mt: "50px",
        }}
      >
        <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
          <Typography variant="h4" align="center" mb={2}>
            Contact Us
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
              type="email"
            />
            <TextField
              fullWidth
              label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              margin="normal"
              required
              multiline
              rows={4}
            />
            <Button variant="contained" type="submit" sx={{ mt: 2 }}>
              Submit
            </Button>
          </form>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
