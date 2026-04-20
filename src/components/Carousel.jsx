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
    ctaAvailable: true,
    ctaPath: "/aqua",
  },
  {
    icon: Logo.air,
    element: "Air",
    description:
      "Dive into our curated selection of products designed to supercharge your skincare needs.",
    ctaAvailable: true,
    ctaPath: "/air",
  },
  {
    icon: Logo.fire,
    element: "Fire",
    description:
      "Dive into our curated selection of products designed to supercharge your skincare needs.",
    ctaAvailable: true,
    ctaPath: "/air",
  },
  {
    icon: Logo.air,
    element: "Earth",
    description:
      "Dive into our curated selection of products designed to supercharge your skincare needs.",
    ctaAvailable: true,
    ctaPath: "/air",
  },
  {
    icon: Logo.air,
    element: "Sky",
    description:
      "Dive into our curated selection of products designed to supercharge your skincare needs.",
    ctaAvailable: true,
    ctaPath: "/air",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setIndex((prev) => Math.min(prev + 1, EarthElementData.length - 3));
  };

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

      {/* Left Button */}
      <Button
        onClick={handlePrev}
        disabled={index === 0}
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
        }}
      >
        ◀
      </Button>

      {/* Right Button */}
      <Button
        onClick={handleNext}
        disabled={index >= EarthElementData.length - 3}
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
        }}
      >
        ▶
      </Button>
    </Box>
  );
}
