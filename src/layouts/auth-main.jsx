import LogoComponent from "@/components/logo";
import { Avatar, Box, CssBaseline, Grid, Paper } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PropTypes from "prop-types";

export default function AuthMainLayout({ children }) {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />

      <Box sx={{ position: "absolute", top: "20px", left: "20px" }}>
        <LogoComponent />
      </Box>

      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            'url("https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/26/1233821/Giai-Nhi-1--Nang-Tre.jpg")',

          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "left"
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          {children}
        </Box>
      </Grid>
    </Grid>
  );
}

AuthMainLayout.propTypes = {
  children: PropTypes.node
};
