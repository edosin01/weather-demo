import './App.css';
import {useEffect, useState} from 'react';
import useWeather from './redux/hooks/useWeather';
import { FormControl, Button, InputLabel, Input } from '@mui/material';

function App() {

  const [query, setQuery] = useState('');
  const {data: {weather}, actions} = useWeather();

  const onSuccess = () => {
    console.log("Action: Success");
  }

  const onError = () => {
    console.log("Action: Error");
  }

  const handleClick = (e) => {
    e.preventDefault();
    actions.getWeather(query, onSuccess, onError);
  }

  useEffect(() => {
    console.log(weather.weather);
  }, [weather]);
  
  return (
    <div className='container'>
      <div className='main center'>
        <div className='form center'>
          <FormControl>
            <InputLabel htmlFor="my-input">Enter city...</InputLabel>
            <Input
              id="my-input" 
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <Button variant="contained" onClick={(e) => handleClick(e)}>Search</Button>
          </FormControl>
        </div>
        {
          weather.main && (
            <div className='weather'>
              <h1 className="city">
                {weather.name}
                <sup className="country">{weather.sys.country}</sup>
              </h1>
              <h2 className='tempo'>
                {Math.round(weather.main.temp, 0)}<span>&#186;C</span>
              </h2>
              <img 
                className='icon-weather'
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
              <p className='description'>
                {`${weather.weather[0].main.toUpperCase()}: ${weather.weather[0].description.toUpperCase()}`}
              </p>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
