import { ButtonBase, Chip, Link, Stack } from "@mui/material";
import PropTypes from 'prop-types';
import LogoMain from "./main";

export default function LogoComponent({ sx, to }) {
  return (
    <ButtonBase disableRipple component={Link} to={!to ? null : to} sx={sx}>
      <Stack direction="row" spacing={1} alignItems="center">
        <LogoMain />
        <Chip
          label={import.meta.env.VITE_APP_VERSION}
          variant="outlined"
          size="small"
          color="secondary"
          sx={{ mt: 0.5, ml: 1, fontSize: '0.725rem', height: 20, '& .MuiChip-label': { px: 0.5 } }}
        />
      </Stack>
    </ButtonBase>
  )
}
LogoComponent.propTypes = {
  sx: PropTypes.object,
  to: PropTypes.string
};