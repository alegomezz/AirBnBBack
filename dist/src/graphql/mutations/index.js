'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _servicios = require('./servicios');

var _servicios2 = _interopRequireDefault(_servicios);

var _propiedades = require('./propiedades');

var _propiedades2 = _interopRequireDefault(_propiedades);

var _caracteristicas = require('./caracteristicas');

var _caracteristicas2 = _interopRequireDefault(_caracteristicas);

var _reservaciones = require('./reservaciones');

var _reservaciones2 = _interopRequireDefault(_reservaciones);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _servicios2.default, _propiedades2.default, _caracteristicas2.default, _reservaciones2.default);