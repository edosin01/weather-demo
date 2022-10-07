import axios from "axios"

const fetchWeather = async (query) => {
    const instance = axios.create({
        baseURL: process.env.REACT_APP_API_URL
    });

    const {data} = await instance.get('', {
        params: {
            q: query,
            units:'metric',
            appid: process.env.REACT_APP_API_KEY
        }
    });
    return data ? data : null;
}

export default fetchWeather;
