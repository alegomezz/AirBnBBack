"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ServiciosInputType = exports.ServiciosType = undefined;

var _graphql = require("graphql");

var ServiciosType = exports.ServiciosType = new _graphql.GraphQLObjectType({
    name: "Servicios",
    description: "Descripcion de los servicios de las propiedades",
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            nombre: {
                type: _graphql.GraphQLString
            },
            descripcion: {
                type: _graphql.GraphQLString
            }

        };
    }
});

var ServiciosInputType = exports.ServiciosInputType = new _graphql.GraphQLInputObjectType({
    name: "addServicios",
    description: "mutation para agregar servicios",
    fields: function fields() {
        return {
            nombre: {
                type: _graphql.GraphQLString
            },
            descripcion: {
                type: _graphql.GraphQLString
            }
        };
    }
});