'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _reservaciones = require('../../../models/reservaciones');

var _reservaciones2 = _interopRequireDefault(_reservaciones);

var _reservaciones3 = require('../../types/reservaciones');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var querySingleReservacion = {
    type: _reservaciones3.ReservacionesType,
    args: {
        id: {
            name: 'ID',
            type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)

        }
    },

    resolve: function resolve(root, params) {
        var reservaciones = _reservaciones2.default.findById().exec();
        return reservaciones;
    }
};

exports.default = querySingleReservacion;