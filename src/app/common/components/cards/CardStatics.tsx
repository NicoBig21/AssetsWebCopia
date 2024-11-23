import { Grid, Card, CardContent, Typography, Box, Icon, Divider } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BusinessIcon from '@mui/icons-material/Business';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PersonIcon from '@mui/icons-material/Person';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const styles = {
  card: {
    backgroundColor: '#ffffff',
    color: '#fff',
  },
  title: {
    color: '#000',
    '@media (min-width: 900px) and (max-width: 1200px)': {
      display: 'none',
    },
  },
  title2: {
    color: '#000',
    '@media (min-width: 900px) and (max-width: 1600px)': {
      display: 'none',
    },
    '@media (min-width: 0px) and (max-width: 700px)': {
      display: 'none',
    },
  },
  subtitle: {
    color: '#b0b0b0',
  },
  total: {
    color: '#000',
  },
  iconBox: {
    backgroundColor: (theme: any) => theme.palette.secondary.main,
    borderRadius: '10px',
    padding: 2,
    mr: 1,
    '@media (min-width: 1200px) and (max-width: 1300px)': {
      display: 'none',
    },
  },
  icon: {
    color: '#ffffff',
  },
  positiveChange: {
    color: '#4caf50',
  },
};

const iconMapping: { [key: string]: JSX.Element } = {
  '1': <AssignmentIcon />,
  '2': <BusinessIcon />,
  '3': <HealthAndSafetyIcon />,
  '4': <PersonIcon />,
  '5': <LocalHospitalIcon />,
};

interface CardStaticsProps {
  title: string;
  title2: string;
  total?: number;
  change?: string | number;
  icon: number;
  description?: string;
}

export default function CardStatics({ title, title2, total, change, icon, description }: CardStaticsProps) {
  return (
    <Grid>
      <Box>
        <Card sx={ styles.card }>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ ...styles.iconBox, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon sx={ styles.icon }>{iconMapping[icon]}</Icon>
                </Box>
                <Typography variant="h5" sx={styles.title }>{title}</Typography>
              </Box>
              <Box>
                <Typography variant="button" sx={ styles.title2 }>{title2}</Typography>
                <Typography variant="h4" sx={ styles.total }>{total}</Typography>
                {description && (
                <Typography variant="body2" sx={styles.subtitle}>
                  {description}
                </Typography>
              )}
              </Box>
            </Box>
            <Divider sx={{ backgroundColor: '#fff', marginY: 2 }} />
            <Box>
              <Typography variant="button" sx={ styles.subtitle }>
                <span style={ styles.positiveChange }>{change}</span>&nbsp;Sobre el último mes
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
}
