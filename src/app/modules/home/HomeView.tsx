import { useState } from "react";
import { Grid } from "@mui/material";
import { ButtonDynamic,CardDetailPerson,CardHomeCompany, CardStatics, GraphicHomePerson, GraphicMade, GraphicMonthly, GraphicProfessional, GraphicWeekly } from "../../common/components";
import { GraphicOfPlacedClaims, GraphicOfPlacedOrders, MonthlyClaimGraphic, MonthlyOrderGraphic, WeeklyClaimGraphic, WeeklyOrderGraphic} from "../../common/data/graphicHomeData";
import { cardsData } from "../../common/data/cardHomeData";
import { people } from "../../common/data/cardDetailPerson";

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
                {/* Sección de Detalles del Profesional */}
                <Grid item xs={12} md={4}>
                  <CardDetailPerson people={people} />
                </Grid>
          
                {/* Sección de Estadísticas */}
                <Grid item xs={12} md={8}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} sm={4} md={4}>
                      <CardStatics
                        title="40"
                        title2="Appointments"
                        description="Yesterday: 22 Appointments"
                        icon={2}
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={4}>
                      <CardStatics
                        title="21"
                        title2="New Admit"
                        description="Yesterday: 10 Admits"
                        icon={2}
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={4}>
                      <CardStatics
                        title="14"
                        title2="Operations"
                        description="Yesterday: 9 Operations"
                        icon={2}
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={4}>
                      <CardStatics
                        title="15"
                        title2="Doctors"
                        description="Today Available"
                        icon={2}
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={4}>
                      <CardStatics
                        title="36"
                        title2="Nurses"
                        description="Today Available"
                        icon={2}
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={4}>
                      <CardStatics
                        title="$52,140"
                        title2="Earnings"
                        description="Yesterday: $48,875"
                        icon={2}
                      />
                    </Grid>
                  </Grid>
                </Grid>
          
                {/* Segunda Sección */}
                <Grid item xs={12} md={8}>
                  <GraphicHomePerson/>
                </Grid>

                {/* Tercera Sección */}
                <Grid container spacing={2} mt={2}>
                  <Grid item xs={12} md={4}>
                    <GraphicProfessional 
                      title="Pedidos Realizados" 
                      total={110} 
                      data={ordersData} 
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <GraphicProfessional 
                      title="Reclamos Realizados" 
                      total={110} 
                      data={ordersData} 
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <GraphicProfessional 
                      title="Prestaciones Realizadas" 
                      total={110} 
                      data={ordersData} 
                    />
                  </Grid>
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
