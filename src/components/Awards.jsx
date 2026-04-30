import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { theme } from "../utils/theme";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Image } from "../assets/ImageLinks";

const awardsData = [
  {
    id: 1,
    text: '"Lorem ipsum dolor sit. Lacus nulla rhoncus varius enim velit pharetra varius integer scelerisque. tristiqu. Egestas non scelerisque nunc dui platea at"',
    image: Image.award_1,
  },
  {
    id: 2,
    text: '"Lorem ipsum dolor sit. Lacus nulla rhoncus varius enim velit pharetra varius integer scelerisque. tristiqu. Egestas non scelerisque nunc dui platea at"',
    image: Image.award_2,
  },
  {
    id: 3,
    text: '"Lorem ipsum dolor sit. Lacus nulla rhoncus varius enim velit pharetra varius integer scelerisque. tristiqu. Egestas non scelerisque nunc dui platea at"',
    image: Image.award_3,
  },
  {
    id: 4,
    text: '"Lorem ipsum dolor sit. Lacus nulla rhoncus varius enim velit pharetra varius integer scelerisque. tristiqu. Egestas non scelerisque nunc dui platea at"',
    image: "https://placehold.co/200x280/F5F5F5/333?text=Certificate+2",
  },
  {
    id: 5,
    text: '"Lorem ipsum dolor sit. Lacus nulla rhoncus varius enim velit pharetra varius integer scelerisque. tristiqu. Egestas non scelerisque nunc dui platea at"',
    image: "https://placehold.co/180x280/F5F5F5/333?text=Trophy+3",
  },
  {
    id: 6,
    text: '"Lorem ipsum dolor sit. Lacus nulla rhoncus varius enim velit pharetra varius integer scelerisque. tristiqu. Egestas non scelerisque nunc dui platea at"',
    image: "https://placehold.co/190x280/F5F5F5/333?text=Trophy+4",
  },
];

const Awards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3;

  const handleNext = () => {
    if (currentIndex < awardsData.length - cardsToShow) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <Box sx={{ bgcolor: "#F0F7F7", py: "72px", px: "96px", mt: "96px" }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: "64px",
        }}
      >
        <Typography
          fontSize="40px"
          fontWeight={500}
          color={theme.colors.fontBlack}
        >
          Achievements & Recognition
        </Typography>
        <Box sx={{ display: "flex", gap: "16px" }}>
          <IconButton
            onClick={handlePrev}
            sx={{
              border: `1px solid ${theme.colors.landingHeading}`,
              color: theme.colors.landingHeading,
              opacity: currentIndex === 0 ? 0.3 : 1,
              width: "48px",
              height: "48px",
              pointerEvents: currentIndex === 0 ? "none" : "auto",
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              bgcolor: theme.colors.landingHeading,
              color: "white",
              "&:hover": { bgcolor: "#025557" },
              opacity:
                currentIndex >= awardsData.length - cardsToShow ? 0.3 : 1,
              width: "48px",
              height: "48px",
              pointerEvents:
                currentIndex >= awardsData.length - cardsToShow
                  ? "none"
                  : "auto",
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Carousel */}
      <Box sx={{ overflow: "hidden", py: "40px", my: "-40px" }}>
        <Box
          sx={{
            display: "flex",
            gap: "32px",
            width: "100%",
            transition: "transform 0.4s ease-in-out",
            transform: `translateX(calc(-${currentIndex} * (100% / 3 + 32px / 3)))`,
          }}
        >
          {awardsData.map((award) => (
            <Box
              key={award.id}
              sx={{
                flex: "0 0 calc((100% - 64px) / 3)",
                bgcolor: theme.colors.footerBg, // using the sage green from theme
                borderRadius: "12px",
                p: "32px",
                height: "240px",
                display: "flex",
                alignItems: "center",
                position: "relative",
                boxSizing: "border-box",
              }}
            >
              <Box sx={{ width: "65%", pr: "16px" }}>
                <Typography
                  color={theme.colors.font}
                  sx={{ fontSize: "15px", lineHeight: 1.6 }}
                >
                  {award.text}
                </Typography>
              </Box>
              <Box
                component="img"
                src={award.image}
                alt={`Award ${award.id}`}
                sx={{
                  position: "absolute",
                  right: "-20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  height: "125%",
                  width: "auto",
                  maxWidth: "45%",
                  objectFit: "contain",
                  borderRadius: "8px",
                  
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Awards;
