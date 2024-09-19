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
    <Box sx={{ ...style, padding: "10px", background: "#F5F5F5" }}>
      <img src={`${image}?h=120&fit=crop&auto=format`} alt={image} />
      <Typography
        sx={{
          color: "#121212",
          fontSize: "20px",
          fontWeight: "600"
        }}
      >
        {title}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Box>
          <Typography
            sx={{
              color: "#121212",
              fontSize: "20px",
              fontWeight: "600"
            }}
          >
            {price}
          </Typography>
          <Typography
            sx={{
              color: "#121212",
              fontSize: "20px",
              fontWeight: "600"
            }}
          >
            {price * (1 - discount)}
          </Typography>
        </Box>
        <Icon
          component={ShoppingCartIcon}
          sx={{
            fontSize: 12,
            color: "#9e4444",
            fontWeight: "bold",
            marginRight: "0"
          }}
        />
      </Box>
    </Box>
  );
}
