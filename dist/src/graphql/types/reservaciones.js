'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReservacionesInputType = exports.ReservacionesType = undefined;

var _graphql = require('graphql');

var _users = require('./users');

var _users2 = require('../../models/users');

var _users3 = _interopRequireDefault(_users2);

var _propiedades = require('./propiedades');

var _propiedades2 = require('../../models/propiedades');

var _propiedades3 = _interopRequireDefault(_propiedades2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReservacionesType = exports.ReservacionesType = new _graphql.GraphQLObjectType({
    name: "Reservaciones",
    description: "datos sobre las reservaciones de propiedades",
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            user: {
                type: _users.UserType,
                resolve: function resolve(reservacion) {
                    var user = reservacion.user;

                    return _users3.default.findById(user).exec();
                }
            },
            propiedad: {
                type: _propiedades.PropiedadesType,
                resolve: function resolve(reservacion) {
                    var propiedad = reservacion.propiedad;

                    return _propiedades3.default.findById(propiedad).exec();
                }
            },
            status_pago: {
                type: _graphql.GraphQLBoolean
            },
            numero_personas: {
                type: _graphql.GraphQLInt
            },
            status_reservacin: {
                type: _graphql.GraphQLBoolean
            },
            cargo_extra: {
                type: _graphql.GraphQLInt
            }

        };
    }
});

var ReservacionesInputType = exports.ReservacionesInputType = new _graphql.GraphQLInputObjectType({
    name: "addReservaciones",
    description: "Agrega reservaciones a la base de datos",
    fields: function fields() {
        return {
            user: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            propiedad: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            status_pago: {
                type: _graphql.GraphQLBoolean
            },
            numero_personas: {
                type: _graphql.GraphQLInt
            },
            status_reservacion: {
                type: _graphql.GraphQLBoolean
            },
            cargo_extra: {
                type: _graphql.GraphQLInt
            }
        };
    }
});