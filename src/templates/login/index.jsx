import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import AuthMainLayout from "@/layouts/auth-main";
import HelpTextComponent from "@/components/help-text";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignInTemplates(props) {
  const { handleSubmit, formik, loading } = props;

  return (
    <AuthMainLayout>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form
        noValidate
        onSubmit={(e) => e.preventDefault()}
        style={{ width: "100%" }}
      >
        <HelpTextComponent
          text={formik.errors.username}
          isShow={Boolean(formik.touched.username && formik.errors.username)}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.username}
          />
        </HelpTextComponent>
        <HelpTextComponent
          text={formik.errors.password}
          isShow={Boolean(formik.touched.password && formik.errors.password)}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </HelpTextComponent>

        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          disableElevation
          fullWidth
          disabled={loading}
          size="large"
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleSubmit}
        >
          Login
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </form>
    </AuthMainLayout>
  );
}

SignInTemplates.propTypes = {
  handleSubmit: PropTypes.func,
  formik: PropTypes.object,
  loading: PropTypes.bool
};
