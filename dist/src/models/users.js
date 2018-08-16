'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SALT = 10;

var Schema = _mongoose2.default.Schema;

var UserSchema = new Schema({
    "nombre": {
        type: String,
        required: true
    },
    "apellidos": {
        type: String,
        required: true
    },
    "correo": {
        type: String,
        required: true
    },
    "fecha_nacimiento": {
        type: Date
    },
    "password": {
        type: String,
        required: true
    },
    "username": {
        type: String,
        required: true,
        unique: true
    },
    "foto": {
        type: String,
        default: "https://c1.staticflickr.com/9/8149/7694193900_3d268cfc80.jpg"
    },
    "genero": {
        type: String,
        required: true
    },
    "pais": {
        type: String
    },
    "ubicacion": {
        type: String,
        required: true
    },
    "rol": {
        type: String,
        required: true
    },
    "user_pay": {
        type: String
    }
}, { collection: "Users", timestamps: true });

UserSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) {
        return next();
    }
    _bcrypt2.default.genSalt(SALT, function (err, salt) {
        if (err) return next(err);
        _bcrypt2.default.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function (inputPassword, cb) {
    _bcrypt2.default.compare(inputPassword, this.password, function (err, isMatch) {
        cb(null, isMatch);
    });
};

exports.default = _mongoose2.default.model('Users', UserSchema);