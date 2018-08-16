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
        id: {
            name: 'ID',
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var deleteServicio = _servicios2.default.findByIdAndRemove(params.id).exec();
        if (!deleteServicio) throw Error('Error al borrar la servicio');
        return deleteServicio;
    }
};