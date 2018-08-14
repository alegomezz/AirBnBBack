import user from './user'
import propiedad from './propiedades'
import servicio from './servicio'
import caracteristica from './caracteristica'
import reservacion from './reservacion'




export default {
    ...user,    
    ...propiedad,
    ...servicio,
    ...caracteristica,
    ...reservacion
}