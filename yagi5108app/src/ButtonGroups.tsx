import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import PetsIcon from "@mui/icons-material/Pets";
import BedtimeIcon from "@mui/icons-material/Bedtime";
const BottonGroups = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d0d0d0",
        padding: 1,
      }}
    >
      <Button
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: 1,
        }}
      >
        <LocalFireDepartmentIcon sx={{ fontSize: 40 }} />
        <span>戦う</span>
      </Button>
      <Button
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: 1,
        }}
      >
        <PetsIcon sx={{ fontSize: 40 }} />
        <span>散歩</span>
      </Button>
      <Button
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: 1,
        }}
      >
        <DirectionsRunIcon sx={{ fontSize: 40 }} />
        <span>遊ぶ</span>
      </Button>
      <Button
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: 1,
        }}
      >
        <BedtimeIcon sx={{ fontSize: 40 }} />
        <span>寝る</span>
      </Button>
    </Box>
  );
};
export default BottonGroups;
