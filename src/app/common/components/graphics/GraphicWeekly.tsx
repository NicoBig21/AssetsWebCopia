import { Bar } from 'react-chartjs-2';
import { Card, CardContent, Typography, Box } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';
import { WeeklyGraphicOrdersAndClaims } from '../../interface/graphic-home-interface';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function GraphicWeekly({ metadata }: { metadata: WeeklyGraphicOrdersAndClaims }): JSX.Element {

  const { title, subtitle, labels, dataPoints, lastUpdated } = metadata;

  const data = {
    labels: labels,
    datasets: [
      {
        data: dataPoints,
        backgroundColor: '#299B93',
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
    <Card sx={{ maxWidth: '100%', background: '#FFFFFD', color: '#299B93', borderRadius: '8px', boxShadow: 3, marginTop: 3 }}>
      <CardContent>
        <Box sx={{ height: 200 }}>
          <Bar data={data} options={options} />
        </Box>
        <Typography variant="h6" sx={{ mt: 2, color: '#000000' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ color: '#000000' }}>
          {subtitle}
        </Typography>
        <Box display="flex" alignItems="center" mt={1} sx={{ color: '#000000' }} >
          <AccessTimeIcon fontSize="small" />
          <Typography variant="caption" sx={{ ml: 0.5 }}>
            Última actualización {lastUpdated}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
