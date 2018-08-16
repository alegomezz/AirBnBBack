'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _propiedades = require('./propiedades');

var _propiedades2 = _interopRequireDefault(_propiedades);

var _servicio = require('./servicio');

var _servicio2 = _interopRequireDefault(_servicio);

var _caracteristica = require('./caracteristica');

var _caracteristica2 = _interopRequireDefault(_caracteristica);

var _reservacion = require('./reservacion');

var _reservacion2 = _interopRequireDefault(_reservacion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _user2.default, _propiedades2.default, _servicio2.default, _caracteristica2.default, _reservacion2.default);