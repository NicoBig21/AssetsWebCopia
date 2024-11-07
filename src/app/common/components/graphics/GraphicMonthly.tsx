import { Line } from 'react-chartjs-2';
import { Card, CardContent, Typography, Box } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { MonthlyGraphicOrdersAndClaims } from '../../interface/graphic-home-interface';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function GraphicMonthly({ metadata }: { metadata: MonthlyGraphicOrdersAndClaims }): JSX.Element {

  const { title, description, labels, dataPoints, lastUpdated } = metadata;
  
  const data = {
    labels: labels,
    datasets: [
      {
        data: dataPoints,
        borderColor: '#299B93',
        backgroundColor: '#299B93',
        pointBackgroundColor: '#299B93',
        pointBorderColor: '#299B93',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#000000' },
      },
      x: {
        ticks: { color: '#000000' },
      },
    },
  };

  return (
    <Card sx={{ maxWidth: '100%', backgroundColor: '#fffffd', color: '#299B93', borderRadius: '8px', boxShadow: 3,  marginTop: 3 }}>
      <CardContent>
        <Box sx={{ height: 220 }}>
          <Line data={data} options={options} />
        </Box>
        <Typography variant="h6" sx={{ mt: 1, color: '#000000' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ color: '#000000' }}>
          {description}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, color: '#000000' }}>
          <AccessTimeIcon fontSize="small" />
          <Typography variant="caption" sx={{ ml: 0.5 }}>
            Última actualización {lastUpdated}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
