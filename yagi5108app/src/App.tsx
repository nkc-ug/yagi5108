import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import Tutorial from "./Tutorial";
import Form from "./Form";
import Flower from "./Flower";
import bgImage from "../image/背景.png";
import BottonGroups from "./ButtonGroups";

const App = () => {
  //tutorial用の定数たち
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //form用の定数たち
  const [inputText, setInputText] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };
  const handleSubmit = () => {
    console.log(inputText);
    setInputText("");
  };

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
            position: "relative",
          }}
        >
          <img
            src={bgImage}
            alt=""
            style={{ width: "auto", height: "auto", maxHeight: "100%" }}
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={250}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Form
              inputText={inputText}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </Box>
          <Box
            position="absolute"
            top={250}
            left={0}
            right={0}
            bottom={0}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Flower />
          </Box>
          <Box
            position="absolute"
            top={630}
            left={0}
            right={0}
            bottom={0}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <BottonGroups />
          </Box>
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
