import React from "react";
import { Box, Typography, Button, InputBase } from "@mui/material";
import { theme } from "../utils/theme";
import { Image } from "../assets/ImageLinks";

const Subscribe = () => {
  return (
    <>
      <Box
        component="img"
        src={Image.pattern2}
        alt="Pattern"
        sx={{
          position: "absolute",
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          padding: "0 8%",
          // Creates the two-tone background so the banner appears to overlap the sections
          background: `linear-gradient(to bottom, #F2F7F7 50%, ${theme.colors.white} 50%)`,
        }}
      >
        <Box
          sx={{
            backgroundColor: theme.colors.footerBg, // Usually #C9E4CA based on previous components
            borderRadius: "16px",
            padding: "64px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={Image.pattern1}
            alt="Pattern"
            sx={{
              position: "absolute",
              top: -500,
              right: 0,
            }}
          />
          {/* Abstract background curves are omitted per no-image constraints */}

          <Box
            sx={{
              width: { xs: "100%", md: "60%" },
              zIndex: 2,
              position: "relative",
            }}
          >
            <Typography
              sx={{
                color: theme.colors.fontBlack,
                fontWeight: 600,
                fontSize: "42px",
                lineHeight: 1.2,
                marginBottom: "16px",
              }}
            >
              Subscribe and Be Future
              <br />
              Ready
            </Typography>

            <Typography
              sx={{
                color: theme.colors.font_2,
                fontSize: "16px",
                marginBottom: "40px",
                maxWidth: "80%",
              }}
            >
              Learn about our new arrivals and get the benefits of our exciting
              offers.
            </Typography>

            <Box sx={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <InputBase
                placeholder="Your Email"
                sx={{
                  border: `1px solid rgba(2, 105, 107, 0.4)`,
                  borderRadius: "32px",
                  padding: "10px 24px",
                  backgroundColor: "transparent",
                  color: theme.colors.fontBlack,
                  flex: 1,
                  minWidth: "250px",
                  fontSize: "15px",
                  "&::placeholder": {
                    color: "rgba(0, 0, 0, 0.5)",
                  },
                }}
              />
              <Button
                variant="outlined"
                sx={{
                  borderColor: theme.colors.landingHeading,
                  color: theme.colors.landingHeading,
                  borderRadius: "32px",
                  padding: "10px 32px",
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "15px",
                  "&:hover": {
                    borderColor: theme.colors.landingHeading,
                    backgroundColor: "rgba(2, 105, 107, 0.04)",
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Subscribe;
