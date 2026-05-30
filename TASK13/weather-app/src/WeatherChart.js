import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

function WeatherChart({ labels, temps }) {
    const data = {
        labels,
        datasets: [
            {
                label: "Temperature",
                data: temps,
            },
        ],
    };

    return <Line data={data} />;
}

export default WeatherChart;
