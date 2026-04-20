import { Box, Icon, Typography, Button } from "@mui/material";
import { theme } from "../utils/theme";

const NatureElementCard = ({ data }) => {
  let bgColor;

  switch (data.element) {
    case "Air":
      bgColor = theme.colors.air;
      break;
    case "Aqua":
      bgColor = theme.colors.aqua;
      break;
    case "Earth":
      bgColor = theme.colors.air;
      break;
    case "Fire":
      bgColor = theme.colors.air;
      break;
    case "Sky":
      bgColor = theme.colors.air;
      break;
    default:
      bgColor = "#ece3e3";
  }

  return (
    <Box
      width={"390px"}
      height={"450px"}
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "60px 8px",
        bgcolor: theme.colors.white,
        padding: "64px 60px",
      }}
    >
      <Box
        sx={{
          bgcolor: bgColor,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          p: 2,
          alignSelf: "flex-start",
          mb: "40px",
        }}
      >
        <Box
          component="img"
          src={data.icon}
          alt={data.element}
          sx={{
            height: 40,
            width: 40,
          }}
        />
      </Box>

      <Typography mb={2} fontSize={theme.fontSize.xs * 1.5} fontWeight={600}>
        {data.element}
      </Typography>
      <Typography
        mb={4}
        fontSize={theme.fontSize.sm}
        fontWeight={400}
        color={theme.colors.font_2}
        textAlign={"left"}
      >
        {data.description}
      </Typography>
    </Box>
  );
};

export default NatureElementCard;
