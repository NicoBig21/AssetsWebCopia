import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { CardClaim, FilterComponent, SearchComponent } from "../../common/components";
import { data as initialData } from "../../common/data/claimData"; // Los datos originales de reclamos
import { IClaim } from "../../common/interface/claim-interface";

export default function ClaimView() {
  // useState<IClaim[]> es un estado que se inicializa con los datos originales de reclamos, esto se hace con el fin de que los reclamos se muestren por defecto sin ningún filtro
  const [filteredClaims, setFilteredClaims] = useState<IClaim[]>(initialData); // Reclamos filtrados por defecto

  // Función para filtrar reclamos por nombre
  const handleSearchChange = (searchQuery: string) => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const searchedData = initialData.filter(claim =>
      claim.nombre.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredClaims(searchedData); // Actualiza el estado con los reclamos filtrados
  };

  // Función para actualizar los reclamos filtrados con base en el filtro seleccionado
  const handleFilterChange = (filterValue: string) => {
    let filteredData = [...initialData];

    switch (filterValue) {
      case "az":
        filteredData.sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
      case "za":
        filteredData.sort((a, b) => b.nombre.localeCompare(a.nombre));
        break;
      case "urgencyHighToLow":
        filteredData.sort((a, b) => {
          const urgencyOrder = { alta: 3, media: 2, baja: 1 };
          return urgencyOrder[b.urgency] - urgencyOrder[a.urgency];
        });
        break;
      case "urgencyLowToHigh":
        filteredData.sort((a, b) => {
          const urgencyOrder = { alta: 3, media: 2, baja: 1 };
          return urgencyOrder[a.urgency] - urgencyOrder[b.urgency];
        });
        break;
      default:
        filteredData = initialData; // Sin filtro, muestra los datos originales
    }

    setFilteredClaims(filteredData); // Actualizar el estado con los reclamos filtrados
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="h4">Reclamos</Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={2} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={4}>
            <SearchComponent onSearchChange={handleSearchChange} />
          </Grid>
          <Grid item xs={12} md={4}>
            <FilterComponent onFilterChange={handleFilterChange} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CardClaim claim={filteredClaims} />
      </Grid>
    </Grid>
  );
}