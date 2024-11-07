import { useState } from 'react';
import { Box, Typography, Card, CardContent, LinearProgress, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { ArcElement, Chart as ChartJS, DoughnutController, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

ChartJS.register(ArcElement, DoughnutController, Tooltip, Legend);

interface ProfessionalData {
  name: string;
  count: number;
}

interface GraphicProfesionalProps {
  title: string;
  total: number;
  data: ProfessionalData[];
}

export default function GraphicProfessional({ title, total, data }: GraphicProfesionalProps): JSX.Element {
  const itemsPerPage = 7;
  const [page, setPage] = useState(0);

  const colorPalette = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#8E44AD', '#E67E22', '#2ECC71', '#D35400', '#2980B9', '#F39C12'];

  const handleNextPage = () => {
    if ((page + 1) * itemsPerPage < data.length) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const paginatedData = data.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        data: data.map((item) => item.count),
        backgroundColor: data.map((_, index) => colorPalette[index % colorPalette.length]),
        hoverBackgroundColor: data.map((_, index) => colorPalette[index % colorPalette.length]),
        borderWidth: 0,
      },
    ],
  };

  return (
    <Card
      sx={{
        backgroundColor: '#299B93',
        color: '#000000',
        borderRadius: '12px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
        padding: '1rem',
      }}
    >
      <CardContent sx={{ marginTop: 1 }}>
        <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', justifyContent: 'center', color: '#ffffff' }}>
          {title}
        </Typography>
        <Typography variant="subtitle2" sx={{ opacity: 0.6, mb: 2, fontSize: '1rem', fontWeight: 'bold', display: 'flex', justifyContent: 'center', color: '#ffffff' }}>
          Por Profesionales
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <Doughnut
              data={chartData}
              options={{
                cutout: '75%',
                plugins: {
                  legend: { display: false },
                  tooltip: {
                    callbacks: {
                      label: (context) => `${context.label}: ${context.raw}`,
                    },
                  },
                },
              }}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: '2rem', color: '#ffffff' }}>
                {total}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '1.3rem', opacity: 0.7, color: '#ffffff' }}>
                Total
              </Typography>
            </Box>
          </Box>
        </Box>
        <List>
          {paginatedData.map((item, index) => (
            <ListItem key={index} sx={{ display: 'flex', alignItems: 'center', py: 2 }}>
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{ variant: 'body2', sx: { color: '#ffffff' } }}
              />
              <Box sx={{ width: '60%', mr: 1 }}>
                <LinearProgress
                  variant="determinate"
                  value={(item.count / total) * 100}
                  sx={{
                    height: 8,
                    borderRadius: '4px',
                    backgroundColor: '#ffffff',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: colorPalette[index % colorPalette.length],
                    },
                  }}
                />
              </Box>
              <Typography variant="body2" sx={{ fontSize: '1rem', color: '#ffffff' }}>
                {item.count}
              </Typography>
            </ListItem>
          ))}
        </List>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <IconButton onClick={handlePreviousPage} disabled={page === 0}>
            <ArrowBackIosIcon sx={{ color: '#ffffff' }} />
          </IconButton>
          <Typography variant="body2" sx={{ color: '#ffffff', pt: '0.5rem' }}>
            {`${page * itemsPerPage + 1}-${Math.min((page + 1) * itemsPerPage, data.length)} de ${data.length}`}
          </Typography>
          <IconButton onClick={handleNextPage} disabled={(page + 1) * itemsPerPage >= data.length}>
            <ArrowForwardIosIcon sx={{ color: '#ffffff' }} />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
