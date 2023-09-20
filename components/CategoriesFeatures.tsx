import { LocalShipping } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const iconStyle = {
  border: "3px solid #1976d2",
  width: "60px",
  height: "60px",
  padding: "10px",
  borderRadius: "50%",
};

const CategoriesFeatures = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={{ xs: "center", lg: "space-between" }}
      columnGap={4}
      alignItems={"center"}
      rowGap={4}
      py={12}
      flexWrap={"wrap"}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={4}>
        <LocalShipping color="primary" sx={iconStyle} />
        <Box>
          <Typography variant="h6" color="white">
            Free Shipping
          </Typography>
          <Typography
            variant="subtitle2"
            fontWeight={300}
            fontSize={14}
            color="#ccc"
          >
            On Purchase over $50
          </Typography>
        </Box>
      </Stack>
      <Stack direction={"row"} alignItems={"center"} spacing={4}>
        <LocalShipping color="primary" sx={iconStyle} />
        <Box>
          <Typography variant="h6" color="white">
            Money Back
          </Typography>
          <Typography
            variant="subtitle2"
            fontWeight={300}
            fontSize={14}
            color="#ccc"
          >
            30 Days Back Guaranty
          </Typography>
        </Box>
      </Stack>
      <Stack direction={"row"} alignItems={"center"} spacing={4}>
        <LocalShipping color="primary" sx={iconStyle} />
        <Box>
          <Typography variant="h6" color="white">
            Online Support
          </Typography>
          <Typography
            variant="subtitle2"
            fontWeight={300}
            fontSize={14}
            color="#ccc"
          >
            24/7 Technical Support
          </Typography>
        </Box>
      </Stack>
      <Stack direction={"row"} alignItems={"center"} spacing={4}>
        <LocalShipping color="primary" sx={iconStyle} />
        <Box>
          <Typography variant="h6" color="white">
            Secure Payment
          </Typography>
          <Typography
            variant="subtitle2"
            fontWeight={300}
            fontSize={14}
            color="#ccc"
          >
            All Cards Accepted
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default CategoriesFeatures;
