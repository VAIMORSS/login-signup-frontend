import { fork, all } from "redux-saga/effects";
import authSagaWatcher from "../auth/saga";
import userSagaWatcher from "../user/saga";

export default function* root() {
  yield all([fork(authSagaWatcher), fork(userSagaWatcher)]);
}
