'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _servicios = require('../../../models/servicios');

var _servicios2 = _interopRequireDefault(_servicios);

var _servicios3 = require('../../types/servicios');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllServicios = {
    type: new _graphql.GraphQLList(_servicios3.ServiciosType),
    resolve: function resolve() {
        var servicios = _servicios2.default.find().exec();
        if (!servicios) throw new Error('Error al traer los servicios de la db');
        return servicios;
    }
};

exports.default = queryAllServicios;