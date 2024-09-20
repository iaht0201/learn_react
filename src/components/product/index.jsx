import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ProductItem from "./product_item";
import PaginationComponent from "../pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, getProductWithCategory } from "@/redux/actions/products";

export default function ProductsCategory() {
  const dispatch = useDispatch();
  const { categories, products, selectedCategory, loading } = useSelector(
    (state) => state.product
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const paginatedProducts = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return products.slice(startIndex, startIndex + itemsPerPage);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  return (
    <Box
      sx={{
        padding: "0 100px",
        display: "flex",
        flexDirection: "column",
        width: "100%"
      }}
    >
      {/* Category */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%"
        }}
      >
        {/* Title Category */}
        <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
          {selectedCategory?.name}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", maxWidth: "80vw" }}>
          {categories.slice(0, 5).map((category) => (
            <Box
              sx={{
                padding: "10px",
                cursor: "pointer",
                borderRight: "3px solid",
                borderColor: "#fff",
                backgroundColor:
                  category.key === selectedCategory?.key
                    ? "#F5993C"
                    : "#F2F2F2",
                color:
                  category.key === selectedCategory?.key ? "white" : "#000",
                fontWeight: "bold"
              }}
              key={category.key}
              onClick={() => dispatch(getProductWithCategory(category.key))}
            >
              {category.name}
            </Box>
          ))}
        </Box>
      </Box>

      <PaginationComponent
        onChange={handlePageChange}
        count={Math.ceil(products.length / itemsPerPage)}
        style={{
          width: "100%",
          margin: "auto"
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "column", marginTop: "40px" }}
        >
          <Grid container rowSpacing={1} columnSpacing={4}>
            {paginatedProducts().map((product, index) => (
              <Grid item xs={3} key={index} style={{ marginBottom: "30px" }}>
                <ProductItem
                  discount={product.discount}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </PaginationComponent>
    </Box>
  );
}
