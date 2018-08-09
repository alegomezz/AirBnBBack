import user from './user'
import propiedad from './propiedades'
import servicio from './servicio'
import caracteristica from '../../models/caracteristicas'
import reservacion from '../../models/reservaciones'
import reservaciones from '../../models/reservaciones';



export default {
    ...user,    
    ...propiedad,
    ...servicio,
    ...caracteristica,
    ...reservacion
}