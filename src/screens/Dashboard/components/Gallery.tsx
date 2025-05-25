import { Box, Grid, Typography } from "@mui/material";
import image from "../../../assets/demosvg.svg";
function Gallery() {
  return (
    <Grid sx={{ px: 14, py: 8 }} container>
      <Grid size={{ xs: 12, md: 6 }} sx={{ position: "relative" }}>
        <Box
          component="img"
          src={image}
          alt="Linda Hudson"
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Grid>
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 300 }}>
            Sample Headline
          </Typography>
          <Typography textAlign="center" pt={2}>
            Sample text. Click to select the Text Element.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Gallery;
