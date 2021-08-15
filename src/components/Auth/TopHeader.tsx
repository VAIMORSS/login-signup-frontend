import { Button, makeStyles, Typography } from "@material-ui/core";
import logo from "./../../assets/images/logo.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "35px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "15px",
    backgroundColor: "white",
    alignItems: "center",
  },
  logo: {
    height: 25,
  },
  signinBlock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
  },
  signinText: {},
  signinButton: {
    backgroundColor: "yellow",
    color: "#219ebc",
    fontWeight: "bold",
    borderRadius: 18,
    margin: 10,
  },
}));

interface TopHeaderProps {
  isLogin: boolean;
  setIsLogIn: (flag: boolean) => void;
}

function TopHeader(props: TopHeaderProps) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img className={classes.logo} src={logo} />
      <div className={classes.signinBlock}>
        <Typography variant="subtitle2" component="h6">
          {(props.isLogin && `Do not have account?`) ||
            `Already have an account?`}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.signinButton}
          onClick={() => {
            props.setIsLogIn(!props.isLogin);
          }}
        >
          {(props.isLogin && `Sign Up`) || ` Sign In`}
        </Button>
      </div>
    </div>
  );
}

export default TopHeader;
