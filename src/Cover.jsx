import { Button, Stack, Typography } from "@mui/material";

const Cover = ({ onOpenInvitation }) => {
  return (
    <Stack
      spacing={3}
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh", background: "#f8f7f390" }}
    >
      <Typography variant="h6">THE WEDDING OF</Typography>
      <Typography
        variant="h1"
        sx={{ fontFamily: "'Satisfy', cursive" }}
        textAlign="center"
      >
        Risca & Estu
      </Typography>
      <Typography variant="h6">24 DESEMBER 2023</Typography>
      <Button
        variant="outlined"
        sx={{ color: "#765830", borderColor: "#765830" }}
        onClick={onOpenInvitation}
      >
        Buka Undangan
      </Button>
    </Stack>
  );
};

export default Cover;
