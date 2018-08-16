'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PropiedadesInputType = exports.PropiedadesType = exports.CalificacionType = undefined;

var _graphql = require('graphql');

var _users = require('./users');

var _users2 = require('../../models/users');

var _users3 = _interopRequireDefault(_users2);

var _caracteristicas = require('./caracteristicas');

var _caracteristicas2 = require('../../models/caracteristicas');

var _caracteristicas3 = _interopRequireDefault(_caracteristicas2);

var _servicios = require('./servicios');

var _servicios2 = require('../../models/servicios');

var _servicios3 = _interopRequireDefault(_servicios2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CalificacionType = exports.CalificacionType = new _graphql.GraphQLObjectType({
    name: "Calificaciones",
    description: "Calificaciones de las propiedades",
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            comentarios: {
                type: _graphql.GraphQLString
            },
            estrellas: {
                type: _graphql.GraphQLInt
            }
        };
    }
});

var PropiedadesType = exports.PropiedadesType = new _graphql.GraphQLObjectType({
    name: "Propiedades",
    description: "Descripcion de las Propiedades",
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            nombre: {
                type: _graphql.GraphQLString
            },
            descripcion_corta: {
                type: _graphql.GraphQLString
            },
            descripcion_larga: {
                type: _graphql.GraphQLString
            },
            ubicacion: {
                type: _graphql.GraphQLString
            },
            pais: {
                type: _graphql.GraphQLString
            },
            user: {
                type: _users.UserType,
                resolve: function resolve(propiedad) {
                    var user = propiedad.user;

                    return _users3.default.findById(user).exec();
                }
            },
            tipo: {
                type: _graphql.GraphQLInt
            },
            precio: {
                type: _graphql.GraphQLInt
            },
            calificacion: {
                type: new _graphql.GraphQLList(CalificacionType)
            },
            caracteristicas: {
                type: new _graphql.GraphQLList(_caracteristicas.CaracteristicasType),
                resolve: function resolve(propiedad) {
                    var caracteristicas = propiedad.caracteristicas;

                    return _caracteristicas3.default.find({ _id: { $in: caracteristicas } }).exec();
                }
            },
            servicios: {
                type: new _graphql.GraphQLList(_servicios.ServiciosType),
                resolve: function resolve(propiedad) {
                    var servicios = propiedad.servicios;

                    return _servicios3.default.find({ _id: { $in: servicios } }).exec();
                }
            },
            fotos: {
                type: (0, _graphql.GraphQLList)(_graphql.GraphQLString)
            },
            disponibilidad_inicial: {
                type: _graphql.GraphQLString
            },
            disponibilidad_final: {
                type: _graphql.GraphQLString
            }
        };
    }
});

var PropiedadesInputType = exports.PropiedadesInputType = new _graphql.GraphQLInputObjectType({
    name: "addPropiedades",
    description: "Agrega propiedades a la base de datos",
    fields: function fields() {
        return {
            nombre: {
                type: _graphql.GraphQLString
            },
            descripcion_corta: {
                type: _graphql.GraphQLString
            },
            descripcion_larga: {
                type: _graphql.GraphQLString
            },
            ubicacion: {
                type: _graphql.GraphQLString
            },
            pais: {
                type: _graphql.GraphQLString
            },
            user: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            tipo: {
                type: _graphql.GraphQLInt
            },
            precio: {
                type: _graphql.GraphQLInt
            },
            servicios: {
                type: new _graphql.GraphQLList(_graphql.GraphQLID)
            },
            fotos: {
                type: (0, _graphql.GraphQLList)(_graphql.GraphQLString)
            },
            disponibilidad_inicial: {
                type: _graphql.GraphQLString
            },
            disponibilidad_final: {
                type: _graphql.GraphQLString
            }
        };
    }
});