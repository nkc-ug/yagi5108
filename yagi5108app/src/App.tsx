import React from "react";
import { Container, Box } from "@mui/material";
import Tutorial from "./Tutorial";
import bgImage from "../image/背景.png";

const App = () => {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Box
        style={{
          backgroundColor: "black",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        position="relative"
      >
        <Container
          maxWidth="sm"
          disableGutters
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            maxHeight: "100vh",
          }}
        >
          <img
            src={bgImage}
            alt=""
            style={{ width: "auto", height: "auto", maxHeight: "100%" }}
          />
          <div style={{ position: "absolute", top: 5, left: 0 }}>
            <Tutorial
              open={open}
              openclick={handleOpen}
              closeclick={handleClose}
            />
          </div>
        </Container>
      </Box>
    </div>
  );
};

export default App;
