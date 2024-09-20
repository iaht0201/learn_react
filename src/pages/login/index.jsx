// import { login } from "@/redux/actions/authen";
import { login } from "@/redux/actions/authen";
import SignInTemplates from "@/templates/login";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function SignInPages() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.common.loading);
  const navigate = useNavigate();
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
    let payload = {
      username: formik.values.username,
      password: formik.values.password
    };
    console.log(payload);
    dispatch(login(payload, navigate));
  };

  return (
    <SignInTemplates
      handleSubmit={handleSubmit}
      formik={formik}
      loading={loading}
    />
  );
}
