'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _graphql = require('graphql');

var _reservaciones = require('../../../models/reservaciones');

var _reservaciones2 = _interopRequireDefault(_reservaciones);

var _reservaciones3 = require('../../types/reservaciones');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _reservaciones3.ReservacionesType,
    args: {
        id: {
            name: 'ID',
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        },
        data: {
            name: 'data',
            type: new _graphql.GraphQLNonNull(_reservaciones3.ReservacionesInputType)
        }
    },
    resolve: function resolve(root, params) {
        return _reservaciones2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }, { new: true }).then(function (reservacion) {
            return reservacion;
        }).catch(function (erre) {
            return Error('Error al hacer el update');
        });
    }
};