import { useState } from "react";
import { Grid } from "@mui/material";
import { ButtonDynamic,CardHomeCompany, GraphicMade, GraphicMonthly, GraphicProfessional, GraphicWeekly } from "../../common/components";
import { GraphicOfPlacedClaims, GraphicOfPlacedOrders, MonthlyClaimGraphic, MonthlyOrderGraphic, WeeklyClaimGraphic, WeeklyOrderGraphic} from "../../common/data/graphicHomeData";
import { cardsData } from "../../common/data/cardHomeData";

const views = { 
  pedidos: 'Pedidos',
  reclamos: 'Reclamos',
  empresa: 'Empresa',
  prestaciones: 'Prestaciones',
  profesionales: 'Profesionales',
  pacientes: 'Pacientes'
}

const ordersData = [
  { name: 'Dr. Smith', count: 40 },
  { name: 'Dr. Johnson', count: 20 },
  { name: 'Dr. Lee', count: 20 },
  { name: 'Dr. Kim', count: 10 },
  { name: 'Dr. Johnson', count: 10 },
  { name: 'Dr. Lee', count: 5 },
  { name: 'Dr. Kim', count: 5 },
];

export default function HomeView() {

  const [selectedGraph, setSelectedGraph] = useState<string>(views.pedidos);

  // Función para renderizar el gráfico basado en el `selectedGraph`
  const updateGraph = () => {
    switch (selectedGraph) {
      case views.pedidos:
        return (
          <Grid container>
            {/* Primera columna izquierda con GraphicHome y GraphicHome4 */}
            <Grid item xs={12} md={3.5} mr={7}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <GraphicMonthly metadata={MonthlyOrderGraphic} />
                </Grid>
                <Grid item>
                  <GraphicWeekly metadata={WeeklyOrderGraphic} />
                </Grid>
              </Grid>
            </Grid>
        
            {/* Segunda columna que ocupa el resto del espacio con GraphicHome5 */}
            <Grid item xs={12} md={8}>
              <GraphicMade metadata={GraphicOfPlacedOrders} />
            </Grid>
          </Grid>
        );
      case views.reclamos:
        return (
          <Grid container>
            {/* Primera columna izquierda con GraphicHome y GraphicHome4 */}
            <Grid item xs={12} md={8} mr={7}>
              <GraphicMade metadata={GraphicOfPlacedClaims} />
            </Grid>
        
            {/* Segunda columna que ocupa el resto del espacio con GraphicHome5 */}
            <Grid item xs={12} md={3.5}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <GraphicMonthly metadata={MonthlyClaimGraphic} />
                </Grid>
                <Grid item>
                  <GraphicWeekly metadata={WeeklyClaimGraphic} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        );
        case views.empresa:
          return (
            <Grid container spacing={2}>
              {cardsData.map((data, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <CardHomeCompany {...data} />
                </Grid>
              ))}
            </Grid>
          );
        case views.profesionales:
          return (
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12} md={4}>
                <GraphicProfessional title="Pedidos Realizados" total={110} data={ordersData} />
              </Grid>
              <Grid item xs={12} md={4}>
                <GraphicProfessional title="Reclamos Realizados" total={110} data={ordersData} />
              </Grid>
              <Grid item xs={12} md={4}>
                <GraphicProfessional title="Prestaciones Realizadas" total={110} data={ordersData} />
              </Grid>
            </Grid>
          );
      default:
        return <div>Selecciona un gráfico</div>;
    }
  };

  return (

    <Grid container direction="column">

      <Grid container spacing={1} justifyContent="space-between">
        {
            Object.values(views).map((view, index) => (
              <Grid marginTop={2}>
                <ButtonDynamic
                  key={index}
                  label={view}
                  setSelectedChart={setSelectedGraph}
                  graphic={view}
                />
              </Grid>
            ))
        }
      </Grid>

      <Grid item container>
        {/* Primera fila de 3 elementos */}
        <Grid item xs={12}>
          {updateGraph()}
        </Grid>
      </Grid>

    </Grid>
  );
}
