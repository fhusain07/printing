import { Box, Grid, Typography } from "@mui/material";

function Solutions() {
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: 8 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
        Together we create solutions
      </Typography>

      <Typography
        variant="body1"
        sx={{ color: "text.secondary", maxWidth: 700, mb: 3 }}
      >
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </Typography>

      <Box sx={{ height: 10, width: 200, bgcolor: "#facc15", mb: 6 }} />

      <Grid container spacing={4}>
        {[1, 2, 3].map((item) => (
          <Grid size={{ xs: 12, md: 4 }} key={item}>
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Solutions;
