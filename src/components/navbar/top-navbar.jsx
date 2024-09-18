import { Link } from "react-router-dom";
import { navbarJson } from "./data/data";
import PropTypes from "prop-types";
import { Box, Grid, Icon, Typography } from "@mui/material";

BoxItem.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object
};

function BoxItem({ children, style }) {
  return (
    <Box
      sx={{
        ...style
      }}
    >
      {children}
    </Box>
  );
  //-
}

export function TopNavbarLeft() {
  return (
    <Grid container rowSpacing={1} columnSpacing={2}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: "113px"
        }}
      >
        {navbarJson.headerLeft.map((item) => (
          <>
            <BoxItem
              style={{
                padding: "8px",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#000",
                marginRight: "20px"
              }}
            >
              <Icon
                component={item.image}
                sx={{ fontSize: 25, color: "#F5993C", marginRight: "5px" }}
              />
              <Typography>{item.title}</Typography>
            </BoxItem>
          </>
        ))}
      </Box>
    </Grid>
  );
}
export function TopNavbarRight() {
  return (
    <Grid container rowSpacing={1} columnSpacing={2}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "113px"
        }}
      >
        {navbarJson.headerRight.map((item) => (
          <>
            <BoxItem
              style={{
                padding: "8px",
                textAlign: "center",
                color: "#000"
              }}
            >
              <Link color="inherit" href={item.url} target="_blank">
                <Icon
                  component={item.image}
                  sx={{ fontSize: 25, color: "#F5993C" }}
                />
              </Link>
            </BoxItem>
          </>
        ))}
      </Box>
    </Grid>
  );
}
