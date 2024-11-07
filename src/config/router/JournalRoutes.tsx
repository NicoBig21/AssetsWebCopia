import { Navigate, Route, Routes } from 'react-router-dom'
import { RouteWrapper } from './RouteWrapper';
import { ClaimPage, CompanyPage, HomePage, LiquidationPage, OrderPage, PatientPage, TreatmentDetail, ProfessionalDetail, ProfessionalPage, ProfilePage, TreatmentPage, PatientDetail, CompanyDetail, ClaimDetail } from '../../app/modules/index';
import SummaryPage from '../../app/modules/summary/SummaryPage';

export const JournalRoutes = () => {
    return (
      <Routes>
        <Route path='/' element={ <RouteWrapper component={HomePage} /> } />
        <Route path='/pedidos/recibidos' element={ <RouteWrapper component={OrderPage} /> } /> 
        <Route path='/reclamos' element={ <RouteWrapper component={ClaimPage} /> } />
        <Route path='/reclamos/:id' element={ <RouteWrapper /* hidden={false} */ component={ClaimDetail} /> } />
        <Route path='/empresa' element={ <RouteWrapper component={CompanyPage} /> } />
        <Route path='/empresa/:id' element={ <RouteWrapper component={CompanyDetail} /> } />
        <Route path='/prestaciones' element={ <RouteWrapper component={TreatmentPage} /> } />
        <Route path='/prestaciones/:id' element={ <RouteWrapper component={TreatmentDetail} /> } />
        <Route path='/profesionales' element={ <RouteWrapper component={ProfessionalPage} /> } />
        <Route path='/profesionales/:id' element={ <RouteWrapper component={ProfessionalDetail} /> } />
        <Route path='/pacientes' element={ <RouteWrapper component={PatientPage} /> } />
        <Route path='/pacientes/:id' element={ <RouteWrapper component={PatientDetail} /> } />
        <Route path='/liquidacion' element={ <RouteWrapper component={LiquidationPage} /> } /> 
        <Route path='/resumen' element={ <RouteWrapper component={SummaryPage} /> } /> 
        <Route path='/profile' element={ <RouteWrapper component={ProfilePage} /> } /> 
        <Route path='/*' element={ <Navigate to='/' /> }/>
      </Routes>
    );
  }