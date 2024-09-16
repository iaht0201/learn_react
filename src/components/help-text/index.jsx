import { FormHelperText } from "@mui/material";
import { Fragment } from "react";
import PropTypes from "prop-types";
export default function HelpTextComponent(props) {
  const { error = true, text = "", children, isShow = false } = props;
  return (
    <Fragment>
      {children}
      {isShow && (
        <FormHelperText error={error} sx={{ mt: "-8px", ml: "4px" }}>
          {text}
        </FormHelperText>
      )}
    </Fragment>
  );
}

HelpTextComponent.propTypes = {
  error: PropTypes.bool,
  text: PropTypes.string,
  children: PropTypes.node,
  isShow: PropTypes.bool
};
