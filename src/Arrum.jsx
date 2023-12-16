import { Box, Stack, Typography } from "@mui/material";

const Arrum = () => {
  return (
    <Box
      p={2}
      sx={{
        boxSizing: "border-box",
        height: "100vh",
        minWidth: "100vw",
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{
          background: "#f8f7f399",
          width: "100%",
          height: "100%",
          borderRadius: 2,
        }}
      >
        <Typography variant="body2" textAlign="center">
          “Dan diantara tanda-tanda kekuasaan-Nya ialah diciptakan Nya untukmu
          pasangan hidup dari jenismu sendiri supaya kamu mendapat ketenangan
          hati dan dijadikan-Nya kasih sayang diantara kamu. Sesungguhnya yang
          demikian menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang
          berfikir.”
        </Typography>
        <Typography variant="body2" textAlign="center" sx={{ fontWeight: 700 }}>
          Q.S. Ar-Rum : 21
        </Typography>
      </Stack>
    </Box>
  );
};

export default Arrum;
