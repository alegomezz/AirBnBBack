import {
    GraphQLList
} from 'graphql'

import Servicio from '../../../models/servicios'
import {ServiciosType} from '../../types/servicios'

const queryAllServicios = {
    type: new GraphQLList(ServiciosType),
    resolve(){
        const servicios = Servicio.find().exec()
        if (!servicios) throw new Error ('Error al traer los servicios de la db')
        return servicios
    }
}

export default queryAllServicios;
