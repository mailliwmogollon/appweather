import { useState } from "react";

export default function ViewWeather() {
const url = "http://api.weatherbit.io/v2.0/current?"
const apikey = "86bbe2bc02de49119ce7361d21846912"

const [city, setCity] = useState("");
const [weather, setWeathers] = useState ([]);

const weatherURL = (city) => {
    let nameCity = city.toUpperCase();
    return `${url}&city=${nameCity}&key=${apikey}&lang=es`;
  };

  const getWeather = async (city) => {
    const response = await fetch(weatherURL(city));
    const data = await response.json();
    console.log(data)
          }

const handleSubmit = async (event) => {

    event.preventDefault();
    getWeather(city);
    setCity("");
    }


  return (
      <div>
          <form onSubmit={handleSubmit}>
              <input type="search" value={city} onInput={(event) => setCity(event.target.value)}>
              </input>
          </form>

 

      </div>
  );
}
