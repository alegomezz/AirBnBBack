"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var CaracteristicasSchema = new Schema({
    "nombre": {
        type: String,
        required: true
    },
    "descripcion": {
        type: String,
        required: true
    },
    "numero": {
        type: Number,
        required: true
    }
}, { collection: "Caracteristicas", timestamps: true });

exports.default = _mongoose2.default.model('Caracteristicas', CaracteristicasSchema);