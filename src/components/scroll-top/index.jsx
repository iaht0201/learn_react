import NorthIcon from "@mui/icons-material/North";
import { Box, Fab, Fade, useScrollTrigger } from "@mui/material";
import PropTypes from "prop-types";

export default function ScrollTopComponent(props) {
  const { window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#root"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center"
      });
    }
  };

  return (
    <Fade in={trigger} style={{ zIndex: 99999 }}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        <Fab size="small" color="primary" aria-label="scroll back to top">
          <NorthIcon />
        </Fab>
      </Box>
    </Fade>
  );
}

ScrollTopComponent.propTypes = {
  window: PropTypes.func,
};
