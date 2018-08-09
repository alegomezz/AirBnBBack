import {
    GraphQLList
} from 'graphql'

import Reservacion from '../../../models/reservaciones'
import {ReservacionesType} from '../../types/reservaciones'

const queryAllReservaciones = {
    type: new GraphQLList(ReservacionesType),
    resolve(){
        const reservaciones = Reservacion.find().exec()
        if (!reservaciones) throw new Error ('Error al traer las reservaciones de la db')
        return reservaciones
    }
}

export default queryAllReservaciones;
