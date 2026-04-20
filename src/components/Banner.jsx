import { Box, Typography, Button } from "@mui/material";
import { theme } from "../utils/theme";
import { Image } from "../assets/ImageLinks";

const Banner = () => {
  return (
    <Box
      sx={{
        height: "590px",
        margin: "20px 60px 100px 60px",
        backgroundImage: `url(${Image.banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        position: "relative",
        borderRadius: "24px",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
        }}
      />

      {/* Content */}
      <Box sx={{ position: "absolute", top: "174px", left: "60px" }}>
        <Typography
          color={theme.colors.fontBlack}
          fontSize={"44px"}
          fontWeight={600}
          lineHeight={1.6}
        >
          Feel confident in your
          <br /> own skin!
        </Typography>

        <Button
          variant="outlined"
          sx={{
            mt: 2,
            borderRadius: "66px",
            borderColor: theme.colors.landingHeading,
            color: theme.colors.landingHeading,
            px: 4,
            py: 1.2,
            textTransform: "none",
            fontWeight: 600,
            width: "fit-content",
            alignSelf: "center",
          }}
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;
