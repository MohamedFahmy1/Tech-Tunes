import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import cat1 from "@/images/Home-Category-1-Party-Speaker.png";
import cat2 from "@/images/Home-Category-2-Smart-Watches.png";
import cat3 from "@/images/Home-Category-3-Smart-Watches.png";
import cat4 from "@/images/Home-Category-4-Smart-Watches.png";

const buttonStyle = {
  borderRadius: "25px",
  color: "black",
  backgroundColor: "white",
  textTransform: "capitalize",
  py: "10px",
  px: "30px",
  my: "40px",
  fontWeight: 600,
  fontSize: "16px",
  "&:hover": {
    backgroundColor: "black",
    color: "white",
  },
};
const CategoriesCards = () => {
  return (
    <Grid container columnGap={6} rowGap={4} py={4} className="catCards">
      <Grid
        item
        xs={12}
        lg={3}
        bgcolor={"#1e5aa4"}
        borderRadius={8}
        py={7}
        px={3}
      >
        <Typography variant="subtitle1" fontSize={18} color="white" pb={"40px"}>
          Blast. Past. Fast
        </Typography>
        <Typography variant="h5" fontWeight={600} color="white">
          Speakers with Signature Sound
        </Typography>
        <Button variant="contained" color="inherit" sx={buttonStyle}>
          Shop By Category
        </Button>
        <Image
          src={cat1}
          alt="head speaker"
          height={138}
          width={290}
          style={{
            left: "-25px",
            bottom: "-160px",
          }}
        />
      </Grid>
      <Grid item xs={12} lg={5}>
        <Stack rowGap={"40px"}>
          <Box
            bgcolor={"#dfdfdf"}
            maxWidth={"100%"}
            borderRadius={8}
            p={4}
            pr={0}
            pb={0}
          >
            <Stack direction={"row"} flexWrap={"wrap"}>
              <Box>
                <Typography
                  variant="subtitle1"
                  fontSize={18}
                  color="initial"
                  pb={"20px"}
                >
                  Smart Watches
                </Typography>
                <Typography
                  variant="h5"
                  fontSize={"26px"}
                  fontWeight={600}
                  color="initial"
                >
                  Best Smart Watches
                  <br /> for Men & Women
                </Typography>
                <Button variant="contained" color="inherit" sx={buttonStyle}>
                  Shop By Category
                </Button>
              </Box>
              <Image
                src={cat2}
                alt="smart watch"
                width={170}
                height={192}
                style={{
                  right: -40,
                  bottom: -75,
                }}
              />
            </Stack>
          </Box>
          <Box
            bgcolor={"#609386"}
            maxWidth={"100%"}
            borderRadius={8}
            p={4}
            pr={0}
            pb={0}
          >
            <Stack direction={"row"} flexWrap={{ xs: "wrap", lg: "nowrap" }}>
              <Box minWidth={"291px"}>
                <Typography
                  variant="subtitle1"
                  fontSize={18}
                  color="white"
                  pb={"20px"}
                >
                  Wireless Headphones
                </Typography>
                <Typography
                  variant="h5"
                  fontSize={"26px"}
                  fontWeight={600}
                  color="white"
                >
                  Own Every Match with
                  <br /> Gaming Headphones
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    ...buttonStyle,
                    color: "white",
                    background: "transparent",
                    border: "3px solid white",
                    "&:hover": {
                      background: "black",
                      color: "white",
                      border: "3px solid black",
                    },
                  }}
                >
                  Shop By Category
                </Button>
              </Box>
              <Image
                src={cat3}
                alt="smart watch"
                width={220}
                height={220}
                style={{
                  right: -10,
                  bottom: -75,
                }}
              />
            </Stack>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={12} lg={3} bgcolor={"#000"} borderRadius={8} py={7} px={3}>
        <Typography variant="subtitle1" fontSize={18} color="white" pb={"40px"}>
          Earbuds.
        </Typography>
        <Typography variant="h5" fontWeight={600} color="white">
          Top Rated & Best Earbuds
        </Typography>
        <Button
          variant="contained"
          color="inherit"
          sx={{
            ...buttonStyle,
            backgroundColor: "#d4e126",
            "&:hover": {
              backgroundColor: "white",
              color: "black",
            },
          }}
        >
          Shop By Category
        </Button>
        <Image
          src={cat4}
          alt="head speaker"
          width={220}
          height={205}
          style={{
            bottom: "-91px",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default CategoriesCards;
