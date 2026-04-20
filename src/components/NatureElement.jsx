import { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { theme } from "../utils/theme";
import Carousel from "./Carousel";
import { Logo } from "../assets/ImageLinks";

const NatureElement = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setIndex((prev) => Math.min(prev + 1, 2)); // max = 5 items - 3 cards = 2
  };

  return (
    <Box
      p={12.5}
      sx={{
        bgcolor: theme.colors.bg_1,
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Box
        component="img"
        src={Logo.bgIcon_1}
        alt="Bio Valley Logo"
        sx={{
          height: "160px",
          width: "160px",
          position: "absolute",
          top: "8px",
          right: "0px",
        }}
      />
      <Box
        component="img"
        src={Logo.bgIcon_2}
        alt="Bio Valley Logo"
        sx={{
          height: "160px",
          width: "160px",
          position: "absolute",
          bottom: "30px",
          left: "-30px",
        }}
      />
      <Typography
        fontSize={theme.fontSize.sm}
        color={theme.colors.landingHeading}
        fontWeight={600}
        mb={2}
      >
        PRODUCT RANGE
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", mb: 7.5 }}>
        <Box>
          <Typography
            fontSize={theme.fontSize.sm * 3}
            color={theme.colors.font}
            fontWeight={600}
            mb={3}
            lineHeight={1.3}
          >
            Experience the 5 elements of <br /> Nature in every product!
          </Typography>
          <Typography
            fontSize={theme.fontSize.sm}
            color={theme.colors.font_2}
            fontWeight={400}
          >
            Unlock the power of nature with Bio Valley's natural personal care
            product range.
            <br />
            Let nature superpower your skin.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "16px" }}>
          <IconButton
            onClick={handlePrev}
            disabled={index === 0}
            sx={{
              border: `1px solid ${theme.colors.landingHeading}`,
              color: theme.colors.landingHeading,
              opacity: index === 0 ? 0.3 : 1,
              width: "48px",
              height: "48px",
              pointerEvents: index === 0 ? "none" : "auto",
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <IconButton
            onClick={handleNext}
            disabled={index >= 2}
            sx={{
              bgcolor: theme.colors.landingHeading,
              color: "white",
              opacity: index >= 2 ? 0.3 : 1,
              width: "48px",
              height: "48px",
              "&:hover": { bgcolor: theme.colors.landingHeading },
              pointerEvents: index >= 2 ? "none" : "auto",
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Box>
      <Carousel index={index} />
    </Box>
  );
};

export default NatureElement;
