import { Box, Button, Icon, Typography } from "@mui/material";
import { theme } from "../utils/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from '@mui/icons-material/X';

import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Banner from "./Banner";
import PremiumSelection from "./PremiumSelection";
import { Image } from "../assets/ImageLinks";
import NatureElement from "./NatureElement";
import WithUs from "./WithUs";
import Footer from "./Footer";
import Awards from "./Awards";
import Blog from "./Blog";
import Testimonials from "./Testimonials";
import Subscribe from "./Subscribe";
import FAQ from "./FAQ";

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

const Landing = () => {
  return (
    <>
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




      <Banner />
      <NatureElement />
      <PremiumSelection />
      <WithUs/>
      <Awards />
      <Blog />
      <Testimonials />
      <Subscribe />
      <FAQ />
      <Footer/>
    </>
  );
};
export default Landing;

