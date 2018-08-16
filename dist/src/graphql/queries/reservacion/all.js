'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _reservaciones = require('../../../models/reservaciones');

var _reservaciones2 = _interopRequireDefault(_reservaciones);

var _reservaciones3 = require('../../types/reservaciones');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllReservaciones = {
    type: new _graphql.GraphQLList(_reservaciones3.ReservacionesType),
    resolve: function resolve() {
        var reservaciones = _reservaciones2.default.find().exec();
        if (!reservaciones) throw new Error('Error al traer las reservaciones de la db');
        return reservaciones;
    }
};

exports.default = queryAllReservaciones;