import axios from "axios";

const API_KEY = "4cac606c2a87c0b26481cdb2f3a46648";

export const getWeather = async (city) => {
    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`,
    );

    return response.data;
};
