'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reservaciones = require('../../types/reservaciones');

exports.default = {
    type: _reservaciones.ReservacionesType,
    resolve: function resolve(root, params, context) {
        return context.user;
    }
};