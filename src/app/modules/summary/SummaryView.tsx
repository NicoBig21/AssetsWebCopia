import { Grid, Typography } from "@mui/material";

export default function SummaryView() {

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="h4">
          Resumen
        </Typography>
      </Grid>
    </Grid>
  );
}