'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CaracteristicasInputType = exports.CaracteristicasType = undefined;

var _graphql = require('graphql');

var CaracteristicasType = exports.CaracteristicasType = new _graphql.GraphQLObjectType({
    name: 'Caracteristicas',
    description: 'Caracteristicas de la propriedad',
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
            },
            numero: {
                type: _graphql.GraphQLInt
            }

        };
    }
});

var CaracteristicasInputType = exports.CaracteristicasInputType = new _graphql.GraphQLInputObjectType({
    name: "addCaracteristicas",
    description: "Mutation para agregar caracteristicas",
    fields: function fields() {
        return {
            nombre: {
                type: _graphql.GraphQLString
            },
            descripcion: {
                type: _graphql.GraphQLString
            },
            numero: {
                type: _graphql.GraphQLInt
            }
        };
    }
});