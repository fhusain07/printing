import {
  Box,
  Grid,
  Typography,
  IconButton,
  Divider,
  Button,
  TextField,
} from "@mui/material";
import { LocationOn, Phone, Email, Instagram } from "@mui/icons-material";
import logo from "../../assets/LOGO.png";
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "#fff",
        py: 6,
        px: { xs: 3, md: 8 },
      }}
    >
      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box mb={2}>
            <img src={logo} alt="Advocate" style={{ height: 100 }} />
          </Box>
          <Divider sx={{ borderColor: "#444", mb: 1 }} />
          <Box display="flex" alignItems="flex-start" mb={1}>
            <LocationOn sx={{ mr: 1, mt: "3px" }} />
            <Typography variant="body2">
              Shop No : 3 Beside Barkate Raza Masjid, Wanjra
              Nagpur - 440026
            </Typography>
          </Box>
          <Box display="flex" alignItems="flex-start" mb={1}>
            <Phone sx={{ mr: 1, mt: "3px" }} />
            <Typography variant="body2">9326051110 | 9876543210</Typography>
          </Box>
          <Box display="flex" alignItems="flex-start" mb={1}>
            <Email sx={{ mr: 1, mt: "3px" }} />
            <Typography variant="body2">tnv@gmail.com</Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="body2" mb={1}>
              Follow us:
            </Typography>
            <Box>
              <IconButton color="inherit" size="small">
                <Instagram />
              </IconButton>
            </Box>
          </Box>
        </Grid>

       
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Typography variant="subtitle2" mb={2} fontWeight="bold" fontSize={18}>
            Services
          </Typography>
          {[
            "Offset Printing",
            "Digital Printing",
            "Business Cards & Flyers",
            "Wedding & Invitation Cards",
            "Booklet & Brochure Printing",
            "Custom Packaging & Labels",
          ].map((service, i) => (
            <Box key={i}>
              <Typography
                variant="body2"
                sx={{
                  mb: 1,
                  cursor: "pointer",
                  "&:hover": { color: "#b17a49" },
                }}
              >
                {service}
              </Typography>
              <Divider sx={{ borderColor: "#444", my: 1 }} />
            </Box>
          ))}
        </Grid>

        {/* Get Consultation Column */}
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Typography variant="subtitle2" mb={2} fontWeight="bold" fontSize={18}>
            Request a Price Estimate?
          </Typography>

          {/* Contact Form */}
          <Box component="form" noValidate autoComplete="off">
            <TextField
              fullWidth
              placeholder="Name"
              variant="outlined"
              size="small"
              sx={{ mb: 2, backgroundColor: "#fff" }}
            />
            <TextField
              fullWidth
              placeholder="Email"
              type="email"
              variant="outlined"
              size="small"
              sx={{ mb: 2, backgroundColor: "#fff" }}
            />
            <TextField
              fullWidth
              placeholder="Phone Number"
              type="tel"
              variant="outlined"
              size="small"
              sx={{ mb: 2, backgroundColor: "#fff" }}
            />
            <TextField
              fullWidth
              placeholder="Details"
              multiline
              rows={3}
              variant="outlined"
              size="small"
              sx={{ mb: 2, backgroundColor: "#fff" }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#b17a49",
                borderRadius: 0,
                textTransform: "none",
                "&:hover": { backgroundColor: "#a06b38" },
              }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
