import React, { useState } from "react";
import { Box, Typography, IconButton, Button, Rating } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { theme } from "../utils/theme";

const products = [
  {
    id: 1,
    title: "Keratin Oil",
    price: "199.00",
    rating: 4,
    reviews: 4,
  },
  {
    id: 2,
    title: "Dead Sea Shampoo",
    price: "699.00",
    rating: 4,
    reviews: 4,
  },
  {
    id: 3,
    title: "Ylang Ylang",
    price: "499.00",
    rating: 4,
    reviews: 4,
  },
  {
    id: 4,
    title: "Lavender",
    price: "999.00",
    rating: 4,
    reviews: 4,
  },
  {
    id: 5,
    title: "Lavender",
    price: "999.00",
    rating: 4,
    reviews: 4,
  },
];

const PremiumSelection = () => {
  const [activeTab, setActiveTab] = useState("Best Sellers");
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 4;

  const handleNext = () => {
    if (currentIndex < products.length - cardsToShow) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <Box sx={{ padding: "80px 8%", position: "relative" }}>
      {/* Header Section */}
      <Box sx={{ textAlign: "center", marginBottom: "48px" }}>
        <Typography
          sx={{
            color: theme.colors.landingHeading,
            fontWeight: 600,
            fontSize: theme.fontSize.sm,
            letterSpacing: "1px",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          Explore
        </Typography>
        <Typography
          sx={{
            color: theme.colors.fontBlack,
            fontWeight: 700,
            fontSize: "36px",
            marginBottom: "32px",
          }}
        >
          Our Premium Selections
        </Typography>

        {/* Toggle Buttons */}
        <Box
          sx={{
            display: "inline-flex",
            backgroundColor: "#f2f6f7",
            borderRadius: "40px",
            padding: "4px",
          }}
        >
          {["Best Sellers", "New Arrivals"].map((tab) => (
            <Button
              key={tab}
              onClick={() => setActiveTab(tab)}
              disableElevation
              sx={{
                borderRadius: "40px",
                padding: "8px 32px",
                textTransform: "none",
                fontWeight: 500,
                fontSize: theme.fontSize.sm,
                backgroundColor:
                  activeTab === tab ? theme.colors.landingHeading : "transparent",
                color:
                  activeTab === tab ? theme.colors.white : theme.colors.font_2,
                "&:hover": {
                  backgroundColor:
                    activeTab === tab
                      ? theme.colors.landingHeading
                      : "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              {tab}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Cards Section */}
      <Box sx={{ position: "relative" }}>
        
        {/* Left Arrow Button */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: "-2%",
            top: "160px", // middle of the 320px image placeholder
            transform: "translateY(-50%)",
            zIndex: 2,
            backgroundColor: theme.colors.white,
            border: `1px solid ${theme.colors.landingHeading}`,
            color: theme.colors.landingHeading,
            opacity: currentIndex === 0 ? 0.3 : 1,
            pointerEvents: currentIndex === 0 ? "none" : "auto",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            "&:hover": {
              backgroundColor: "#f4f8f8",
            },
            width: "48px",
            height: "48px",
          }}
        >
          <ArrowBackIcon />
        </IconButton>

        <Box sx={{ overflow: "hidden" }}>
          <Box
            sx={{
              display: "flex",
              gap: "24px",
              width: "100%",
              transition: "transform 0.4s ease-in-out",
              transform: `translateX(calc(-${currentIndex} * (100% / 4 + 24px / 4)))`,
            }}
          >
            {products.map((product) => (
              <Box
                key={product.id}
                sx={{
                  flex: "0 0 calc((100% - 72px) / 4)",
                  borderRadius: "8px",
                  boxSizing: "border-box",
              }}
            >
              {/* Image Placeholder */}
              <Box
                sx={{
                  backgroundColor: "#e0e0e0",
                  width: "100%",
                  height: "320px",
                  borderRadius: "16px",
                  marginBottom: "16px",
                  // To cover the gap created by border when selected
                  margin: "0 0 16px 0",
                  width: "100%"
                }}
              />
              
              {/* Product Info */}
              <Box sx={{ padding: "0 8px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <Typography
                    sx={{
                      color: theme.colors.fontBlack,
                      fontWeight: 500,
                      fontSize: theme.fontSize.md,
                    }}
                  >
                    {product.title}
                  </Typography>
                  <FavoriteBorderIcon sx={{ color: theme.colors.font_2, cursor: "pointer" }} />
                </Box>
                
                <Typography
                  sx={{
                    color: theme.colors.fontBlack,
                    fontWeight: 600,
                    fontSize: "22px",
                    marginBottom: "12px",
                  }}
                >
                  ₹ {product.price}
                </Typography>
                
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "20px",
                  }}
                >
                  <Rating
                    value={product.rating}
                    readOnly
                    size="small"
                    sx={{ color: "#fbb614" }}
                  />
                  <Typography
                    sx={{
                      color: theme.colors.font_2,
                      fontSize: "14px",
                    }}
                  >
                    {product.reviews} Reviews
                  </Typography>
                </Box>
                
                <Button
                  sx={{
                    textTransform: "none",
                    color: theme.colors.landingHeading,
                    fontWeight: 600,
                    fontSize: "15px",
                    padding: 0,
                    "&:hover": { backgroundColor: "transparent", opacity: 0.8 },
                  }}
                  endIcon={<ArrowForwardIcon fontSize="small" />}
                >
                  Add to Cart
                </Button>
              </Box>
            </Box>
          ))}
          </Box>
        </Box>

        {/* Right Arrow Button */}
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: "-2%",
            top: "160px", // middle of the 320px image placeholder
            transform: "translateY(-50%)",
            zIndex: 2,
            backgroundColor: theme.colors.white,
            border: `1px solid ${theme.colors.landingHeading}`,
            color: theme.colors.landingHeading,
            opacity: currentIndex >= products.length - cardsToShow ? 0.3 : 1,
            pointerEvents: currentIndex >= products.length - cardsToShow ? "none" : "auto",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            "&:hover": {
              backgroundColor: "#f4f8f8",
            },
            width: "48px",
            height: "48px",
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default PremiumSelection;
