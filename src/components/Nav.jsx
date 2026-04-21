import { Box, Button, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import { theme } from "../utils/theme";
import { Image } from "../assets/ImageLinks";

const NavItems = [
  { label: "Gift sets", path: "/gift-sets" },
  {
    label: "Aqua",
    children: ["Oceans", "Rivers", "Lakes"],
  },
  { label: "Earth", path: "/earth" },
  { label: "Fire", path: "/fire" },
  {
    label: "Air",
    path: "/air",
  },
  { label: "Sky", path: "/sky" },
  {
    label: "Learn More",
    children: ["Blogs", "About Us", "Contact Us"],
  },
];

const Nav = () => {
  return (
    <Box
      margin={"20px 96px 0 96px"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {/* logo */}
        <Box
          sx={{
            height: 56,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={Image.companyIcon}
            alt="Bio Valley Logo"
            sx={{
              height: "100px", // original large height
              objectFit: "cover",
              objectPosition: "center", // adjust: "center", "bottom"
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "8px",
          }}
        >
          {NavItems.map((item) => (
            <Button key={item.label} sx={{ boxShadow: "none" }}>
              <Typography
                fontSize={theme.fontSize.xs}
                fontWeight={500}
                color={theme.colors.font}
                sx={{
                  "&:hover": {
                    color: theme.colors.landingHeading,
                  },
                }}
              >
                {item.label}
              </Typography>

              {item?.children && (
                <KeyboardArrowDownIcon sx={{ color: theme.colors.font }} />
              )}
            </Button>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <LocalMallIcon />
        <FavoriteIcon />
        <SearchIcon />
        <Box
          padding={"10px 32px"}
          sx={{
            borderRadius: "66px",
            border: 1,
            borderColor: theme.colors.landingHeading,
          }}
        >
          <Typography fontWeight={600} color={theme.colors.landingHeading}>
            Log In
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
