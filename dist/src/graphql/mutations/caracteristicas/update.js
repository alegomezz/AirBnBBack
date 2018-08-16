'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
        },
        data: {
            name: 'data',
            type: new _graphql.GraphQLNonNull(_caracteristicas3.CaracteristicasInputType)
        }
    },
    resolve: function resolve(root, params) {
        return _caracteristicas2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params) }, { new: true }).then(function (caracteristica) {
            return caracteristica;
        }).catch(function (erre) {
            return Error('Error al hacer el update');
        });
    }
};