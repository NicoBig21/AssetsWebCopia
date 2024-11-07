import { Grid, Typography } from "@mui/material";

export default function OrderView() {

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="h4">
          Pedidos
        </Typography>
      </Grid>
    </Grid>
  );
}