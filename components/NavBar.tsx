import { Box, Container, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "@/images/logoWhite.png";
import Link from "next/link";
import {
  Search,
  Favorite,
  PersonOutline,
  ShoppingCart,
} from "@mui/icons-material";
const NavBar = () => {
  return (
    <Box component={"header"}>
      <Container maxWidth="xs">
        <Stack direction={"row"}>
          <Image src={logo} alt="tech tunes logo" />
          <Stack direction={"row"} component={"nav"} spacing={2}>
            <Link href={"/"}>Home</Link>
            <Link href={"/shop"}>Shop</Link>
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/contact"}>Contact</Link>
            <Stack direction={"row"} spacing={1}>
              <Search />
              <Favorite />
              <PersonOutline />
              <ShoppingCart />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default NavBar;
