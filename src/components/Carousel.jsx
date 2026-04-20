import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { Logo } from "../assets/ImageLinks";
import NatureElementCard from "./NatureElementCard";

const EarthElementData = [
  {
    icon: Logo.water,
    element: "Aqua",
    description:
      "Dive into our curated selection of products designed to supercharge your skincare needs.",
    ctaText: "Explore",
    ctaAvailable: true,
    ctaPath: "/aqua",
  },
  {
    icon: Logo.air,
    element: "Air",
    description:
      "Elevate your beauty routine with our Air-inspired collection, promoting a breath of fresh, revitalizing ingredients.",
    ctaText: "Coming Soon",
    ctaAvailable: false,
    ctaPath: "/air",
  },
  {
    icon: Logo.fire,
    element: "Fire",
    description:
      "Ignite your radiance with our Fire-themed products, delivering a powerful blend for a vibrant and glowing skincare experience.",
    ctaText: "Coming Soon",
    ctaAvailable: false,
    ctaPath: "/fire",
  },
  {
    icon: Logo.earth,
    element: "Earth",
    description:
      "Ground your beauty routine with our Earth-inspired collection.",
    ctaText: "Coming Soon",
    ctaAvailable: false,
    ctaPath: "/earth",
  },
  {
    icon: Logo.sky,
    element: "Sky",
    description:
      "Elevate your skincare experience with our Sky-inspired collection.",
    ctaText: "Coming Soon",
    ctaAvailable: false,
    ctaPath: "/sky",
  },
];

export default function Carousel({ index }) {
  return (
    <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
      {/* Slider */}
      <Box
        sx={{
          display: "flex",
          transition: "transform 0.4s ease",
          transform: `translateX(-${index * (100 / 3)}%)`,
        }}
      >
        {EarthElementData.map((item, i) => (
          <Box
            key={i}
            sx={{
              minWidth: "33.33%",
              p: 2,
            }}
          >
            <NatureElementCard data={item} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
