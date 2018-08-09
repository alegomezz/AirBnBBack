import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLList
} from 'graphql'
import { UserType } from './users';
import User from '../../models/users';
import {CaracteristicasType} from './caracteristicas';
import Caracteristica from '../../models/caracteristicas';
import Servicio from '../../models/servicios';
import {ServiciosType} from './servicios'


export const CalificacionType = new GraphQLObjectType({
    _id: {
        type:GraphQLNonNull(GraphQLID)
    },
    comentarios:{
        type:GraphQLString
    },
    estrellas: {
        type: GraphQLInt
    },
});



export const PropiedadesType = new GraphQLObjectType({
    name: 'Propiedades',
    description: 'Datos de las propiedades subidas por usuarios',
    fields: () => ({
        _id: {
            type:GraphQLNonNull(GraphQLID)
        },
        nombre:{
            type:GraphQLString
        },
        descripcion_corta: {
            type: GraphQLString
        },
        descripcion_larga: {
            type: GraphQLString
        },
        ubicacion: {
            type: GraphQLString
        },
        pais: {
            type: GraphQLString
        },
        user: {
            type: UserType, 
            resolve(propiedades){
                const {user} = propiedades
                return User.findById(user).exec()
            }
        },
        tipo: {
            type: GraphQLInt
        },
        precio: {
            type: GraphQLInt
        },
        calificacion: {
            type: new GraphQLList(CalificacionType)
        },
        caracteristicas: {
            type: new GraphQLList(CaracteristicasType),
            resolve(propiedad){
                const{caracteristicas} = propiedad
                return Caracteristica.findById({_id:{$in:caracteristicas}}).exec()
            }
        },
        servicios: {
            type: new GraphQLList(ServiciosType),
            resolve(propiedad){
                const{servicios} = propiedad
                return Servicio.findById({_id:{$in:servicios}}).exec()
            }
        },
        fotos: {
            type: GraphQLList(GraphQLString)
        },
        disponibilidad_inicial: {
            type: GraphQLString
        },
        disponibilidad_final: {
            type: GraphQLString
        }

    })
});