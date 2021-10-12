const { isEmail } = require('validator');
const validator = require('validator');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'Вадим',
    minlength: 2,
    maxlength: 30,
  },

  about: {
    type: String,
    default: 'Черепанов',
    minlength: 2,
    maxlength: 30,
  },

  avatar: {
    type: String,
    default: 'https://sun1-15.userapi.com/s/v1/ig2/ts7ZfpwHQSt8LDJCNHuZ_2x_mrgvOeBgaSiqTBuDtpxu0XlK_Pw4KkTuaTjbLLuaNvUECuvgrRx4_dLXyrt-acr7.jpg?size=400x0&quality=96&crop=57,21,297,311&ava=1',
    validate: {
      validator: (avatar) => validator.isURL(avatar),
      message: 'Ошибка валидации',
    },
  },

  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: (v) => isEmail(v),
      message: 'Неправильный формат почты',
    },
  },

  password: {
    type: String,
    required: true,
    select: false,
  },
});

module.exports = mongoose.model('user', userSchema);
