import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLInt
} from 'graphql'

export const CaracteresticasType = new GraphQLObjectType({
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
