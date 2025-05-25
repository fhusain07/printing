import { Box, Typography, Button } from "@mui/material";

function SolutionsTogether() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#facc15",
          textAlign: "center",
          py: 10,
          px: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, mb: 2, maxWidth: 800, mx: "auto" }}
        >
          Our experts will suggest the most suitable operating model for a
          specific field
        </Typography>

        <Typography variant="body1" sx={{ maxWidth: 600, mx: "auto", mb: 4 }}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </Typography>

        <Button
          variant="contained"
          sx={{
            bgcolor: "white",
            color: "#be123c",
            fontWeight: 600,
            borderRadius: 0,
            px: 4,
            py: 1.5,
            textTransform: "uppercase",
            boxShadow: "none",
            ":hover": {
              bgcolor: "#f1f1f1",
              boxShadow: "none",
            },
          }}
        >
          Join Now
        </Button>
      </Box>
    </>
  );
}

export default SolutionsTogether;
