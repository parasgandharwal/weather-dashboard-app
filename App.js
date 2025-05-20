import React, { useState } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const fetchWeather = async () => {
    const apiKey = "your_api_key";
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    setData(res.data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-4">Weather Dashboard</h1>
      <input
        className="border px-4 py-2"
        type="text"
        placeholder="Enter city"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather} className="bg-blue-500 text-white mt-2 px-4 py-2">
        Get Weather
      </button>
      {data && (
        <div className="mt-4">
          <h2 className="text-2xl">{data.name}</h2>
          <p>Temperature: {data.main.temp} °C</p>
          <p>Humidity: {data.main.humidity}%</p>
          <p>Weather: {data.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
