import {GET_WEATHER_STATE_START, GET_WEATHER_STATE_SUCCESS, GET_WEATHER_STATE_FAILED} from '../actions/weather';

const initialState = {
    weather: [],
    isLoading: false
}

export default function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case GET_WEATHER_STATE_START:
            return {
                ...state,
                isLoading: true
            }
        case GET_WEATHER_STATE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                weather: action.payload
            }
        case GET_WEATHER_STATE_FAILED:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}