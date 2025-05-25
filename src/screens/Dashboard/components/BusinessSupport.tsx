import { Box, Grid, Typography } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import TungstenIcon from "@mui/icons-material/Tungsten";
import StorageIcon from "@mui/icons-material/Storage";
import SettingsIcon from "@mui/icons-material/Settings";

function BusinessSupport() {
  return (
    // After Section 3
    <Box sx={{ px: { xs: 2, md: 10 }}}>
      <Grid container spacing={6}>
        {/* Legal Services */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box display="flex" gap={2}>
            <Box>
              <TungstenIcon
                fontSize="large"
                style={{ color: "#facc15", fontSize: 80 }}
              />
            </Box>
            <Box>
              <Typography variant="subtitle1" fontWeight={700}>
                Legal Services
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Offers professional legal consulting / advisory, and competent
                and timely assistance on a wide range of issues. Our experienced
                lawyers will help you to deal with both routine business and
                strategic development.
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Accounting */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box display="flex" gap={2}>
            <Box>
              <DescriptionIcon
                style={{ color: "#facc15", fontSize: 80 }}
                fontSize="large"
              />
            </Box>
            <Box>
              <Typography variant="subtitle1" fontWeight={700}>
                Accounting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We offer to our customers accounting services for all forms of
                businesses possible in Estonia and in other jurisdictions.
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Taxes */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box display="flex" gap={2}>
            <Box>
              <StorageIcon
                fontSize="large"
                style={{ color: "#facc15", fontSize: 80 }}
              />
            </Box>
            <Box>
              <Typography variant="subtitle1" fontWeight={700}>
                Taxes
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Successful companies take tax implications into consideration
                before making business decisions in order not to pay more taxes
                than prescribed by law. The available options for saving money
                can be left unattended, especially if a company is operating on
                new markets or under new jurisdictions.
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Corporate Services */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box display="flex" gap={2}>
            <Box>
              <SettingsIcon
                fontSize="large"
                style={{ color: "#facc15", fontSize: 80 }}
              />
            </Box>
            <Box>
              <Typography variant="subtitle1" fontWeight={700}>
                Corporate Services
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Our experts will suggest the most suitable operating model for a
                specific field of activity or project that would ensure the
                highest efficiency and safety of the partnership.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BusinessSupport;
