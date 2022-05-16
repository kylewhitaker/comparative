import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const Chart: React.FC = (props) => {
  const [data, setData] = useState<{ labels: any[]; datasets: any[] }>({ labels: [], datasets: [] });
  const [options] = useState<any>({
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Covid-19 Data',
      },
    },
  });

  useEffect(() => {
    fetch('http://localhost:4200/')
      .then((response) => response.json())
      .then((body: any[]) =>
        setData({
          labels: body.map((x) => x.date),
          datasets: [{ label: 'Dataset 1', data: body.map((x) => x.new_cases) }],
        })
      );
  });

  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};
