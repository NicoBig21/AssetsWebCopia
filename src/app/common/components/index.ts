export { default as Navbar } from './Navbar' // Navbar
export { default as Sidebar } from './Sidebar' // Sidebar

import UserConnected from './UserConnected'; // Usuario
import NotificationBox from './NotificationBox'; // Notificaciones

/* Buttons */
import ButtonAdd from './buttons/ButtonAdd'; // Boton Agregar
import ButtonBack from './buttons/ButtonBack'; // Boton Volver
import ButtonDynamic from './buttons/ButtonDynamic'; // Boton Dinamico
import ButtonEdit from './buttons/ButtonEdit'; // Boton Editar
import ButtonDetail from './buttons/ButtonDetail'; // Boton Detalle

/* Cards */
import CardProfile from './cards/CardProfile'; // Card de Perfil
import CardProfileData from './cards/CardProfileData'; // Card de Datos de Perfil

import CardHomeCompany from './cards/CardHomeCompany'; // Card de Home Empresa
import CardStatics from './cards/CardStatics'; // Card de Pedidos
import CardClaim from './cards/CardClaim'; // Card de Reclamos
import CardDetailPerson from './cards/CardDetailPerson'; // Card de Detalle de Personas

/* Filters */
import FilterComponent from './filters/FilterComponent'; // Filtro por A-Z, Z-A, Urgencia: Alta a Baja, Urgencia: Baja a Alta
import SearchComponent from './filters/SearchComponent'; // Filtro por A-Z, Z-A, Urgencia: Alta a Baja, Urgencia: Baja a Alta

/* Tables */
import TableCompany from './table/TableCompany'; // Tabla de Empresas
import TableTreatment from './table/TableTreatment'; // Tabla de Prestaciones
import TableProfessional from './table/TableProfessional'; // Tabla de Profesionales 
import TablePatient from './table/TablePatient'; // Tabla de Pacientes

/* Dialogs */
import DialogRegister from './dialog/DialogRegister'; // Dialog de Registro

/* Data Dialogs */
import { RegisterCompanyForm } from './data-dialog'; // Dialog de Registro de Empresa
import { RegisterTreatmentForm } from './data-dialog'; // Dialog de Registro de Prestaciones
import { RegisterProfessionalForm } from './data-dialog'; // Dialog de Registro de Profesionales
import { RegisterPatientForm } from './data-dialog'; // Dialog de Registro de Pacientes

/* SpeedDial */
import SpeedDial from './speed-dial/SpeedDial'; // SpeedDial de Detalle

/* Graphics */
import GraphicMonthly from './graphics/GraphicMonthly'; // Grafico Mensual Pedidos y Reclamos
import GraphicWeekly from './graphics/GraphicWeekly'; // Grafico Semanal Pedidos y Reclamos
import GraphicMade from './graphics/GraphicMade'; // Grafico Realizados Pedidos y Reclamos
import GraphicProfessional from './graphics/GraphicProfessional'; // Grafico de Tarjeta Prestaciones, Profesionales y Pacientes
import GraphicHomePerson from './graphics/GraphicHomePerson'; // Grafico de Home Personas


export { 
    UserConnected,
    NotificationBox,

    ButtonAdd,
    ButtonBack,
    ButtonDynamic,
    ButtonEdit,
    ButtonDetail,

    CardProfile,
    CardProfileData,

    CardHomeCompany,
    CardStatics,
    CardClaim,
    CardDetailPerson,

    FilterComponent,
    SearchComponent,

    TableCompany,
    TableTreatment,
    TableProfessional,
    TablePatient,

    DialogRegister,

    SpeedDial,

    RegisterCompanyForm,
    RegisterTreatmentForm,
    RegisterProfessionalForm,
    RegisterPatientForm,

    GraphicMonthly,
    GraphicWeekly,
    GraphicMade,
    GraphicProfessional,
    GraphicHomePerson
};
