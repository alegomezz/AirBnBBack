'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propiedades = require('../../types/propiedades');

exports.default = {
    type: _propiedades.PropiedadesType,
    resolve: function resolve(root, params, context) {
        return context.user;
    }
};