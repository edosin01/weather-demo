import { useMemo } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import useAction from '../actions/weather';

export default function useWeather() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.weather);

    const actions = useMemo(() => bindActionCreators(useAction, dispatch), [dispatch]);
    return {
        actions, 
        data
    }
}