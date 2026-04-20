import { Box, Typography } from "@mui/material";
import { theme } from "../utils/theme";
import Carousel from "./Carousel";
import { Logo } from "../assets/ImageLinks";

const NatureElement = () => {
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
      <Typography
        fontSize={theme.fontSize.sm * 3}
        color={theme.colors.font}
        fontWeight={600}
        mb={3}
      >
        Experience the 5 elements of <br /> Nature in every product!
      </Typography>
      <Typography
        fontSize={theme.fontSize.sm}
        color={theme.colors.font_2}
        fontWeight={400}
        mb={7.5}
      >
        Unlock the power of nature with Bio Valley's natural personal care
        product range.
        <br />
        Let nature superpower your skin.
      </Typography>
      <Carousel />
    </Box>
  );
};

export default NatureElement;
