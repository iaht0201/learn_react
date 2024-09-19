import Navbar from "@/components/navbar";
import { CssBaseline, Grid } from "@mui/material";
import PropTypes from "prop-types"; // Import PropTypes

export default function HomeMainLayout({ children }) {
  return (
    <>
      <CssBaseline />
      <Grid
        container
        component="main"
        sx={{  background: "#fff", maxWidth: "100%" }}
      >
        <Navbar />
        {children}
      </Grid>
    </>
  );
}

HomeMainLayout.propTypes = {
  children: PropTypes.node
};
