import { connect } from "react-redux";

/**Material-ui */
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import backgroundSvg from "./../assets/images/loginBackground.svg";

/**Form */
import { useForm, Controller } from "react-hook-form";

/**Redux */
import { GET_JWT } from "../redux/index";
import TopHeader from "../components/Auth/TopHeader";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthdate: Date;
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${backgroundSvg})`,
    justifyContent: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  commonFormField: {
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  nameFields: {
    margin: 10,
  },
  birthDayInputs: {
    width: 60,
  },
}));

function Login(props: any) {
  const classes = useStyles();
  const { handleSubmit, errors: fieldsErrors, control } = useForm<Inputs>();

  const onSubmit = (data: any) => {
    props.dispatch({
      type: GET_JWT,
      user: data,
    });
  };

  return (
    <div className={classes.root}>
      {/* <TopHeader /> */}
      <Grid container component="main" className={classes.image}>
        <div className={classes.paper}>
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name="email"
                  as={TextField}
                  variant="filled"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                  autoFocus
                  helperText={
                    fieldsErrors.email ? fieldsErrors.email.message : null
                  }
                  error={
                    (fieldsErrors.email && true) ||
                    (props.auth.error && true) ||
                    false
                  }
                  className={classes.commonFormField}
                  control={control}
                  rules={{
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "invalid email address",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="password"
                  as={TextField}
                  variant="filled"
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  helperText={
                    fieldsErrors.password ? fieldsErrors.password.message : null
                  }
                  error={
                    (fieldsErrors.password && true) ||
                    (props.auth.error && true) ||
                    false
                  }
                  className={classes.commonFormField}
                  control={control}
                  rules={{
                    required: true,
                  }}
                />
              </Grid>
            </Grid>

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log Ip
            </Button>

            <Grid container>
              <Grid item>
                <Link href="#" variant="body2" onClick={() => {}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Login);
