import {
    GraphQLNonNull, GraphQLID
} from 'graphql'

import Reservacion from '../../../models/reservaciones'
import {ReservacionesType} from '../../types/reservaciones'

const querySingleReservacion = {
    type: ReservacionesType,
    args:{
        id:{
            name:'ID',
            type:GraphQLNonNull(GraphQLID)

        }
    },

    resolve(root,params){
        const reservaciones = Reservacion.findById().exec()
        return reservaciones
    }
}

export default querySingleReservacion;
