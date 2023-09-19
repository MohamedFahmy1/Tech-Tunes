"use client";
import NavBar from "@/components/NavBar";
import "./globals.css";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = createTheme({
    palette: {
      secondary: {
        main: "#f7a726",
      },
      success: {
        main: "#047857",
        dark: "#14342b",
      },
      info: {
        main: "#e6f1ee",
        dark: "#c0ddd5",
      },
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
  });
  return (
    <html lang="en">
      <head>
        <title>Tech Tunes</title>
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
