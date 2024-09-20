import { setAuthLogin, setAuthToken, setAuthUser } from "@/redux/auth";
import { setLoading } from "@/redux/common";
import SignInTemplates from "@/templates/login";
import { METHOD_POST, STATUS_200, VITE_REACT_APP_API } from "@/utils/constants";
import { postPutData } from "@/utils/request";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

export default function SignInPages() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.common.loading);

  // get/set formik
  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        // .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string().max(255).required("Password is required")
    })
  });

  // submit form
  const handleSubmit = () => {
    console.log(12312);
    dispatch(setLoading(true));
    postPutData({
      url: VITE_REACT_APP_API + "/account/login",
      method: METHOD_POST,
      payload: {
        username: formik.values.username,
        password: formik.values.password
      },
      onSuccess: (res) => {
        if (res && res.statusCode === STATUS_200) {
          dispatch(setAuthUser());
          dispatch(setAuthLogin(true));
          dispatch(setAuthToken());
        }
        dispatch(setLoading(false));
      }
    });
  };

  return (
    <SignInTemplates
      handleSubmit={handleSubmit}
      formik={formik}
      loading={loading}
    />
  );
}
