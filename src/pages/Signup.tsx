import React from "react";
import { connect } from "react-redux";
import TopHeader from "../components/Auth/TopHeader";

/**Material-ui */
import { Button, TextField, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import backgroundSvg from "./../assets/images/loginBackground.svg";

/**Form */
import { useForm, Controller } from "react-hook-form";

/**Redux */
import { GET_JWT } from "../redux/index";
import { REGISTER } from "./../redux/auth/actions";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthday: Date;
};

const useStyles = makeStyles((theme) => ({
  root: {},
  image: {
    backgroundImage: `url(${backgroundSvg})`,
    justifyContent: "center",
    height: "100vh",
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

function Signup(props: any) {
  const classes = useStyles();
  const { handleSubmit, errors: fieldsErrors, control } = useForm<Inputs>();
  const [isLogIn, setIsLogIn] = React.useState(false);
  const [confirmedPassword, setConfirmedPassword] = React.useState("");

  const onSubmit = (data: any) => {
    (isLogIn &&
      props.dispatch({
        type: GET_JWT,
        user: data,
      })) ||
      props.dispatch({
        type: REGISTER,
        user: { ...data, name: data.firstName + " " + data.lastName },
      });
  };

  return (
    <div className={classes.root}>
      <TopHeader isLogin={isLogIn} setIsLogIn={setIsLogIn} />
      <Grid container component="main" className={classes.image}>
        <div className={classes.paper}>
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            {!isLogIn && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                  <Controller
                    name="firstName"
                    as={TextField}
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
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
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <Controller
                    name="lastName"
                    as={TextField}
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
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
                    }}
                  />
                </Grid>
              </Grid>
            )}
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
                type="password"
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
            {!isLogIn && (
              <>
                <Grid item xs={12}>
                  <Controller
                    name="confirmPassword"
                    as={TextField}
                    variant="filled"
                    margin="normal"
                    required
                    type="password"
                    fullWidth
                    id="confirmPassword"
                    label="Confirm Password"
                    helperText={
                      fieldsErrors.confirmPassword
                        ? fieldsErrors.confirmPassword.message
                        : null
                    }
                    error={
                      (fieldsErrors.confirmPassword && true) ||
                      (props.auth.error && true) ||
                      false
                    }
                    onChange={(e: any) => {
                      setConfirmedPassword(e.target.value);
                    }}
                    className={classes.commonFormField}
                    control={control}
                    rules={{
                      required: true,
                      pattern: {
                        value: new RegExp(confirmedPassword),
                        message: "both password should match",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="birthday"
                    as={TextField}
                    variant="filled"
                    margin="normal"
                    defaultValue="2017-05-24"
                    required
                    fullWidth
                    type="date"
                    id="birthday"
                    label="Birthday"
                    helperText={
                      fieldsErrors.birthday
                        ? fieldsErrors.birthday.message
                        : null
                    }
                    error={
                      (fieldsErrors.birthday && true) ||
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
              </>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
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

export default connect(mapStateToProps)(Signup);
