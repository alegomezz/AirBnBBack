'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _caracteristicas = require('../../../models/caracteristicas');

var _caracteristicas2 = _interopRequireDefault(_caracteristicas);

var _caracteristicas3 = require('../../types/caracteristicas');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _caracteristicas3.CaracteristicasType,
    args: {
        data: {
            type: new _graphql.GraphQLNonNull(_caracteristicas3.CaracteristicasInputType)
        }
    },
    resolve: function resolve(root, params) {
        var caracteristica = new _caracteristicas2.default(params.data);
        var newCaracteristica = caracteristica.save();
        if (!newCaracteristica) throw Error("error al crear el servicio");
        return newCaracteristica;
    }
};