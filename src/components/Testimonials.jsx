import React from "react";
import { Box, Typography, Button, Rating } from "@mui/material";
import { theme } from "../utils/theme";
import { Image } from "../assets/ImageLinks";

const testimonialsData = [
  {
    id: 1,
    name: "Dianne Russell",
    image: Image.testimonial_1,
    text: "I recently discovered Bio Valley, a natural skincare brand, and I'm so glad I did! I was looking for a product that was free from harsh chemicals and toxins, and Bio Valley fit the bill.",
    rating: 5,
  },
  {
    id: 2,
    name: "Dianne Russell",
    image: Image.testimonial_2,
    text: "I recently discovered Bio Valley, a natural skincare brand, and I'm so glad I did! I was looking for a product that was free from harsh chemicals and toxins, and Bio Valley fit the bill.",
    rating: 5,
  },
  {
    id: 3,
    name: "Dianne Russell",
    image: Image.testimonial_3,
    text: "I recently discovered Bio Valley, a natural skincare brand, and I'm so glad I did! I was looking for a product that was free from harsh chemicals and toxins, and Bio Valley fit the bill.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F2F7F7",
        padding: "80px 8%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Box sx={{ textAlign: "center", marginBottom: "72px" }}>
        <Typography
          sx={{
            color: theme.colors.landingHeading,
            fontWeight: 600,
            fontSize: theme.fontSize.sm,
            letterSpacing: "1px",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          TESTIMONIALS
        </Typography>
        <Typography
          sx={{
            color: theme.colors.fontBlack,
            fontWeight: 600,
            fontSize: "40px",
          }}
        >
          What keeps us Going
        </Typography>
      </Box>

      {/* Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "32px",
          marginBottom: "64px",
        }}
      >
        {testimonialsData.map((testimonial) => (
          <Box
            key={testimonial.id}
            sx={{
              backgroundColor: theme.colors.white,
              borderRadius: "16px",
              padding: "48px 32px 32px", // more top padding to match design
              textAlign: "center",
              position: "relative",
              boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
              marginTop: "40px", // to make space for the avatar overlapping
            }}
          >
            {/* Avatar Placeholder */}
            <Box
              component="img"
              src={testimonial.image}
              alt={testimonial.name}
              sx={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                border: `3px solid ${theme.colors.landingHeading}`,
                objectFit: "cover",
                position: "absolute",
                top: "-36px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />

            <Box sx={{ marginBottom: "16px" }}>
              <Rating
                value={testimonial.rating}
                readOnly
                size="small"
                sx={{ color: "#fbb614" }}
              />
            </Box>

            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "18px",
                color: theme.colors.fontBlack,
                marginBottom: "16px",
              }}
            >
              {testimonial.name}
            </Typography>

            <Typography
              sx={{
                color: theme.colors.font_2,
                fontSize: "15px",
                lineHeight: 1.6,
              }}
            >
              {testimonial.text}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Bottom Button */}
      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="outlined"
          sx={{
            borderColor: theme.colors.landingHeading,
            color: theme.colors.landingHeading,
            borderRadius: "32px",
            padding: "8px 40px",
            textTransform: "none",
            fontWeight: 500,
            fontSize: "16px",
            "&:hover": {
              borderColor: theme.colors.landingHeading,
              backgroundColor: "rgba(2, 105, 107, 0.04)",
            },
          }}
        >
          View All
        </Button>
      </Box>
    </Box>
  );
};

export default Testimonials;
