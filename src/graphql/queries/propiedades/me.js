import {PropiedadesType} from '../../types/propiedades'

export default {
    type:PropiedadesType,
    resolve(root,params,context){
        return context.user
    }
}
