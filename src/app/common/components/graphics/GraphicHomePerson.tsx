import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
  import { dataGraphicHomePerson } from "../../data/graphicHomePerson";
  import { Grid, Box, Typography } from "@mui/material";
  
  export default function GraphicHomePerson(): JSX.Element {
    return (
      <Grid
        container
        display="flex"
        sx={{
          borderRadius: "8px",
          boxShadow: 3,
          padding: 2,
          height: 400,
          maxWidth: "100%",
          backgroundColor: "#ffffff", // Fondo blanco fijo
        }}
      >
        <Typography variant="h6">
          Rendimientos del mes
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "transparent", // Aseguramos transparencia
          }}
        >
          <ResponsiveContainer
            width="100%"
            height="100%"
            style={{
              backgroundColor: "transparent", // Evitar fondo gris
            }}
          >
            <BarChart
              data={dataGraphicHomePerson}
              margin={{ right: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" />
              <Bar dataKey="General" fill="#299B93" name="General Patient" />
              <Bar dataKey="OPD" fill="#22577a" name="OPD" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Grid>
    );
  }
  