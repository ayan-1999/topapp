import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Offers from "../components/Offers";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import Subscribe from "../components/Subscribe";
import { theme } from "../utils/theme";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("20ml");

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <>
      <Offers />
      <Nav />
      <Box sx={{ px: { xs: 2, md: 12 }, py: 4 }}>
        {/* Breadcrumb */}
        <Typography variant="body2" sx={{ color: theme.colors.font_2, mb: 4 }}>
          Home / Aqua /{" "}
          <span style={{ color: theme.colors.landingHeading }}>Shampoo</span>
        </Typography>

        <Grid container spacing={6}>
          {/* Left Column: Images */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative" }}>
              {/* Main Image Placeholder */}
              <Box
                sx={{
                  width: "100%",
                  height: { xs: "300px", sm: "400px", md: "500px" },
                  backgroundColor: "#f5f5f5",
                  borderRadius: "16px",
                  mb: 2,
                }}
              />
              <IconButton
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  backgroundColor: "white",
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                  },
                }}
              >
                <FavoriteBorderIcon sx={{ color: theme.colors.fontBlack }} />
              </IconButton>
            </Box>

            {/* Thumbnails */}
            <Grid container spacing={2}>
              {[1, 2, 3, 4].map((item) => (
                <Grid item xs={3} key={item}>
                  <Box
                    sx={{
                      width: "100%",
                      paddingTop: "100%", // 1:1 Aspect Ratio
                      backgroundColor: "#f5f5f5",
                      borderRadius: "12px",
                      position: "relative",
                      border: item === 1 ? `2px solid ${theme.colors.landingHeading}` : 'none',
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right Column: Product Info */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="600" sx={{ mb: 1.5, color: theme.colors.fontBlack }}>
              Bio Valley Argan Oil Shampoo| With Natural Oils |Paraben-free, SLS-free, 100% natural, and cruelty-free
            </Typography>

            {/* Ratings */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 0.5 }}>
              {[1, 2, 3, 4, 5].map((star) =>
                star <= 4 ? (
                  <StarIcon key={star} fontSize="small" sx={{ color: theme.colors.yellow || "#FFBD38" }} />
                ) : (
                  <StarBorderIcon key={star} fontSize="small" sx={{ color: theme.colors.yellow || "#FFBD38" }} />
                )
              )}
              <Typography variant="body2" sx={{ color: theme.colors.font_2, ml: 1 }}>
                4 Reviews
              </Typography>
            </Box>

            {/* Price */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="h4" fontWeight="bold" sx={{ color: theme.colors.fontBlack }}>
                ₹499
              </Typography>
              <Typography variant="body2" sx={{ color: theme.colors.font_2 }}>
                (Incl of all taxes)
              </Typography>
            </Box>

            {/* Size & Quantity Options */}
            <Box sx={{ display: "flex", gap: 4, mb: 4 }}>
              {/* Size */}
              <Box>
                <Typography variant="body2" sx={{ mb: 1, color: theme.colors.font_2 }}>
                  Size
                </Typography>
                <FormControl size="small" sx={{ minWidth: 120 }}>
                  <Select
                    value={size}
                    onChange={handleSizeChange}
                    sx={{
                      borderRadius: "20px",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#e0e0e0",
                      },
                    }}
                  >
                    <MenuItem value="20ml">20ml</MenuItem>
                    <MenuItem value="50ml">50ml</MenuItem>
                    <MenuItem value="100ml">100ml</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {/* Quantity */}
              <Box>
                <Typography variant="body2" sx={{ mb: 1, color: theme.colors.font_2 }}>
                  Quantity
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #e0e0e0",
                    borderRadius: "20px",
                    overflow: "hidden",
                    height: "40px",
                  }}
                >
                  <IconButton onClick={handleDecrease} size="small" sx={{ borderRadius: 0, px: 1.5 }}>
                    <RemoveIcon fontSize="small" />
                  </IconButton>
                  <Typography sx={{ px: 2, minWidth: '40px', textAlign: 'center' }}>
                    {quantity}
                  </Typography>
                  <IconButton onClick={handleIncrease} size="small" sx={{ borderRadius: 0, px: 1.5 }}>
                    <AddIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Box>

            {/* Buttons */}
            <Box sx={{ display: "flex", gap: 2, mb: 5 }}>
              <Button
                variant="outlined"
                sx={{
                  flex: 1,
                  borderColor: theme.colors.landingHeading,
                  color: theme.colors.landingHeading,
                  textTransform: "none",
                  borderRadius: "24px",
                  py: 1.5,
                  fontWeight: 600,
                  "&:hover": {
                    borderColor: "#025254",
                    backgroundColor: "transparent",
                  },
                }}
              >
                Add to cart
              </Button>
              <Button
                variant="contained"
                sx={{
                  flex: 1,
                  backgroundColor: theme.colors.landingHeading,
                  color: "white",
                  textTransform: "none",
                  borderRadius: "24px",
                  py: 1.5,
                  fontWeight: 600,
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#025254",
                    boxShadow: "none",
                  },
                }}
              >
                Buy Now
              </Button>
            </Box>

            {/* Product Description */}
            <Box>
              <Typography variant="subtitle1" fontWeight="bold" sx={{ color: theme.colors.fontBlack, mb: 2 }}>
                Product Description
              </Typography>
              <Typography variant="body2" sx={{ color: theme.colors.font_2, lineHeight: 1.8 }}>
                Say goodbye to dry, unruly hair and hello to a naturally radiant mane! 
                Introducing our Argan Oil Shampoo with Natural Oils – the ultimate 
                solution for your hair care concerns. Dive into the extraordinary 
                advantages, natural certifications, and enriching ingredients that 
                elevate this shampoo into a must-have for your hair care regimen.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Adding FAQ and Subscribe like on other pages */}
      <FAQ />
      <Subscribe />
      <Box pb={16}></Box>
      <Footer />
    </>
  );
};

export default ProductDetails;
