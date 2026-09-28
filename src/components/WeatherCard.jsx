function WeatherCard({ weather }) {
  const sunrise = new Date(
    weather.sys.sunrise * 1000
  ).toLocaleTimeString();

  const sunset = new Date(
    weather.sys.sunset * 1000
  ).toLocaleTimeString();

  return (
    <div className="weather-card">

      <h2>
        {weather.name}, {weather.sys.country}
      </h2>

      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />

      <h3>{weather.weather[0].description}</h3>

      <div className="temperature">
        {Math.round(weather.main.temp)}°C
      </div>

      <div className="details">

        <div>
          <strong>Humidity</strong>
          <p>{weather.main.humidity}%</p>
        </div>

        <div>
          <strong>Wind Speed</strong>
          <p>{weather.wind.speed} m/s</p>
        </div>

        <div>
          <strong>Sunrise</strong>
          <p>{sunrise}</p>
        </div>

        <div>
          <strong>Sunset</strong>
          <p>{sunset}</p>
        </div>

      </div>
    </div>
  );
}

export default WeatherCard;