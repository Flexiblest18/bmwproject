import { Box, Container, IconButton, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Bxt from "../../../src/assets/images/m5.jpg";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const SeeMore = ({ img, title, des, price }) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Navbar />
      <Container maxWidth="xl">
        <Box mt={13} display="flex" alignItems={"center"}>
          <IconButton sx={{ color: "black" }} onClick={() => navigate(-1)}>
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="h4" fontWeight={600} pl={1}>
            BMW GT4
          </Typography>
        </Box>
        <Box mb={3} mt={1}>
          <Typography pl={6}>Price: $ 10,000</Typography>
        </Box>
      </Container>
      <Box sx={{ height: "600px", width: "100%" }}>
        <img
          src={Bxt}
          alt={"Car image"}
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "600px",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Container maxWidth="xl">
        <Box mt={3}>
          <Typography variant="body1" color={"#575454"}>
            More room for high performance: BMW M GmbH confirms development of a
            new BMW M5 Touring. 26.06.2023PRESS RELEASE Seventh generation of
            the BMW M5 Sedan already undergoing an intensive testing programme.
            BMW M GmbH to continue its product offensive in 2024 and confirms
            the extension of its model range to include a Touring variant of the
            new high-performance model.More room for high performance: BMW M
            GmbH confirms development of a new BMW M5 Touring. 26.06.2023PRESS
            RELEASE Seventh generation of the BMW M5 Sedan already undergoing an
            intensive testing programme. BMW M GmbH to continue its product
            offensive in 2024 and confirms the extension of its model range to
            include a Touring variant of the new high-performance model. More
            room for high performance: BMW M GmbH confirms development of a new
            BMW M5 Touring. 26.06.2023PRESS RELEASE Seventh generation of the
            BMW M5 Sedan already undergoing an intensive testing programme. BMW
            M GmbH to continue its product offensive in 2024 and confirms the
            extension of its model range to include a Touring variant of the new
            high-performance model.More room for high performance: BMW M GmbH
            confirms development of a new BMW M5 Touring. 26.06.2023PRESS
            RELEASE Seventh generation of the BMW M5 Sedan already undergoing an
            intensive testing programme. BMW M GmbH to continue its product
            offensive in 2024 and confirms the extension of its model range to
            include a Touring variant of the new high-performance model.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default SeeMore;
