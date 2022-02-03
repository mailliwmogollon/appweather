import { useState } from "react";

import './Style.css';

//MUI CSS
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';


export default function ViewWeather() {
const url = "https://api.weatherbit.io/v2.0/current?"
const apikey = "86bbe2bc02de49119ce7361d21846912"

const [city, setCity] = useState("");
const [weather, setWeather] = useState ([]);

const weatherURL = (city) => {
    let nameCity = city.toUpperCase();
    return `${url}&city=${nameCity}&key=${apikey}&lang=es`;
  };

  const getWeather = async (city) => {
    const response = await fetch(weatherURL(city));
    const data = await response.json();
    console.log(data)
    setWeather(data);
          }

const handleSubmit = async (event) => {

    event.preventDefault();
    getWeather(city);
    setCity("");
    }


  return (
      <div>
          <form onSubmit={handleSubmit}>
              <input type="search"  placeholder="City..." className="input-form" value={city} onInput={(event) => setCity(event.target.value)}>
              </input>
          </form>
            {weather.length !== 0 ? (
                    weather.data.map((item, index) => (
                        <Container fixed sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                       
                        <Card sx={{ maxWidth: 400, display: 'flex', alignItems: 'center' }} key={index}>
                        <Avatar
                        alt="icon"
                        src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
                        sx={{ width: 80, height: 80 }}
                        />
                        <Typography gutterBottom variant="h7" color="text.secondary">
                        {item.datetime}
                        </Typography>
                        <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                        {`${item.temp}°C`}
                        </Typography>
                        <Typography variant="h4" color="#3f37c9">
                        {item.city_name}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                        {item.weather.description}
                        </Typography>
                        </CardContent>
                        </Card>
                        </Container>

                    ))
                    ) : null}
 

      </div>
  );
}
