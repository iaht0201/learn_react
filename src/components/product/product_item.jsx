import { Box, Icon, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";
ProductItem.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number,
  title: PropTypes.string.isRequired,
  style: PropTypes.object
};

export default function ProductItem({ image, price, discount, title, style }) {
  return (
    <Box sx={{ ...style }}>
      <Box sx={{ padding: "10px 10px 0 10px", background: "#F5F5F5" }}>
        <img src={`${image}?h=120&fit=crop&auto=format`} alt={image} />
      </Box>
      <Typography
        sx={{
          color: "#505050",
          fontSize: "20px",
          fontWeight: "600",
          marginTop: "10px"
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "5px"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyItems: "flex-start"
          }}
        >
          {discount === 0 ? (
            <Box> </Box>
          ) : (
            <Typography
              sx={{
                color: "#9C9C9C",
                fontSize: "16px",
                fontWeight: "600",
                textDecorationLine: "line-through",
                marginRight: "10px"
              }}
            >
              ${price}
            </Typography>
          )}
          <Typography
            sx={{
              color: "#121212",
              fontSize: "18px",
              fontWeight: "600"
            }}
          >
            ${price * (1 - discount / 100)}
          </Typography>
        </Box>
        <Icon
          component={ShoppingCartIcon}
          sx={{
            padding: "5px",
            borderRadius: "5px",
            backgroundColor: "#F5F5F5",
            fontSize: 35,
            color: "#F5993C",
            fontWeight: "bold",
            marginRight: "0"
          }}
        />
      </Box>
    </Box>
  );
}
