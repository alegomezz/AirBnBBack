import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLInputObjectType
} from 'graphql'

export const ServiciosType = new GraphQLObjectType({
    name: "Servicios",
    description: "Descripcion de los servicios de las propiedades",
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

export const ServiciosInputType = new GraphQLInputObjectType({
    name:"addServicios",
    description:"mutation para agregar servicios", 
    fields: ()=> ({
        nombre:{
            type:GraphQLString
        },
        descripcion: {
            type: GraphQLString
        }
    })
})

