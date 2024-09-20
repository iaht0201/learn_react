import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { productCategories } from "./data/data";
import ProductItem from "./product_item";

export default function ProductsCategory() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    setLoading(true);
    const loadProducts = () => {
      const data = productCategories;
      setCategories(data.categories);
      const listCategory = {};
      data.categories.forEach((category) => {
        listCategory[category.key] = data[category.key];
      });
      setLoading(false);
      if (data.categories.length > 0) {
        setProducts(productCategories[data.categories[0].key]);
        setSelectedCategory(data.categories[0]);
      }
    };
    loadProducts();
  }, []);
  const handleCategoryClick = (key) => {
    setLoading(true);
    setProducts(productCategories[key]);
    const category = categories.find((c) => c.key === key);
    console.log(`category ${category}`);
    setSelectedCategory(category);
    setLoading(false);

    console.log("List product changed:", products);
  };

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
      {/* Category  */}
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
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "bold"
          }}
        >
          {selectedCategory.name}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", maxWidth: "80vw" }}>
          {" "}
          {categories.slice(0, 5).map((category, index) => (
            <Box
              sx={{
                padding: "10px",
                cursor: "pointer",
                borderRight: "3px solid",
                borderColor: "#fff",
                // borderRadius: "5px",
                backgroundColor:
                  category.key === selectedCategory.key ? "#F5993C" : "#F2F2F2",
                color: category.key === selectedCategory.key ? "white" : "#000",
                fontWeight: "bold"
              }}
              key={index}
              onClick={() => handleCategoryClick(category.key)}
            >
              {category.name}
            </Box>
          ))}
        </Box>
      </Box>

      {/*  */}
      <Box sx={{ display: "flex", flexDirection: "row", marginTop: "40px" }}>
        <Grid container rowSpacing={1} columnSpacing={4}>
          {products.map((product, index) => (
            <Grid item xs={3} key={index}>
              <ProductItem
                discount={product.discount}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            </Grid>
          ))}{" "}
        </Grid>
      </Box>
    </Box>
  );
}
