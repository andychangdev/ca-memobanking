import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip);

export function EmotionChart({ emotionCount }) {

    const barChartData = {
        labels: ["Joy", "Sadness", "Anger", "Disgust", "Fear"],
        datasets: [
            {
                label: "Emotions",
                data: emotionCount,
                backgroundColor: [
                    "rgba(255, 205, 86, 0.7)",   // Joy
                    "rgba(54, 162, 235, 0.7)",   // Sadness
                    "rgba(255, 99, 132, 0.7)",   // Anger
                    "rgba(75, 192, 100, 0.7)",  // Disgust
                    "rgba(153, 102, 255, 0.7)"    // Fear
                ],
                borderWidth: 1,
            },
        ],
    };
    
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
        plugins: {
            tooltip: {
                mode: "index",
                intersect: false,
            },
        },
    };

  return (
    <Bar options={options} data={barChartData} />
  );
}

