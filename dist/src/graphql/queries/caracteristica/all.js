'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _caracteristicas = require('../../../models/caracteristicas');

var _caracteristicas2 = _interopRequireDefault(_caracteristicas);

var _caracteristicas3 = require('../../types/caracteristicas');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllCaracteristicas = {
    type: new _graphql.GraphQLList(_caracteristicas3.CaracteristicasType),

    resolve: function resolve() {
        var caracteristicas = _caracteristicas2.default.find().exec();
        return caracteristicas;
    }
};

exports.default = queryAllCaracteristicas;