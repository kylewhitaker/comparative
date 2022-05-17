import { Chart } from 'react-chartjs-2';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';

ChartJS.register(LinearScale, CategoryScale, BarElement, PointElement, LineElement, Title, Legend, Tooltip);

interface Props {
  title: string;
  axisX: string[];
  dataBar: number[];
  dataLine: number[];
}

export const MultiChart: React.FC<Props> = (props) => {
  return (
    <Chart
      type="bar"
      style={{ padding: '2rem' }}
      data={{
        labels: props.axisX,
        datasets: [
          {
            type: 'bar',
            label: 'Daily',
            data: props.dataBar,
            backgroundColor: 'rgba(13, 131, 164, 0.5)',
          },
          {
            type: 'line',
            label: 'Smoothed',
            data: props.dataLine,
            backgroundColor: 'rgba(13, 131, 164, 1)',
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: props.title },
        },
      }}
    />
  );
};
