import {
    GraphQLNonNull
} from 'graphql'

import Propiedad from '../../../models/propiedades'
import {PropiedadesTypes, PropiedadesInputType}  from '../../types/propiedades';


export default {
    type: PropiedadesTypes,
    args: {
        data:{
            type: new GraphQLNonNull(PropiedadesInputType)
        }
    },
    resolve(root,params){
        const propiedad = new Propiedad(params.data);
        const newPropiedad = propiedad.save()
        if (!newPropiedad) throw Error("error al caer la propiedad de la base de datos")
        return newPropiedad
    }
}