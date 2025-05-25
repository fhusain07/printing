import { Box, Typography, Grid, IconButton, Divider } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import image from "../../../assets/A.jpg";

function Profile() {
  return (
    <Grid sx={{ px: 14 }} container>
      {/* Left Section */}
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          bgcolor: "#f3f3f3",
          py: 6,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box>
          <Box
            sx={{ borderTop: "8px solid #facc15", width: "80%", mb: 2 }}
          ></Box>
          <Typography variant="h3" sx={{ fontWeight: 300 }}>
            <Box component="span" sx={{ fontWeight: 700 }}>
              Ashraf 
            </Box>{" "}
            Printing Services
          </Typography>
          <Box
            sx={{
              borderTop: "8px solid #facc15",
              width: "80%",
              mt: 2,
              mb: 4,
            }}
          ></Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton>
              <Facebook />
            </IconButton>
            <IconButton>
              <Twitter />
            </IconButton>
            <IconButton>
              <Instagram />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            bottom: 16,
            left: 16,
            p: 2,
          }}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            LAW PRACTICE
          </Typography>
          <Divider sx={{ borderColor: "#000", borderWidth: "1.5px", my: 1 }} />
          <Typography variant="body2">
            Hanna has starred in campaigns for Garnier and Huawei, and walked in
            shows for Holly Fulton and Olympia Le-Tan.
          </Typography>
        </Box>
      </Grid>

      {/* Right Section */}
      <Grid size={{ xs: 12, md: 6 }} sx={{ position: "relative" }}>
        <Box
          component="img"
          src={image}
          alt="Linda Hudson"
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Grid>
    </Grid>
  );
}

export default Profile;
