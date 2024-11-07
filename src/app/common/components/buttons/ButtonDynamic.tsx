import { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';

interface ButtonDynamicProps {
  label: string;
  content?: string;
  setSelectedChart: (value: string) => void;
  graphic: string;
}

export default function ButtonDynamic({ label, content = '', setSelectedChart, graphic }: ButtonDynamicProps) {

  const [showContent, setShowContent] = useState(false);

  return (
    <Box>
      <Button variant="contained" onClick={() => setSelectedChart(graphic)} sx={{ width: '15rem' }}>
        {label}
      </Button>
      {showContent && (
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="body1">{content}</Typography>
        </Box>
      )}
    </Box>
  );
}
