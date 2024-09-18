import {
  Box,
  Button,
  Grid,
  Icon,
  Menu,
  MenuItem,
  Typography
} from "@mui/material";
import LogoMain from "../logo/main";
import { navbarJson } from "./data/data";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon
} from "@mui/icons-material";

export function BottomnNavbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  //   const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //   const handleSelected = (index) => {
  //     console.log(index);
  //     setSelectedItem(index);
  //   };

  const handleClose = () => {
    setAnchorEl(null);
  };

  ItemBottomNavbar.propTypes = {
    item: PropTypes.node,
    index: PropTypes.node
  };
  function ItemBottomNavbar({ item }) {
    return (
      <Link color="inherit" href={item.route}>
        <Typography
          key={item.id}
          sx={{
            minWidth: 120,
            color: "#fff",
            fontWeight: "bold"
          }}
        >
          {item.name}
        </Typography>
      </Link>
    );
  }
  return (
    <Grid container rowSpacing={1} columnSpacing={3}>
      <Grid item xs={3}>
        <LogoMain />
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "space-between",
            height: "100%"
          }}
        >
          {navbarJson.bottomNavbar.map((item, index) =>
            item.type === "list" ? (
              <div key={`list-${index}`}>
                {" "}
                <Typography
                  onClick={handleClick}
                  sx={{
                    cursor: "pointer",
                    color: "#fff",
                    fontWeight: "bold",
                    minWidth: 100,
                    alignItems: "center"
                  }}
                >
                  {item.name}
                  <Icon
                    component={
                      anchorEl ? KeyboardArrowDownIcon : KeyboardArrowUpIcon
                    }
                    sx={{
                      fontSize: 12,
                      color: "#fff",
                      fontWeight: "bold",
                      marginRight: "0"
                    }}
                  />
                </Typography>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  sx={{
                    ".css-6hp17o-MuiList-root-MuiMenu-list": {
                      background: "#F5993C",
                      color: "#fff"
                    }
                  }}
                >
                  {item.child.map((child, childIndex) => (
                    <MenuItem
                      key={`child-${index}-${childIndex}`}
                      onClick={handleClose}
                    >
                      <ItemBottomNavbar item={child} index={index} />
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            ) : (
              <ItemBottomNavbar
                key={`item-${index}`}
                item={item}
                index={index}
              />
            )
          )}
        </Box>
      </Grid>

      <Grid item xs={3}>
        <Box
          container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end"
          }}
        >
          <Button
            variant="text"
            size="small"
            sx={{
              borderColor: "transparent",
              color: "#fff",
              background: "transparent",
              borderRadius: "15px",
              padding: " 0 30px",
              height: "10px",
              "&:hover": {
                border: "none",
                color: "#fff",
                background: "transparent"
              },
              "&:focus": {
                outline: "none" // Loại bỏ outline khi focus
              }
            }}
          >
            Sign In
          </Button>

          <Button
            variant="text"
            size="small"
            sx={{
              borderColor: "transparent",
              color: "#F5993C",
              background: "#fff",
              borderRadius: "15px",
              padding: " 0 30px",
              height: "10px",
              "&:hover": {
                border: "none",
                color: "#fff"
              },
              "&:focus": {
                outline: "none" // Loại bỏ outline khi focus
              }
            }}
          >
            Sign-up
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
