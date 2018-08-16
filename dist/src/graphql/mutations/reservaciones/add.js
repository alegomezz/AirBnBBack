'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _reservaciones = require('../../../models/reservaciones');

var _reservaciones2 = _interopRequireDefault(_reservaciones);

var _reservaciones3 = require('../../types/reservaciones');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _reservaciones3.ReservacionesType,
    args: {
        data: {
            type: new _graphql.GraphQLNonNull(_reservaciones3.ReservacionesInputType)
        }
    },
    resolve: function resolve(root, params) {
        var reservacion = new _reservaciones2.default(params.data);
        var newReservacion = reservacion.save();
        if (!newReservacion) throw Error('Erro al guardar la reservacion');
        return newReservacion;
    }
};