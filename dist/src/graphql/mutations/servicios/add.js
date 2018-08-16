'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _servicios = require('../../../models/servicios');

var _servicios2 = _interopRequireDefault(_servicios);

var _servicios3 = require('../../types/servicios');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _servicios3.ServiciosType,
    args: {
        data: {
            type: new _graphql.GraphQLNonNull(_servicios3.ServiciosInputType)
        }
    },

    resolve: function resolve(root, params) {
        var servicio = new _servicios2.default(params.data);
        var newServicio = servicio.save();
        if (!newServicio) throw Error("error al crear el servicios");
        return newServicio;
    }
};