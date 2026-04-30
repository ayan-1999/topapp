import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Slider,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Offers from "../../components/Offers";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { theme } from "../../utils/theme";
import FAQ from "../../components/FAQ";
import Subscribe from "../../components/Subscribe";

const products = [
  { id: 1, name: "Dead Sea Shampoo", price: "699.00", reviews: 4, rating: 4 },
  { id: 2, name: "Dead Sea Shampoo", price: "699.00", reviews: 4, rating: 4 },
  { id: 3, name: "Dead Sea Shampoo", price: "699.00", reviews: 4, rating: 4 },
  { id: 4, name: "Dead Sea Shampoo", price: "699.00", reviews: 4, rating: 4 },
  { id: 5, name: "Dead Sea Shampoo", price: "699.00", reviews: 4, rating: 4 },
  { id: 6, name: "Dead Sea Shampoo", price: "699.00", reviews: 4, rating: 4 },
];

const Aqua = () => {
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <>
      <Offers />
      <Nav />
      <Box sx={{ px: { xs: 2, md: 12 }, py: 4 }}>
        {/* Breadcrumb */}
        <Typography variant="body2" sx={{ color: theme.colors.font_2, mb: 4 }}>
          Home /{" "}
          <span style={{ color: theme.colors.landingHeading }}>Aqua</span>
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 6,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* Sidebar */}
          <Box sx={{ width: { xs: "100%", md: "250px" }, flexShrink: 0 }}>
            {/* Sort By */}
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{
                color: theme.colors.font_2,
                mb: 2,
                textTransform: "uppercase",
              }}
            >
              Sort By
            </Typography>
            <FormGroup sx={{ mb: 4 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked
                    sx={{
                      color: theme.colors.landingHeading,
                      "&.Mui-checked": { color: theme.colors.landingHeading },
                    }}
                  />
                }
                label={
                  <Typography variant="body2" color={theme.colors.font}>
                    Best Sellers
                  </Typography>
                }
              />
              <FormControlLabel
                control={<Checkbox sx={{ color: theme.colors.font_2 }} />}
                label={
                  <Typography variant="body2" color={theme.colors.font}>
                    New Launches
                  </Typography>
                }
              />
              <FormControlLabel
                control={<Checkbox sx={{ color: theme.colors.font_2 }} />}
                label={
                  <Typography variant="body2" color={theme.colors.font}>
                    Price : High to Low
                  </Typography>
                }
              />
              <FormControlLabel
                control={<Checkbox sx={{ color: theme.colors.font_2 }} />}
                label={
                  <Typography variant="body2" color={theme.colors.font}>
                    Price : Low to High
                  </Typography>
                }
              />
            </FormGroup>

            {/* Product Type */}
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{
                color: theme.colors.font_2,
                mb: 2,
                textTransform: "uppercase",
              }}
            >
              Product Type
            </Typography>

            {/* Shampoo Accordion */}
            <Accordion
              defaultExpanded
              elevation={0}
              disableGutters
              sx={{
                "&:before": { display: "none" },
                borderBottom: `1px solid #e0e0e0`,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  px: 0,
                  minHeight: "48px",
                  "& .MuiAccordionSummary-content": { my: 0 },
                }}
              >
                <Typography
                  variant="body2"
                  fontWeight="bold"
                  color={theme.colors.font}
                >
                  Shampoo
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 0, pt: 0, pb: 1 }}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked
                        sx={{
                          color: theme.colors.landingHeading,
                          "&.Mui-checked": {
                            color: theme.colors.landingHeading,
                          },
                        }}
                      />
                    }
                    label={
                      <Typography variant="body2" color={theme.colors.font}>
                        Dead Sea
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox sx={{ color: theme.colors.font_2 }} />}
                    label={
                      <Typography variant="body2" color={theme.colors.font}>
                        Cedar Wood
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox sx={{ color: theme.colors.font_2 }} />}
                    label={
                      <Typography variant="body2" color={theme.colors.font}>
                        Argan Oil
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox sx={{ color: theme.colors.font_2 }} />}
                    label={
                      <Typography variant="body2" color={theme.colors.font}>
                        Keratin
                      </Typography>
                    }
                  />
                </FormGroup>
              </AccordionDetails>
            </Accordion>

            {/* Face Wash Accordion */}
            <Accordion
              defaultExpanded
              elevation={0}
              disableGutters
              sx={{
                "&:before": { display: "none" },
                borderBottom: `1px solid #e0e0e0`,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  px: 0,
                  minHeight: "48px",
                  "& .MuiAccordionSummary-content": { my: 0 },
                }}
              >
                <Typography
                  variant="body2"
                  fontWeight="bold"
                  color={theme.colors.font}
                >
                  Face Wash
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 0, pt: 0, pb: 1 }}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox sx={{ color: theme.colors.font_2 }} />}
                    label={
                      <Typography variant="body2" color={theme.colors.font}>
                        Lavender
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox sx={{ color: theme.colors.font_2 }} />}
                    label={
                      <Typography variant="body2" color={theme.colors.font}>
                        Grape Fruit & Vetiver
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox sx={{ color: theme.colors.font_2 }} />}
                    label={
                      <Typography variant="body2" color={theme.colors.font}>
                        Rose & Sea Salt
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox sx={{ color: theme.colors.font_2 }} />}
                    label={
                      <Typography variant="body2" color={theme.colors.font}>
                        Ylang Ylang
                      </Typography>
                    }
                  />
                </FormGroup>
              </AccordionDetails>
            </Accordion>

            {/* Body Wash Accordion */}
            <Accordion
              defaultExpanded
              elevation={0}
              disableGutters
              sx={{
                "&:before": { display: "none" },
                borderBottom: `1px solid #e0e0e0`,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  px: 0,
                  minHeight: "48px",
                  "& .MuiAccordionSummary-content": { my: 0 },
                }}
              >
                <Typography
                  variant="body2"
                  fontWeight="bold"
                  color={theme.colors.font}
                >
                  Body Wash
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 0, pt: 0, pb: 1 }}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox sx={{ color: theme.colors.font_2 }} />}
                    label={
                      <Typography variant="body2" color={theme.colors.font}>
                        Wine
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox sx={{ color: theme.colors.font_2 }} />}
                    label={
                      <Typography variant="body2" color={theme.colors.font}>
                        Neem Sandel
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox sx={{ color: theme.colors.font_2 }} />}
                    label={
                      <Typography variant="body2" color={theme.colors.font}>
                        Micro Crestline Rice
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox sx={{ color: theme.colors.font_2 }} />}
                    label={
                      <Typography variant="body2" color={theme.colors.font}>
                        Sugar & Strawberry
                      </Typography>
                    }
                  />
                </FormGroup>
              </AccordionDetails>
            </Accordion>

            {/* Price */}
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{
                color: theme.colors.font_2,
                mb: 2,
                mt: 4,
                textTransform: "uppercase",
              }}
            >
              Price
            </Typography>
            <Box sx={{ px: 1 }}>
              <Slider
                value={priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                min={0}
                max={5000}
                sx={{
                  color: theme.colors.landingHeading,
                  "& .MuiSlider-thumb": {
                    backgroundColor: "white",
                    border: `2px solid ${theme.colors.landingHeading}`,
                  },
                  "& .MuiSlider-track": {
                    backgroundColor: "#e0e0e0",
                    border: "none",
                  },
                  "& .MuiSlider-rail": {
                    backgroundColor: "#e0e0e0",
                  },
                }}
              />
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
              >
                <Box
                  sx={{
                    border: `1px solid #e0e0e0`,
                    borderRadius: 1,
                    p: 1,
                    width: "45%",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="body2">₹ {priceRange[0]}</Typography>
                </Box>
                <Box
                  sx={{
                    border: `1px solid #e0e0e0`,
                    borderRadius: 1,
                    p: 1,
                    width: "45%",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="body2">₹ {priceRange[1]}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Product Grid */}
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
              {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <Box>
                    {/* Dummy Product Image Placeholder */}
                    <Box
                      onClick={() => navigate(`/product/${product.id}`)}
                      sx={{
                        width: "100%",
                        height: "350px",
                        backgroundColor: "#f5f5f5",
                        borderRadius: "16px",
                        mb: 2,
                        cursor: "pointer",
                      }}
                    />

                    {/* Product Details */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 1,
                      }}
                    >
                      <Typography
                        onClick={() => navigate(`/product/${product.id}`)}
                        variant="subtitle1"
                        fontWeight="bold"
                        color={theme.colors.fontBlack}
                        sx={{ cursor: "pointer" }}
                      >
                        {product.name}
                      </Typography>
                      <IconButton size="small">
                        <FavoriteBorderIcon
                          fontSize="small"
                          sx={{ color: theme.colors.fontBlack }}
                        />
                      </IconButton>
                    </Box>

                    {/* Ratings */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 1,
                        gap: 0.5,
                      }}
                    >
                      {[1, 2, 3, 4, 5].map((star) =>
                        star <= product.rating ? (
                          <StarIcon
                            key={star}
                            fontSize="small"
                            sx={{ color: theme.colors.yellow || "#FFBD38" }}
                          />
                        ) : (
                          <StarBorderIcon
                            key={star}
                            fontSize="small"
                            sx={{ color: theme.colors.yellow || "#FFBD38" }}
                          />
                        ),
                      )}
                      <Typography
                        variant="body2"
                        sx={{ color: theme.colors.font_2, ml: 1 }}
                      >
                        {product.reviews} Reviews
                      </Typography>
                    </Box>

                    {/* Price */}
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      color={theme.colors.fontBlack}
                      sx={{ mb: 2 }}
                    >
                      ₹ {product.price}
                    </Typography>

                    {/* Buttons */}
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Button
                        onClick={() => navigate(`/product/${product.id}`)}
                        variant="contained"
                        fullWidth
                        sx={{
                          bgcolor: theme.colors.landingHeading,
                          color: "white",
                          textTransform: "none",
                          borderRadius: "20px",
                          boxShadow: "none",
                          "&:hover": {
                            bgcolor: "#025254",
                            boxShadow: "none",
                          },
                        }}
                      >
                        Add To Cart
                      </Button>
                      <Button
                        onClick={() => navigate(`/product/${product.id}`)}
                        variant="outlined"
                        fullWidth
                        sx={{
                          borderColor: theme.colors.landingHeading,
                          color: theme.colors.landingHeading,
                          textTransform: "none",
                          borderRadius: "20px",
                          "&:hover": {
                            borderColor: "#025254",
                            bgcolor: "transparent",
                          },
                        }}
                      >
                        Buy Now
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
      <FAQ />
      <Subscribe />
      <Box pb={16}></Box>
      <Footer />
    </>
  );
};

export default Aqua;
