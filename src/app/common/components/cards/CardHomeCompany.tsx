import { Card, CardContent, Typography, Box, Avatar, Grid } from '@mui/material';
import { LocationOn, CalendarToday, Business } from '@mui/icons-material';
import { LineChart, Line, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';
import { InfoCardProps } from '../../interface/card-home-interface';
import { styled } from '@mui/system';

export default function CardHomeCompany({ title, date, location, growth, earnings, growthColor, sparklineData }: InfoCardProps) {

    const StyledContainer = styled(ResponsiveContainer)({
        // borderRadius: '8px',
        // backgroundColor: '#f5f5f5',
        padding: '0px',
        margin: '-5px'
    });

    return (
        <Card 
            sx={{ 
                maxWidth: '100%',
                borderRadius: 2, 
                boxShadow: 3, 
                padding: 2, 
                mt: 4, 
                border: '1px solid #e0e0e0' 
            }}
        >
            <CardContent>
                <Grid container spacing={1} alignItems="center">
                    <Grid item>
                        <Avatar>
                            <Business />
                        </Avatar>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" fontWeight="bold">{title}</Typography>
                    </Grid>
                </Grid>
        
                {/* Fecha */}
                <Box display="flex" alignItems="center" mt={4} sx={{ borderBottom: '1px solid #e0e0e0', paddingBottom: 1 }}>
                    <CalendarToday fontSize="small" color="disabled" />
                    <Typography variant="body2" ml={0.5}>{date}</Typography>
                </Box>
                
                {/* Ubicación */}
                <Box
                    display="flex"
                    alignItems="center"
                    mt={1}
                    sx={{ 
                        borderBottom: '1px solid #e0e0e0', 
                        paddingBottom: 1 
                    }}
                >
                    <LocationOn fontSize="small" color="disabled" />
                    <Typography variant="body2" ml={0.5}>{location}</Typography>
                </Box>
                
                {/* Gráfico y Ganancias */}
                <Grid
                    item 
                    container
                    spacing={1}
                    sx={{ mt: 4 }}
                > 

                    {/* <Box */}
                        {/* mt={2} */}
                        {/* // display="flex" */}
                        {/* // justifyContent="space-between" */}
                        {/* // alignItems="center" */}
                        {/* sx={{ pt: 1 }} */}
                    {/* > */}
                        
                        {/* Grafico */}
                        <Grid item xs={12} md={8}>
                            <Box
                                display="flex"
                                flexDirection="row"
                                // alignItems="flex-end"
                                justifyContent={"space-between"}
                                sx={{
                                    border: '1px solid #e0e0e0',
                                    borderRadius: 2,
                                }}
                            >
                                {/* <Box display="flex"> */}

                                    {/* Configuración del gráfico de líneas con borde */}
                                    <StyledContainer 
                                        width={175} 
                                        height={90}
                                    >
                                        <LineChart data={sparklineData.map(value => ({ value }))}>                                <CartesianGrid strokeDasharray="15 1" />
                                        <Line type="monotone" dataKey="value" stroke={growthColor} strokeWidth={2} dot={false} />
                                        <Tooltip />
                                        </LineChart>
                                    </StyledContainer>

                                    <Box
                                        display={'flex'}
                                        flexDirection={'column'}
                                        justifyContent={'space-between'}
                                        alignItems={'flex-end'}
                                        // pl={3}
                                        mr={2}
                                    >
                                        {/* <Typography variant="caption" color="textSecondary" sx={{ paddingLeft: 5 }}>Crecimiento</Typography>
                                        <Typography variant="h5" fontWeight="bold" sx={{ color: growthColor, ml: 5, textAlign: 'right'}}>{growth}%</Typography> */}
                                        <Typography
                                            fontSize={15}
                                            fontWeight="600"
                                            mt={1}
                                            variant="caption"
                                            color="textSecondary"
                                            // sx={{ paddingLeft: 5 }}
                                        >Crecimiento</Typography>

                                        <Typography
                                            fontSize={28}
                                            fontWeight="500"
                                            sx={{ color: growthColor }}
                                        >{growth}%</Typography>
                                    </Box>
                                {/* </Box> */}
                            </Box>
                        </Grid>
          
                        {/* Ganancias */}
                        <Grid item xs={12} md={4}>
                            <Box
                                height={80}
                                display="flex"
                                flexDirection="column"
                                justifyContent="space-between"
                                alignItems="flex-end"
                                pr={2}
                                sx={{
                                    border: '1px solid #e0e0e0',
                                    borderRadius: 2,
                                }}
                            >
                                <Typography
                                            fontSize={15}
                                            fontWeight="600"
                                            mt={1}
                                            variant="caption"
                                            color="textSecondary"
                                            // sx={{ paddingLeft: 5 }}
                                        >Ganancias</Typography>
                                <Typography 
                                    fontSize={28} 
                                    fontWeight="500">
                                {earnings} </Typography>
                            </Box>
                        </Grid>
                        
                    {/* </Box> */}
                </Grid>
            </CardContent>
        </Card>
    );
}
