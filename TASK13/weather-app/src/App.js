import { useState } from "react";
import { getWeather } from "./WeatherService";
import WeatherChart from "./WeatherChart";

function App() {
    const [city, setCity] = useState("");
    const [labels, setLabels] = useState([]);
    const [temps, setTemps] = useState([]);

    const fetchWeather = async () => {
        const data = await getWeather(city);

        setLabels(
            data.list.slice(0, 8).map((item) => item.dt_txt.split(" ")[1]),
        );

        setTemps(data.list.slice(0, 8).map((item) => item.main.temp));
    };

    return (
        <div>
            <h2>Weather App</h2>

            <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
            />

            <button onClick={fetchWeather}>Get Weather</button>

            {temps.length > 0 && <WeatherChart labels={labels} temps={temps} />}
        </div>
    );
}

export default App;
