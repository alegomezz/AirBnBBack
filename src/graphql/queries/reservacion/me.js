import {ReservacionesType} from '../../types/reservaciones'

export default {
    type:ReservacionesType,
    resolve(root,params,context){
        return context.user
    }
}
