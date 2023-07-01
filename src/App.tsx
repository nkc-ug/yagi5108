import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import Tutorial from "./Tutorial";
import Form from "./Form";
import Flower from "./Flower";
import Syokuzi from "./syokuzi";
import Setting from "./settings";
import bgImage from "../image/背景.png";
import RandomWalker from "./RandomWalker";
import BGMPlayer from "./Bgm";
import bgm from "../Audio/自然の中でゆったりと.mp3";
import EmotionApi from "./EmotionApi";

const App: React.FC = () => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputText, setInputText] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };


  //山本、追加
  const [emotionData] = useState<number[]>([0, 0, 0, 0, 0]);
  const handleSubmit = () => {
    <EmotionApi text={inputText} emotionData={emotionData} />;
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
            style={{ width: "auto", height: "auto", maxHeight: "100vh" }}
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
            right={50}
            bottom={0}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Flower />
          </Box>
          <Box
            position="absolute"
            top={200}
            left={0}
            right={100}
            bottom={0}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <RandomWalker />
          </Box>

          <Box
            position="absolute"
            top={35}
            left={0}
            right={40}
            bottom={0}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Syokuzi />
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
          ></Box>

          <div style={{ position: "absolute", top: 5, left: 0 }}>
            <Tutorial
              open={open}
              openclick={handleOpen}
              closeclick={handleClose}
            />
            <Setting />
            <BGMPlayer src={bgm} />
          </div>
        </Container>
      </Box>
    </div>
  );
};

export default App;
