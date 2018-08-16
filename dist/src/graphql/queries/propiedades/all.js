'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _propiedades = require('../../../models/propiedades');

var _propiedades2 = _interopRequireDefault(_propiedades);

var _propiedades3 = require('../../types/propiedades');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllPropiedades = {
    type: new _graphql.GraphQLList(_propiedades3.PropiedadesType),

    resolve: function resolve() {
        var propiedades = _propiedades2.default.find().exec();
        return propiedades;
    }
};

exports.default = queryAllPropiedades;