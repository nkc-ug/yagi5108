import React from "react";
import Tutorial from "./Tutorial";
function App() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Tutorial open={open} openclick={handleOpen} closeclick={handleClose} />
  );
}

export default App;
