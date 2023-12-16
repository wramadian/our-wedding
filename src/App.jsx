import { useRef } from "react";
import Cover from "./Cover";
import Message from "./Message";
import { Box, Stack } from "@mui/material";
import Arrum from "./Arrum";

function App() {
  const messageRef = useRef();

  const onOpenInvitation = () => {
    messageRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Stack alignItems="center" justifyContent="center">
      <Cover onOpenInvitation={onOpenInvitation} />
      <Box ref={messageRef}>
        <Arrum />
      </Box>
      <Message />
    </Stack>
  );
}

export default App;
