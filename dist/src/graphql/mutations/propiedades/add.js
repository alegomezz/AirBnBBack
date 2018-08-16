'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _propiedades = require('../../../models/propiedades');

var _propiedades2 = _interopRequireDefault(_propiedades);

var _propiedades3 = require('../../types/propiedades');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _propiedades3.PropiedadesType,
    args: {
        data: {
            type: new _graphql.GraphQLNonNull(_propiedades3.PropiedadesInputType)
        }
    },
    resolve: function resolve(root, params) {
        var propiedad = new _propiedades2.default(params.data);
        var newPropiedad = propiedad.save();
        if (!newPropiedad) throw Error("Error al crear la propiedad en la base de datos :(");
        return newPropiedad;
    }
};