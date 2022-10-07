import { call, put, takeLatest } from "redux-saga/effects";
import fetchWeather from '../../../api';
import { getWeatherError, getWeatherSuccess, GET_WEATHER_STATE_START } from "../../actions/weather";

function* getWeather(action) {
    try {
        yield console.log(1);
        const response = yield call(() => fetchWeather(action.payload));

        yield put(getWeatherSuccess(response));
        if(action?.onSuccess)
            action.onSuccess(response);
    }
    catch (error) {
        yield console.log(error);
        yield put(getWeatherError());
        if(action?.onError)
            action.onError(error);
    }
}

export default function* watchWeatherSaga() {
    yield takeLatest(GET_WEATHER_STATE_START, getWeather);
}