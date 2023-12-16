import { Box, Stack, Typography } from "@mui/material";

const Message = () => {
  return (
    <Stack
      spacing={2}
      p={2}
      alignItems="center"
      justifyContent="center"
      sx={{
        boxSizing: "border-box",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <Stack
        sx={{ background: "#FFFFFF99", flex: 1, borderRadius: 2 }}
        p={2}
        spacing={3}
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Typography
            variant="body1"
            sx={{ fontStyle: "italic" }}
            textAlign="center"
          >
            Bissmillahirahmannirrahim
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontStyle: "italic" }}
            textAlign="center"
          >
            Assalamualaykum Warahmatullahi Wabarakatuh
          </Typography>
        </Box>
        <Typography variant="body1" textAlign="justify">
          Dengan memohon Ridho dan Rahmat Allah SWT, kami mengharapkan kehadiran
          Bapak/Ibu/Saudara/i pada acara pernikahan kami Yang Insya Allah akan
          dilaksanakan pada :
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          MINGGU, 24 DESEMBER 2023
        </Typography>
        <Typography variant="body1" textAlign="justify">
          Bertempat di :
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold" }}
          textAlign="center"
        >
          DESA GUNUNG BESAR, KEC. ABUNG SELATAN, KAB. LAMPUNG UTARA, LAMPUNG
        </Typography>
        <Typography variant="body1" textAlign="justify">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa serta restu
          kepada kami. Atas kehadiran dan doa restunya, kami ucapkan terima
          kasih.
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontStyle: "italic" }}
          textAlign="center"
        >
          Wassalamualaykum Warahmatullahi Wabarakatuh
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Message;
