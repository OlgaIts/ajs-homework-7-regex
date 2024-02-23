import Validator from '../validator';

describe('Класс Validator', () => {
  const valid = new Validator();

  test('Валидные имена', () => {
    expect(valid.validateUsername('name')).toBe(true);
    expect(valid.validateUsername('name777')).toBe(true);
    expect(valid.validateUsername('name_777')).toBe(true);
    expect(valid.validateUsername('name-777')).toBe(true);
    expect(valid.validateUsername('name__777')).toBe(true);
  });

  test('Невалидные имена', () => {
    expect(valid.validateUsername('777name')).toBe(false);
    expect(valid.validateUsername('name7788')).toBe(false);
    expect(valid.validateUsername('name?777')).toBe(false);
  });

  test('Валидные номера телефонов', () => {
    expect(valid.validatePhone('8 (927) 000-00-00')).toBe('+79270000000');
    expect(valid.validatePhone('+7 960 000 00 00')).toBe('+79600000000');
    expect(valid.validatePhone('+86 000 000 0000')).toBe('+860000000000');
  });

  test('Ошибка, невалидный номер телефона', () => {
    expect(() => valid.validatePhone('номер телефона')).toThrowError('Ошибка: Номер телефона должен содержать цифры');
  });
});
