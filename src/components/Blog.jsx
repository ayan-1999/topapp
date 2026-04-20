import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { theme } from "../utils/theme";

const blogData = [
  {
    id: 1,
    date: "Bio Valley • 17 Jan 2023",
    title: "Natural Skincare Range",
    description:
      "All our natural formulas are completely GMO free, we ensure what you get delivered is 100% natural and only goodness.",
  },
  {
    id: 2,
    date: "Bio Valley • 17 Jan 2023",
    title: "Natural Skincare Range",
    description:
      "All our natural formulas are completely GMO free, we ensure what you get delivered is 100% natural and only goodness.",
  },
  {
    id: 3,
    date: "Bio Valley • 17 Jan 2023",
    title: "Natural Skincare Range",
    description:
      "All our natural formulas are completely GMO free, we ensure what you get delivered is 100% natural and only goodness.",
  },
];

const Blog = () => {
  return (
    <Box sx={{ padding: "80px 8%" }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "40px",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: theme.colors.landingHeading,
              fontWeight: 600,
              fontSize: theme.fontSize.sm,
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "12px",
            }}
          >
            BLOGS
          </Typography>
          <Typography
            sx={{
              color: theme.colors.fontBlack,
              fontWeight: 600,
              fontSize: "40px",
            }}
          >
            Read our Latest Blogs
          </Typography>
        </Box>
        <Button
          variant="outlined"
          sx={{
            borderColor: theme.colors.landingHeading,
            color: theme.colors.landingHeading,
            borderRadius: "24px",
            textTransform: "none",
            padding: "8px 32px",
            fontWeight: 500,
            "&:hover": {
              borderColor: theme.colors.landingHeading,
              backgroundColor: "rgba(2, 105, 107, 0.04)",
            },
          }}
        >
          Read More
        </Button>
      </Box>

      {/* Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "32px",
        }}
      >
        {blogData.map((blog) => (
          <Box key={blog.id} sx={{ display: "flex", flexDirection: "column" }}>
            {/* Image Placeholder */}
            <Box
              sx={{
                width: "100%",
                height: "240px",
                backgroundColor: "#e0e0e0",
                borderRadius: "16px",
                marginBottom: "24px",
              }}
            />
            <Typography
              sx={{
                color: theme.colors.font_2,
                fontSize: "14px",
                marginBottom: "12px",
                fontWeight: 500,
              }}
            >
              {blog.date}
            </Typography>
            <Typography
              sx={{
                color: theme.colors.fontBlack,
                fontSize: "24px",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              {blog.title}
            </Typography>
            <Typography
              sx={{
                color: theme.colors.font_2,
                fontSize: "15px",
                lineHeight: 1.6,
                marginBottom: "24px",
              }}
            >
              {blog.description}
            </Typography>
            <Button
              disableRipple
              sx={{
                justifyContent: "flex-start",
                padding: 0,
                color: theme.colors.landingHeading,
                textTransform: "none",
                fontWeight: 600,
                fontSize: "15px",
                "&:hover": {
                  backgroundColor: "transparent",
                  opacity: 0.8,
                },
              }}
              endIcon={<ArrowForwardIcon fontSize="small" />}
            >
              Read More
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Blog;
