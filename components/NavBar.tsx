import { Box, Container, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "@/images/logoGrad.png";
import Link from "next/link";
import {
  SearchOutlined,
  FavoriteOutlined,
  PersonOutline,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { textStyle } from "@/utils/Styles";
const NavBar = () => {
  return (
    <Box
      component={"header"}
      bgcolor={"transparent"}
      p={2}
      position={"sticky"}
      left={0}
      top={0}
      zIndex={50}
      width={"100%"}
    >
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Image src={logo} alt="tech tunes logo" height={70} />
          <Stack
            direction={"row"}
            component={"nav"}
            spacing={4}
            fontSize={"18px"}
            sx={{
              a: {
                color: "white",
                "&:hover": textStyle,
              },
            }}
          >
            <Link href={"/"}>Home</Link>
            <Link href={"/shop"}>Shop</Link>
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/contact"}>Contact</Link>
            <Stack
              direction={"row"}
              spacing={2}
              sx={{
                svg: {
                  cursor: "pointer",
                  width: "30px",
                  height: "30px",
                  color: "white",
                  "&:hover": {
                    color: "#b573f8",
                  },
                },
              }}
            >
              <SearchOutlined />
              <FavoriteOutlined />
              <PersonOutline />
              <ShoppingCartOutlined />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default NavBar;
