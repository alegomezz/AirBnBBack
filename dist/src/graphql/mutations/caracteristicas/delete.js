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
        id: {
            name: 'ID',
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var deleteCaracteristica = _caracteristicas2.default.findByIdAndRemove(params.id).exec();
        if (!deleteCaracteristica) throw Error('error al borrar caracteristica');
        return deleteCaracteristica;
    }
};