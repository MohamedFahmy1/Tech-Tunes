import { textStyle } from "@/utils/Styles";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import headphone from "@/images/h.png";

export default function Home() {
  return (
    <Box component={"main"}>
      <Container maxWidth={"lg"}>
        <video autoPlay muted loop playsInline className="back-video">
          <source src={require("../images/landing.mp4")} type="video/mp4" />
        </video>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack
            mt={15}
            spacing={4}
            sx={{
              "h1,h2,h3,h4,h5,h6": textStyle,
            }}
          >
            <Typography
              variant="h6"
              color="white"
              fontSize={16}
              fontWeight={"bold"}
              letterSpacing={1}
            >
              WELCOME TO TECH TUNES STORE
            </Typography>
            <Typography
              variant="h3"
              color="white"
              fontSize={30}
              fontWeight={"bold"}
            >
              New Arrival
            </Typography>
            <Typography
              variant="h1"
              color="white"
              fontWeight={900}
              letterSpacing={10}
            >
              A2 SERIES
            </Typography>
            <Typography variant="subtitle1" color="white" fontWeight={"bold"}>
              UP TO 50% OFF
            </Typography>
            <Stack
              direction={"row"}
              spacing={2}
              sx={{
                a: {
                  borderRadius: "20px",
                },
              }}
            >
              <Button
                className="altBtn"
                variant="outlined"
                size="large"
                href="/allProducts"
              >
                Categories
              </Button>
              <Button
                className="mainBtn"
                variant="contained"
                href="/allProducts"
                size="large"
              >
                Shop Now
              </Button>
            </Stack>
          </Stack>
          <Image src={headphone} alt="headphone" height={600} />
        </Stack>
      </Container>
    </Box>
  );
}
