import { Box, Typography } from "@mui/material";

function Services() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          px: { xs: 2, md: 10 },
          py: 10,
          gap: 6,
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ flex: 1, minWidth: 280 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
            Services & Pricing
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "#facc15", fontStyle: "italic", fontWeight: 600 }}
          >
            Our Specialization
          </Typography>
        </Box>

        <Box
          sx={{
            flex: 2,
            minWidth: 300,
            borderLeft: "2px solid black",
            pl: 3,
          }}
        >
          <Typography variant="body1" sx={{ fontStyle: "italic" }}>
            In 1994 we started providing our services under the Larssen®
            trademark. A few years later we were among the leaders in the field
            of corporate consulting and corporate services.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Services;
