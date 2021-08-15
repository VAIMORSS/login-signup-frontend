import { put, takeEvery } from "redux-saga/effects";
import { responseType } from "../../types";
import { api } from "../../utils";
import { GET_USERS, GET_USERS_RESULT } from "./actions";


function* getUser(action: any) {
  let res: responseType = yield api.user.getUsers()
  if (res.error) {
    yield put({ error: res.error, type: GET_USERS_RESULT })
    return;
  }

  yield put({ data: res.data, type: GET_USERS_RESULT })
  return;
}



function* authSagaWatcher() {
  yield takeEvery(GET_USERS, getUser);
}

export default authSagaWatcher;
