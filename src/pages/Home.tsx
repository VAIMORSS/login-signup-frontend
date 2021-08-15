import { useEffect } from "react";
import { connect } from "react-redux";
import { GET_USERS } from "../redux/user/actions";
import { Grid } from "@material-ui/core";
import UserCard from "../components/UserCard";
import { User } from "./../types/user";

const Home = (props: any) => {
  useEffect(() => {
    props.dispatch({
      type: GET_USERS,
    });
  }, []);

  return (
    <Grid container spacing={3}>
      {props.users &&
        props.users.length > 0 &&
        props.users.map((user: User) => {
          return (
            <Grid item xs={12} sm={6} md={3}>
              <UserCard
                key={user.email}
                email={user.email}
                name={user.name}
                birthday={user.birthday}
              />
            </Grid>
          );
        })}
    </Grid>
  );
};

const mapStateToProps = (state: any) => {
  return {
    users: state.user.users,
  };
};

export default connect(mapStateToProps)(Home);
