import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import section1 from "@/images/section2.png";
import { LocalShipping } from "@mui/icons-material";

const Categories = () => {
  return (
    <Box
      p={4}
      sx={{
        backgroundImage: `url(${section1.src})`,
        backgroundSize: "cover",
      }}
    >
      <Container maxWidth="lg">
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack direction={"row"} alignItems={"center"} spacing={4}>
            <LocalShipping
              color="primary"
              sx={{
                border: "3px solid blue",
                width: "60px",
                height: "60px",
                padding: "10px",
                borderRadius: "50%",
              }}
            />
            <Box>
              <Typography variant="h6" color="white">
                Free Shipping
              </Typography>
              <Typography variant="subtitle2" color="#ccc">
                On Purchase over $50
              </Typography>
            </Box>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={4}>
            <LocalShipping
              color="primary"
              sx={{
                border: "3px solid blue",
                width: "60px",
                height: "60px",
                padding: "10px",
                borderRadius: "50%",
              }}
            />
            <Box>
              <Typography variant="h6" color="white">
                Money Back
              </Typography>
              <Typography variant="subtitle2" color="#ccc">
                30 Days Back Guaranty
              </Typography>
            </Box>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={4}>
            <LocalShipping
              color="primary"
              sx={{
                border: "3px solid blue",
                width: "60px",
                height: "60px",
                padding: "10px",
                borderRadius: "50%",
              }}
            />
            <Box>
              <Typography variant="h6" color="white">
                Online Support
              </Typography>
              <Typography variant="subtitle2" color="#ccc">
                24/7 Technical Support
              </Typography>
            </Box>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={4}>
            <LocalShipping
              color="primary"
              sx={{
                border: "3px solid blue",
                width: "60px",
                height: "60px",
                padding: "10px",
                borderRadius: "50%",
              }}
            />
            <Box>
              <Typography variant="h6" color="white">
                Secure Payment
              </Typography>
              <Typography variant="subtitle2" color="#ccc">
                All Cards Accepted
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Categories;
