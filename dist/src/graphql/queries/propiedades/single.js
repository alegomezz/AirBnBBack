'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _propiedades = require('../../../models/propiedades');

var _propiedades2 = _interopRequireDefault(_propiedades);

var _propiedades3 = require('../../types/propiedades');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var querySinglePropiedad = {
    type: _propiedades3.PropiedadesType,
    args: {
        id: {
            name: 'ID',
            type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)

        }
    },

    resolve: function resolve(root, params) {
        var propiedad = _propiedades2.default.findById().exec();
        return propiedad;
    }
};

exports.default = querySinglePropiedad;