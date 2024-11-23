import { Bar } from 'react-chartjs-2';
import { Card, CardContent, Typography, Box, Stack } from '@mui/material';
import { Circle } from '@mui/icons-material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';
import { MadeGraphicOrdersAndClaims } from '../../interface/graphic-home-interface';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function GraphicMade({ metadata }: { metadata: MadeGraphicOrdersAndClaims }): JSX.Element {
  const { title, subtitle, labels, dataPoints, maxDataPoints, lastUpdated } = metadata;

  // Configuración de datos para las barras de color
  const data = {
    labels: labels, // Nombres de los días en el eje y
    datasets: [
      {
        label: 'Pedidos Realizados por mes',
        data: dataPoints,
        backgroundColor: '#299B93', // Naranja para pedidos realizados
      },
      {
        label: 'Pedidos Restantes por mes',
        data: maxDataPoints ? maxDataPoints.map((max, i) => max - dataPoints[i]) : [],
        backgroundColor: '#22577a', // Verde para el total de pedidos restantes
      },
    ],
  };

  // Opciones del gráfico
  const options = {
    indexAxis: 'y' as const, // Cambia el gráfico a horizontal
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: { color: '#000000' },
      },
      y: {
        ticks: { color: '#000000' },
      },
    },
  };

  return (
    <Card sx={{ maxWidth: '100%', background: '#FFFFFD', color: '#000000', borderRadius: '8px', boxShadow: 3, marginTop: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ color: '#000000' }}>
            {title}
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 1 }}>
          <Box display="flex" alignItems="center">
            <Circle sx={{ color: '#299B93', fontSize: 12, mr: 0.5 }} />
            <Typography variant="body2">Pedidos Realizados por mes</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Circle sx={{ color: '#22577a', fontSize: 12, mr: 0.5 }} />
            <Typography variant="body2">Pedidos Restantes por mes</Typography>
          </Box>
        </Stack>
        <Box sx={{ height: 550, mt: 2}}>
          <Bar data={data} options={options} />
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2, color: '#000000' }}>
          {subtitle}
        </Typography>
        <Box display="flex" alignItems="center" mt={1} sx={{ color: '#000000' }}>
          <AccessTimeIcon fontSize="small" />
          <Typography variant="caption" sx={{ ml: 0.5 }}>
            Última actualización {lastUpdated}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
