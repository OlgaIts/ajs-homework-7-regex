/* eslint-disable class-methods-use-this */
export default class Validator {
  validateUsername(name) {
    const regex = /^(?![_\d-])[a-zA-Z\d_-]{1,}[a-zA-Z\d]$/;
    const isValid = regex.test(name) && !/\d{4,}/.test(name);
    return isValid;
  }

  validatePhone(phone) {
    const digitsOnly = phone.replace(/[^\d+]/g, '');

    if (digitsOnly.length === 0) {
      throw new Error('Ошибка: Номер телефона должен содержать цифры');
    }

    if (digitsOnly.startsWith('8')) {
      return `+7${digitsOnly.slice(1)}`;
    }
    return digitsOnly;
  }
}
