import { Box } from "@mui/material";

import { TopNavbarLeft, TopNavbarRight } from "./top-navbar";
import { BottomnNavbar } from "./bottom-navbar";

export default function Navbar() {
  return (
    <Box
      sx={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100px"
      }}
    >
      <Box
        sx={{
          color: "black",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          height: "44px"
        }}
      >
        <TopNavbarLeft />
        <TopNavbarRight />
      </Box>
      <Box
        sx={{
          margin: "0 113px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          height: "1px",
          backgroundColor: "#F5993C"
        }}
      />

      <Box
        sx={{
          color: "black",
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "56px",
          padding: "0 113px",
          backgroundColor: "#F5993C"
        }}
      >
        <BottomnNavbar />
      </Box>
    </Box>
  );
}
