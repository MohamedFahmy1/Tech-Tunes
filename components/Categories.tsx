import { Box, Container } from "@mui/material";
import React from "react";
import section1 from "@/images/section2.png";
import CategoriesFeatures from "./CategoriesFeatures";
import CategoriesCards from "./CategoriesCards";

const Categories = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${section1.src})`,
        backgroundSize: "cover",
      }}
    >
      <Container maxWidth="lg">
        <CategoriesFeatures />
        <CategoriesCards />
      </Container>
    </Box>
  );
};

export default Categories;
