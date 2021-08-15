import { put, takeEvery } from "redux-saga/effects";
import { responseType } from "../../types";
import { api } from "../../utils";
import { GET_JWT, GET_JWT_RESULT, REGISTER, REGISTER_RESULT } from "./actions";
import Axios from "axios";


function* getJWT(action: any) {
  let token = localStorage.getItem("bearer");
  if (!token) {
    let res: responseType = yield api.auth.getJwtToken({
      strategy: "local", ...action.user
    })
    if (res.error) {
      yield put({ error: res.error, type: GET_JWT_RESULT })
      return;
    }
    const token = res.data.token;
    localStorage.setItem("bearer", token);
    Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  yield put({ data: token, type: GET_JWT_RESULT })
  return;
}

function* registerUser(action: any) {
  let res: responseType = yield api.auth.registerUser(
    action.user
  )
  const token = res.data.token;
  localStorage.setItem("bearer", token);
  Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  yield put({ data: token, type: REGISTER_RESULT })
  return;
}



function* authSagaWatcher() {
  yield takeEvery(GET_JWT, getJWT);
  yield takeEvery(REGISTER, registerUser);
}

export default authSagaWatcher;
