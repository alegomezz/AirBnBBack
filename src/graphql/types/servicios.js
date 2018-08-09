import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLInt
} from 'graphql'

export const ServiciosType = new GraphQLObjectType({
    name: 'Servicios',
    description: 'Descripcion de los servicios de las propiedades',
    fields: () => ({
        _id: {
            type:GraphQLNonNull(GraphQLID)
        },
        nombre:{
            type:GraphQLString
        },
        descripcion: {
            type: GraphQLString
        }

    })
});

