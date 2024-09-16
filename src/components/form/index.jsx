import { setEqualValues } from "@/redux/common";
import { Card } from "@mui/material";
import _ from "lodash";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

export default function FormComponent(props) {
  const { initValues, formik, children, isCheckEqual = true } = props;
  const dispatch = useDispatch();

  // check equal form values
  const handleCheckEqualForm = useCallback(
    (values) => {
      if (isCheckEqual) {
        const equal = _.isEqual(initValues, values);
        dispatch(setEqualValues(equal));
      } else dispatch(setEqualValues(true));
    },
    [dispatch, initValues, isCheckEqual]
  );

  useEffect(() => {
    handleCheckEqualForm(formik.values);
  }, [formik.values, handleCheckEqualForm]);

  return (
    <form
      noValidate
      onSubmit={(e) => e.preventDefault()}
      style={{ width: "100%" }}
    >
      <Card sx={{ padding: 2, borderRadius: 0 }}>{children}</Card>
    </form>
  );
}

FormComponent.propTypes = {
  initValues: PropTypes.object,
  formik: PropTypes.object,
  children: PropTypes.node,
  isCheckEqual: PropTypes.bool
};
