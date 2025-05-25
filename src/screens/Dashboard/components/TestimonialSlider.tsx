import { Typography, Box, Avatar, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Testimonial from "./Testimonial";
import image1 from "../../../assets/A.jpg";

const testimonials = [
  {
    name: "Frank Kinney",
    title: "FINANCIAL DIRECTOR",
    image: image1,
    content:
      "Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus. Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien. Sed aliquam leo et semper vestibulum.",
  },
  {
    name: "Frank Kinney",
    title: "FINANCIAL DIRECTOR",
    image:
      "https://images.unsplash.com/photo-1603415526960-f8f2a67cc180?auto=format&fit=crop&w=400&q=80",
    content:
      "Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus. Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien. Sed aliquam leo et semper vestibulum.",
  },
  {
    name: "Frank Kinney",
    title: "FINANCIAL DIRECTOR",
    image:
      "https://images.unsplash.com/photo-1603415526960-f8f2a67cc180?auto=format&fit=crop&w=400&q=80",
    content:
      "Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus. Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien. Sed aliquam leo et semper vestibulum.",
  },
  {
    name: "Frank Kinney",
    title: "FINANCIAL DIRECTOR",
    image:
      "https://images.unsplash.com/photo-1603415526960-f8f2a67cc180?auto=format&fit=crop&w=400&q=80",
    content:
      "Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus. Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien. Sed aliquam leo et semper vestibulum.",
  },
  {
    name: "Frank Kinney",
    title: "FINANCIAL DIRECTOR",
    image:
      "https://images.unsplash.com/photo-1603415526960-f8f2a67cc180?auto=format&fit=crop&w=400&q=80",
    content:
      "Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus. Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien. Sed aliquam leo et semper vestibulum.",
  },
  {
    name: "Frank Kinney",
    title: "FINANCIAL DIRECTOR",
    image:
      "https://images.unsplash.com/photo-1603415526960-f8f2a67cc180?auto=format&fit=crop&w=400&q=80",
    content:
      "Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus. Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien. Sed aliquam leo et semper vestibulum.",
  },
  {
    name: "Frank Kinney",
    title: "FINANCIAL DIRECTOR",
    image:
      "https://images.unsplash.com/photo-1603415526960-f8f2a67cc180?auto=format&fit=crop&w=400&q=80",
    content:
      "Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus. Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien. Sed aliquam leo et semper vestibulum.",
  },
  // Add more testimonial objects here if needed
];

const TestimonialSlider = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Testimonial>
      {testimonials.map((item) => {
        return (
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
            flexDirection={isSmall ? "column" : "row"}
          >
            {/* Avatar */}
            <Grid>
              <Avatar
                src={item.image}
                alt={item.name}
                sx={{ width: 120, height: 120, borderRadius: 1 }}
              />
            </Grid>

            {/* Text Section */}
            <Grid size={{ xs: 12, sm: 8 }}>
              <Typography variant="body1" color="textSecondary" mb={2}>
                "{item.content}"
              </Typography>
              <Typography variant="h6" fontWeight="bold" color="textPrimary">
                {item.name}
              </Typography>
              <Typography
                variant="caption"
                sx={{ letterSpacing: 1 }}
                color="textSecondary"
              >
                {item.title}
              </Typography>
              <Box display="flex" justifyContent="center" mt={2}>
                {/* Dot indicators */}
                {/* {testimonials.map((_, index) => (
                  <Box
                    key={index}
                    width={index === current ? 24 : 16}
                    height={2}
                    mx={0.5}
                    bgcolor={index === current ? "black" : "grey.400"}
                    sx={{ transition: "all 0.3s" }}
                  />
                ))} */}
              </Box>
            </Grid>
          </Grid>
        );
      })}
    </Testimonial>
  );
};

export default TestimonialSlider;
