import { Box, Grid } from "@mui/material";
// import { AccessTime, Email, LocationCity, Phone } from "@mui/icons-material";
import Footer from "../../components/Footer";
import CustomCarousel from "../../components/CustomCarousel";
import slider_img1 from "../../assets/E.jpg";
import slider_img2 from "../../assets/F.jpg";
import slider_img3 from "../../assets/G.jpg";
import slider_img4 from "../../assets/H.jpg";

export const images = [
  {
    imgURL: slider_img1,
    imgAlt: "img-1",
  },
  {
    imgURL: slider_img2,
    imgAlt: "img-2",
  },
  {
    imgURL: slider_img3,
    imgAlt: "img-3",
  },
  {
    imgURL: slider_img4,
    imgAlt: "img-4",
  },
];
function About() {
  return (
    <Box>
      
      <Box>
        <CustomCarousel>
          {images.map((image, index) => {
            return (
              <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
                key={index}
                src={image.imgURL}
                alt={image.imgAlt}
              />
            );
          })}
        </CustomCarousel>
      </Box>

      
      <Box
        sx={{
          px: { xs: 2, sm: 6 },
          py: { xs: 4, sm: 8 },
          background: "#fff",
        }}
      >
        <Grid container spacing={4}>
          {/* Section 1 - Image and About */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                width: "100%",
                textAlign: "center",
              }}
            >
            
              
            </Box>
          </Grid>

          {/* Section 2 - Custom Heading and Demo Description */}
          {/* <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="h5" fontWeight="bold" mb={2} color="#b17a49">
              BE A VOICE, NOT AN ECHO
            </Typography>
            <Typography variant="body1" color="text.secondary">
              He obtained a law degree at the age of 23 years from Nagpur,
              university (B.A,LL.B) He has maintained a good reputation it
              through out his journey and fought many battles specially for
              marginalised section of the society.He stated his career in the
              legal profession by starting up his own office. He is proficient
              in solving any kind of legal dispute specially criminal matters.
            </Typography>
          </Grid> */}
        </Grid>
      </Box>
      <iframe
  width="100%"
  height="400"
  scrolling="no"
  src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=ASHRAF%20Printing%20Press%2C%20Shop%20No%203%2C%20Wanjra%2C%20Nagpur%20-%20440026&t=&z=14&ie=UTF8&iwloc=B&output=embed"
></iframe>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default About;
