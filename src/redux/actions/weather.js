export const GET_WEATHER_STATE_START = 'GET_WEATHER_STATE_START';
export const GET_WEATHER_STATE_SUCCESS = 'GET_WEATHER_STATE_SUCCESS';
export const GET_WEATHER_STATE_FAILED = 'GET_WEATHER_STATE_FAILED';

export function getWeather(payload, onSuccess, onError) {
    return ({
        type: GET_WEATHER_STATE_START,
        payload,
        onSuccess,
        onError
    });
}

export function getWeatherSuccess(payload) {
    return ({
        type: GET_WEATHER_STATE_SUCCESS,
        payload
    });
}

export function getWeatherError() {
    return ({
        type: GET_WEATHER_STATE_FAILED
    });
}

export default {getWeather, getWeatherSuccess, getWeatherError};