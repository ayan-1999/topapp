import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { theme } from "../utils/theme";

const Offers = () => {
  return (
    <Box
      bgcolor={theme.colors.landingHeading}
      sx={{
        height: "46px",
        padding: " 0 4%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography color={theme.colors.white} fontSize={theme.fontSize.xs}>
          40% OFF ON ALL PRODUCTS
        </Typography>
      </Box>
      <Box>
        <Typography color={theme.colors.white} fontSize={theme.fontSize.xs}>
          FREE SHIPPING ON ORDERS ABOVE ₹499
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <FacebookIcon sx={{ color: theme.colors.white }} />
        <InstagramIcon sx={{ color: theme.colors.white }} />
        <LinkedInIcon sx={{ color: theme.colors.white }} />
        <XIcon sx={{ color: theme.colors.white }} />
      </Box>
    </Box>
  );
};

export default Offers;
