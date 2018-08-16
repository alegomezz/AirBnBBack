'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var ReservacionesSchema = new Schema({
    "user": {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    "propiedad": {
        type: Schema.Types.ObjectId,
        ref: 'Propiedades',
        required: true
    },
    "status_pago": {
        type: Boolean,
        required: true,
        default: false
    },
    "numero_personas": {
        type: Number,
        required: true,
        default: 1
    },
    "status_reservacion": {
        type: Boolean,
        required: true,
        default: false
    },
    "cargo_extra": {
        type: Number
    }
}, { collection: 'Reservaciones', timestamps: true });

exports.default = _mongoose2.default.model('Reservaciones', ReservacionesSchema);