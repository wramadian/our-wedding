import { useRef } from "react";
import Cover from "./Cover";
import Message from "./Message";
import { Box } from "@mui/material";

function App() {
  const messageRef = useRef();

  const onOpenInvitation = () => {
    messageRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Cover onOpenInvitation={onOpenInvitation} />
      <Box ref={messageRef}>
        <Message />
      </Box>
    </>
  );
}

export default App;
