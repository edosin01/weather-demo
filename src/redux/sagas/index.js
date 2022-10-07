import { all } from "redux-saga/effects";
import watchWeatherSaga from "./weather/get-weather";

export default function* rootSaga() {
    yield all([
        watchWeatherSaga()
    ])
}