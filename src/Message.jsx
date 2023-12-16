import { Box, Stack, Typography } from "@mui/material";

const Message = () => {
  return (
    <Stack
      spacing={2}
      p={3}
      alignItems="flex-start"
      sx={{
        minHeight: "100vh",
        minWidth: "90vw",
        background: "#f8f7f3",
        margin: "auto",
      }}
    >
      <Box>
        <Typography variant="body1" sx={{ fontStyle: "italic" }}>
          Bissmillahirahmannirrahim
        </Typography>
        <Typography variant="body1" sx={{ fontStyle: "italic" }}>
          Assalamualaykum Warahmatullahi Wabarakatuh
        </Typography>
      </Box>
      <Typography variant="body1">
        Dear, <span style={{ fontWeight: "bold" }}>Nama Temen</span>
      </Typography>
      <Typography variant="body1" textAlign="justify">
        Kami ingin berbagi berita menggembirakan. Akhirnya, setelah serangkaian
        perjalanan yang panjang dan penuh warna, Kami akan mengikatkan diri
        dalam ikatan suci pernikahan. Sungguh, kebahagiaan ini tak akan lengkap
        tanpa kehadiranmu.
      </Typography>
      <Typography variant="body1" textAlign="justify">
        Jadi, tanggal{" "}
        <span style={{ fontWeight: "bold" }}>24 Desember 2023</span> nanti, kami
        akan menggelar acara pernikahan kami di{" "}
        <span style={{ fontWeight: "bold" }}>
          Desa Gunung Besar, Kec. Abung Tengah, Kab. Lampung Utara, Lampung
        </span>
        . Semoga suatu saat nanti, kamu bisa bersama kami untuk merayakan momen
        spesial ini.
      </Typography>
      <Typography variant="body1" textAlign="justify">
        Doakan agar langkah-langkah kami diliputi berkah dan keberkahan. Harapan
        besar kami adalah melihatmu hadir dalam momen bersejarah ini.
      </Typography>
      <Typography variant="body1" textAlign="justify">
        Terima kasih untuk semua momen yang telah kita bagikan. Kebersamaanmu
        akan selalu menjadi tambahan istimewa dalam pernikahan kami. Kami sangat
        berharap dapat melihatmu di sana!
      </Typography>
      <Box>
        <Typography variant="body1" textAlign="justify" gutterBottom>
          Kami yang berbahagia,
        </Typography>
        <Typography
          variant="h6"
          textAlign="justify"
          sx={{ fontFamily: "'Satisfy', cursive" }}
        >
          Risca dan Estu
        </Typography>
      </Box>
    </Stack>
  );
};

export default Message;
