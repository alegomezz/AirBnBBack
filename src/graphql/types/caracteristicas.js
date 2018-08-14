import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLInputObjectType
} from 'graphql'

export const CaracteristicasType = new GraphQLObjectType({
    name: 'Caracteristicas',
    description: 'Caracteristicas de la propriedad',
    fields: () => ({
        _id: {
            type:GraphQLNonNull(GraphQLID)
        },
        nombre:{
            type:GraphQLString
        },
        descripcion: {
            type: GraphQLString
        },
        numero: {
            type: GraphQLInt
        }
    
    })
});

export const CaracteristicasInputType = new GraphQLInputObjectType({
    name:"addCaracteristicas",
    description:"Mutation para agregar caracteristicas",
    fields: () => ({
        nombre:{
            type:GraphQLString
        },
        descripcion:{
            type:GraphQLString
        },
        numero:{
            type:GraphQLInt
        }
    })
})