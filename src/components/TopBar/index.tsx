import {
  Box,
  Typography,
  IconButton,
  Grid,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Instagram, Phone, LocationOn, Email } from "@mui/icons-material";

const TopBar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ backgroundColor: "#a56f3b", color: "white", px: 2, py: 1 }}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        direction={isSmallScreen ? "column" : "row"}
      >
        <Grid size={{xs:12, sm:"auto"}}>
          <Box
            display="flex"
            flexDirection={isSmallScreen ? "column" : "row"}
            alignItems={isSmallScreen ? "flex-start" : "center"}
            flexWrap="wrap"
            gap={2}
          >
            <Box display="flex" alignItems="center" gap={0.5}>
              <Email fontSize="small" />
              <Link
                href="mailto:tnv@gmail.com"
                color="inherit"
                underline="hover"
              >
                tnv@gmail.com
              </Link>
            </Box>

            <Box display="flex" alignItems="center" gap={0.5}>
              <LocationOn fontSize="small" />
              <Typography>Nagpur</Typography>
            </Box>

            <Box display="flex" alignItems="center" gap={0.5} flexWrap="wrap">
              <Phone fontSize="small" />
              <Link
                href="tel:+919326051110"
                color="inherit"
                underline="hover"
              >
                9326051110
              </Link>
              {!isSmallScreen && (
                <>
                  <Typography sx={{ px: 0.5 }}>|</Typography>
                  <Link
                    href="tel:8657820780"
                    color="inherit"
                    underline="hover"
                  >
                    9876543210
                  </Link>
                </>
              )}
            </Box>
          </Box>
        </Grid>

        <Grid size={{xs:12, sm:"auto"}}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent={isSmallScreen ? "center" : "flex-end"}
            gap={1}
          >
            <Typography fontWeight={600}>Follow us:</Typography>
            <IconButton size="small" color="inherit">
              <Instagram />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopBar;
