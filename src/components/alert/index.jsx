import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "@/redux/common";
import { useCallback, useEffect, useState } from "react";

export default function AlertComponent(props) {
  const { vertical = "top", horizontal = "right", variant = "filled" } = props;
  const [currentCount, setCurrentCount] = useState(5);
  const alert = useSelector((state) => state.common.alert);
  const dispatch = useDispatch();

  const timer = useCallback(
    () => setCurrentCount(currentCount - 1),
    [currentCount]
  );

  // close
  const handleClose = useCallback(() => {
    dispatch(
      setAlert({
        open: false,
        message: alert.message,
        type: alert.type
      })
    );
  }, [alert.message, alert.type, dispatch]);

  useEffect(() => {
    if (currentCount <= 0) {
      handleClose();
      setCurrentCount(5);
      return;
    }
    const id = setInterval(timer, 1000);

    return () => clearInterval(id);
  }, [currentCount, handleClose, timer]);

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <Snackbar
      open={alert.open}
      autoHideDuration={5000}
      action={action}
      anchorOrigin={{ vertical, horizontal }}
    >
      <Alert
        onClose={handleClose}
        variant={variant}
        severity={alert.type}
        sx={{ width: "100%" }}
      >
        {alert.message}
      </Alert>
    </Snackbar>
  );
}

AlertComponent.propTypes = {
  vertical: PropTypes.string,
  horizontal: PropTypes.string,
  variant: PropTypes.string
};
