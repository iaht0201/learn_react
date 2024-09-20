import { productCategories } from "@/components/product/data/data.js";
import {
  setCategories,
  setLoading,
  setProducts,
  setSelectedCategory
} from "../slice/product.js";
// import { setLoading } from "../common/index.js";
export const fetchProduct = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch(setCategories(productCategories.categories));
    dispatch(
      setProducts(productCategories[productCategories.categories[0].key])
    );

    if (productCategories.categories.length > 0) {
      dispatch(
        setProducts(productCategories[productCategories.categories[0].key])
      );
      dispatch(setSelectedCategory(productCategories.categories[0]));
    } else {
      dispatch(setProducts([]));
      dispatch(setSelectedCategory(null));
    }
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error);
    // dispatch(
    //   setError("An error occurred during login. Please try again later.")
    // );
  }
};
export const getProductWithCategory = (key) => async (dispatch) => {
  try {
    dispatch(setProducts(productCategories[key]));
    const category = productCategories.categories.find((c) => c.key === key);
    dispatch(setSelectedCategory(category));
  } catch (error) {
    console.log(error);
    dispatch(setProducts([]));
  }
};
