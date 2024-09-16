import LinearProgress from "@mui/material/LinearProgress";
import { Box, useTheme } from "@mui/material";
import { useSelector } from "react-redux";

// ==============================|| Loader ||============================== //

const LoadingComponent = () => {
  const theme = useTheme();
  const loading = useSelector(state => state.common.loading)
  
  return (
    <Box
      sx={{
        display: loading ? "block" : 'none',
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 2001,
        width: "100%",
        "& > * + *": {
          marginTop: theme.spacing(2)
        },
        height: "100%",
        backgroundColor: theme.palette.common.black,
        opacity: ".5"
      }}
    >
      <LinearProgress color="primary" />
    </Box>
  )
};

export default LoadingComponent;
