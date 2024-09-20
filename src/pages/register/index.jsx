// import { login } from "@/redux/actions/authen";
import { register } from "@/redux/actions/authen";
import SignUpTemplates from "@/templates/register";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function SignUpPages() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.common.loading);

  // get/set formik
  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().max(255).required("Email is required"),
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
    dispatch(register(payload, navigate));
  };

  return (
    <SignUpTemplates
      handleSubmit={handleSubmit}
      formik={formik}
      loading={loading}
    />
  );
}
