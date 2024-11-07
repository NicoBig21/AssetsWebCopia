export const MonthlyOrderGraphic = {
    title: "Pedidos Mensuales",
    description: "Los Pedidos aumentaron un 20% este mes",
    labels: ['Ene','Feb','Mar','Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    dataPoints: [200, 400, 300, 500, 400, 300, 400, 500, 600, 323, 435, 645],
    lastUpdated: "hace 4 minutos",
  };

  export const WeeklyOrderGraphic = {
    title: "Pedidos Semanales",
    subtitle: "Los Pedidos aumentaron un 15% esta semana",
    labels: ['lun','mar','mie','jue', 'vie', 'sab', 'dom'],
    dataPoints: [200, 400, 300, 500, 400, 300, 400, 500, 600, 323, 435, 645],
    lastUpdated: "hace 2 horas",
  };

  export const GraphicOfPlacedOrders = {
    title: "Pedidos realizados",
    subtitle: "De los 300 pedidos totales, se han realizado 200",
    labels: ['Ene','Feb','Mar','Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    dataPoints: [200, 400, 300, 500, 400, 300, 400, 500, 600, 323, 435, 645], // Ajustado a 7 días
    maxDataPoints: [300, 500, 400, 560, 420, 300, 700, 510, 720, 523, 455, 645], // Máximo teórico de pedidos para cada día
    lastUpdated: "hace 2 horas",
  };  
  
  export const MonthlyClaimGraphic = {
    title: "Reclamos mensuales",
    description: "Los Reclamos se redujeron un 20% este mes",
    labels: ['Ene','Feb','Mar','Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    dataPoints: [400, 300, 400, 500, 600, 323, 435, 645, 200, 400, 300, 500,],
    lastUpdated: "hace 2 horas",
  };

  export const WeeklyClaimGraphic = {
    title: "Reclamos semanales",
    subtitle: "Los Reclamos aumentaron un 5% esta semana",
    labels: ['lun','mar','mie','jue', 'vie', 'sab', 'dom'],
    dataPoints: [300, 200, 400, 500, 600, 323, 500, 400, 300, 400, 435, 645],
    lastUpdated: "hace 2 horas",
  };

  export const GraphicOfPlacedClaims = {
    title: "Reclamos realizados",
    subtitle: "De los 300 reclamos totales, se han realizado 250",
    labels: ['Ene','Feb','Mar','Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    dataPoints: [323, 435, 145, 200, 10, 50, 300, 400, 500, 300, 500, 600], // Ajustado a 7 días
    maxDataPoints: [ 700, 510, 560, 420, 300, 700, 510, 720, 523, 455, 645], // Máximo teórico de pedidos para cada día
    lastUpdated: "hace 2 horas",
  };  
  
