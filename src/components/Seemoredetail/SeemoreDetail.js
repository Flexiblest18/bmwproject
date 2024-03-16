import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Bxt from "../../../src/assets/images/m5.jpg";

const SeeMore = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundImage: `url(${Bxt})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "70vh",
        width: "100vw",
      }}
    >
      <Box>
        <Typography
          variant="body1"
          color={"#575454"}
          style={{
            position: "relative",
            top: "570px",
          }}
        >
          More room for high performance: BMW M GmbH confirms development of a
          new BMW M5 Touring. 26.06.2023PRESS RELEASE Seventh generation of the
          BMW M5 Sedan already undergoing an intensive testing programme. BMW M
          GmbH to continue its product offensive in 2024 and confirms the
          extension of its model range to include a Touring variant of the new
          high-performance model.More room for high performance: BMW M GmbH
          confirms development of a new BMW M5 Touring. 26.06.2023PRESS RELEASE
          Seventh generation of the BMW M5 Sedan already undergoing an intensive
          testing programme. BMW M GmbH to continue its product offensive in
          2024 and confirms the extension of its model range to include a
          Touring variant of the new high-performance model. More room for high
          performance: BMW M GmbH confirms development of a new BMW M5 Touring.
          26.06.2023PRESS RELEASE Seventh generation of the BMW M5 Sedan already
          undergoing an intensive testing programme. BMW M GmbH to continue its
          product offensive in 2024 and confirms the extension of its model
          range to include a Touring variant of the new high-performance
          model.More room for high performance: BMW M GmbH confirms development
          of a new BMW M5 Touring. 26.06.2023PRESS RELEASE Seventh generation of
          the BMW M5 Sedan already undergoing an intensive testing programme.
          BMW M GmbH to continue its product offensive in 2024 and confirms the
          extension of its model range to include a Touring variant of the new
          high-performance model.
        </Typography>
      </Box>
    </Box>
  );
};

export default SeeMore;
