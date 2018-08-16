'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _graphql = require('graphql');

var _propiedades = require('../../../models/propiedades');

var _propiedades2 = _interopRequireDefault(_propiedades);

var _propiedades3 = require('../../types/propiedades');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _propiedades3.PropiedadesType,
    args: {
        id: {
            name: 'ID',
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        },
        data: {
            name: 'data',
            type: new _graphql.GraphQLNonNull(_propiedades3.PropiedadesInputType)
        }
    },
    resolve: function resolve(root, params) {
        return _propiedades2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }, { new: true }).then(function (propiedad) {
            return propiedad;
        }).catch(function (erre) {
            return Error('error al hacer el update');
        });
    }
};