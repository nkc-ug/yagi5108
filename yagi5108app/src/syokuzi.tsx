import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import yagi_syokuzi from "../image/yagi_syokuzi.png";

const Syokuzi = () => {
  const [showImage, setShowImage] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showImage && (
        <Box
          sx={{
            position: "absolute",
            width: "130px",
            height: "130px",
            backgroundImage: `url(${yagi_syokuzi})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      )}
    </div>
  );
};

export default Syokuzi;
