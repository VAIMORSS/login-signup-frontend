import { put } from "redux-saga/effects";
import Main from "../api";
import { responseType } from "../types";
export const api = new Main();

export function* payloadLoader(res: responseType, type: string) {
    if (res.error) {
        yield put({
            type: type,
            error: res.error
        })
    }
    yield put({
        type: type,
        payload: res.data
    })
}

export const getBearer = () => {
    return localStorage.getItem("bearer");
}

