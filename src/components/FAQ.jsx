import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { theme } from "../utils/theme";

const faqs = [
  "What is organic skincare ?",
  "What is organic skincare ?",
  "What is organic skincare ?",
  "What is organic skincare ?",
  "What is organic skincare ?",
  "What is organic skincare ?",
];

const FAQ = () => {
  return (
    <Box sx={{ padding: "80px 8%", backgroundColor: theme.colors.white }}>
      <Typography
        sx={{
          color: theme.colors.fontBlack,
          fontWeight: 600,
          fontSize: "40px",
          textAlign: "center",
          marginBottom: "64px",
        }}
      >
        Frequently Asked Question's
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "24px",
          alignItems: "flex-start",
        }}
      >
        {/* Left Column */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
          {faqs.slice(0, Math.ceil(faqs.length / 2)).map((question, index) => (
            <Accordion
              key={`left-${index}`}
              disableGutters
              elevation={0}
              sx={{
                border: "1px solid #eaeaea",
                borderRadius: "8px",
                background: "transparent",
                "&:before": {
                  display: "none",
                },
                "&.Mui-expanded": {
                  margin: 0,
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: theme.colors.font_2 }} />}
                sx={{ padding: "12px 24px" }}
              >
                <Typography
                  sx={{
                    color: theme.colors.font_2,
                    fontWeight: 500,
                    fontSize: "16px",
                  }}
                >
                  {question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "0 24px 24px" }}>
                <Typography sx={{ color: theme.colors.font_2, lineHeight: 1.6 }}>
                  Organic skincare products are made with plant-based ingredients
                  grown without the use of artificial chemicals, pesticides, or fertilizers.
                  They are designed to nourish the skin naturally.
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Right Column */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
          {faqs.slice(Math.ceil(faqs.length / 2)).map((question, index) => (
            <Accordion
              key={`right-${index}`}
              disableGutters
              elevation={0}
              sx={{
                border: "1px solid #eaeaea",
                borderRadius: "8px",
                background: "transparent",
                "&:before": {
                  display: "none",
                },
                "&.Mui-expanded": {
                  margin: 0,
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: theme.colors.font_2 }} />}
                sx={{ padding: "12px 24px" }}
              >
                <Typography
                  sx={{
                    color: theme.colors.font_2,
                    fontWeight: 500,
                    fontSize: "16px",
                  }}
                >
                  {question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "0 24px 24px" }}>
                <Typography sx={{ color: theme.colors.font_2, lineHeight: 1.6 }}>
                  Organic skincare products are made with plant-based ingredients
                  grown without the use of artificial chemicals, pesticides, or fertilizers.
                  They are designed to nourish the skin naturally.
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FAQ;
