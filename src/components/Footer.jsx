import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import { Logo } from "../assets/ImageLinks";

// Icons for Get in Touch
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

// Social Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

import { theme } from "../utils/theme";
import { Image } from "../assets/ImageLinks";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: theme.colors.footerBg,
        pt: { xs: 8, md: 10 },
        pb: 4,
        px: 12.5,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6}>
          {/* Column 1: Brand Info */}
          <Grid size={{ xs: 12, md: 4 }}>
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
                  height: "140px", // original large height
                  objectFit: "cover",
                  objectPosition: "center", // adjust: "center", "bottom"
                }}
              />
            </Box>
            <Typography
              variant="body1"
              sx={{
                color: theme.colors.font,
                lineHeight: 1.8,
                maxWidth: "90%",
                mt: 2,
              }}
            >
              Unleashing natural beauty through expertly crafted skincare, free
              from harsh chemicals, and inspired by the transformative essence
              of nature.
            </Typography>
          </Grid>

          {/* Column 2: Products */}
          <Grid size={{ xs: 12, sm: 4, md: 2 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#2b3d2b", mb: 3 }}
            >
              Products
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                maxWidth: "200px",
              }}
            >
              <Box
                component="img"
                src={Logo.waterFooter}
                alt="Bio Valley Logo"
                sx={{
                  height: "32px",
                  width: "32px",
                }}
              />
              <Box
                component="img"
                src={Logo.airFooter}
                alt="Bio Valley Logo"
                sx={{
                  height: "32px",
                  width: "32px",
                }}
              />
              <Box
                component="img"
                src={Logo.fireFooter}
                alt="Bio Valley Logo"
                sx={{
                  height: "32px",
                  width: "32px",
                }}
              />
              <Box
                component="img"
                src={Logo.leafFooter}
                alt="Bio Valley Logo"
                sx={{
                  height: "32px",
                  width: "32px",
                }}
              />
              <Box
                component="img"
                src={Logo.cloudFooter}
                alt="Bio Valley Logo"
                sx={{
                  height: "32px",
                  width: "32px",
                }}
              />
            </Box>
          </Grid>

          {/* Column 3: Useful Links */}
          <Grid size={{ xs: 12, sm: 4, md: 3 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#2b3d2b", mb: 3 }}
            >
              Useful Links
            </Typography>
            <Stack spacing={1.5}>
              {[
                "Privacy Policy",
                "Refund Policy",
                "Terms of Service",
                "Contact Us",
                "About Us",
              ].map((text) => (
                <Link
                  key={text}
                  href="#"
                  underline="none"
                  sx={{
                    color: theme.colors.font,
                    fontWeight: 500,
                    transition: "0.3s",
                    "&:hover": {
                      color: theme.colors.landingHeading,
                      transform: "translateX(5px)",
                    },
                    display: "inline-block",
                    width: "fit-content",
                  }}
                >
                  <Typography fontSize={theme.fontSize.xs} fontWeight={500}>
                    {text}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Column 4: Get in Touch */}
          <Grid size={{ xs: 12, sm: 4, md: 3 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: theme.colors.font,
                mb: 3,
              }}
            >
              Get in Touch
            </Typography>
            <Stack spacing={2} sx={{ mb: 3 }}>
              <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                <LocationOnIcon sx={{ color: theme.colors.font, mt: 0.5 }} />
                <Typography sx={{ color: theme.colors.font }}>
                  B-92 Sec 2 Noida - 201301
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <PhoneIcon sx={{ color: theme.colors.font }} />
                <Typography sx={{ color: theme.colors.font }}>
                  + 91-120-4671000
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <EmailIcon sx={{ color: theme.colors.font }} />
                <Typography sx={{ color: theme.colors.font }}>
                  Info@Bio-valley.com
                </Typography>
              </Box>
            </Stack>

            <Box sx={{ display: "flex", gap: 1 }}>
              {[FacebookIcon, InstagramIcon, LinkedInIcon, XIcon].map(
                (Icon, index) => (
                  <IconButton
                    key={index}
                    size="small"
                    sx={{
                      color: "#2b3d2b",
                      transition: "0.3s",
                      "&:hover": {
                        backgroundColor: "rgba(43, 61, 43, 0.1)",
                        transform: "translateY(-3px)",
                      },
                    }}
                  >
                    <Icon />
                  </IconButton>
                ),
              )}
            </Box>
          </Grid>
        </Grid>

        <Divider
          sx={{ my: 4, borderColor: theme.colors.divider, opacity: 2 }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography sx={{ color: theme.colors.font }}>
            All Rights Reserved © 2023, Bio Valley
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
