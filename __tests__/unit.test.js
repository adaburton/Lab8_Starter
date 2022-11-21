// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('tests whether \'(123) 456-7890\' is a phone number', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('tests whether \'123-456-7890\' is a phone number', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('tests whether \'123\' is a phone number', () => {
    expect(functions.isPhoneNumber('123')).toBe(false);
}); 

test('tests whether \'moms number\' is a phone number', () => {
    expect(functions.isPhoneNumber('moms number')).toBe(false);
});

test('tests whether \'name@domain.com\' is a valid email', () => {
    expect(functions.isEmail('name@domain.com')).toBe(true);
});

test('tests whether \'john_doe@email.net\' is a valid email', () => {
    expect(functions.isEmail('john_doe@email.net')).toBe(true);
});

test('tests whether \'john@email\' is a valid email', () => {
    expect(functions.isEmail('john@email')).toBe(false);
});

test('tests whether \'gmail.com\' is a valid email', () => {
    expect(functions.isEmail('gmail.com')).toBe(false);
});

test('tests whether \'Brad\' is a valid password', () => {
    expect(functions.isStrongPassword('Brad')).toBe(true);
});

test('tests whether \'R0ver\' is a valid password', () => {
    expect(functions.isStrongPassword('R0ver')).toBe(true);
});

test('tests whether \'x\' is a valid password', () => {
    expect(functions.isStrongPassword('x')).toBe(false);
});

test('tests whether \'~~~~\' is a valid password', () => {
    expect(functions.isStrongPassword('~~~~')).toBe(false);
});

test('tests whether \'1/2/3456\' is a valid date', () => {
    expect(functions.isDate('1/2/3456')).toBe(true);
});

test('tests whether \'01/2/3456\' is a valid date', () => {
    expect(functions.isDate('01/2/3456')).toBe(true);
});

test('tests whether \'01/2/22\' is a valid date', () => {
    expect(functions.isDate('01/2/22')).toBe(false);
});

test('tests whether \'2/22\' is a valid date', () => {
    expect(functions.isDate('/2/22')).toBe(false);
});

test('tests whether \'#FFF\' is a valid hex color', () => {
    expect(functions.isHexColor('#FFF')).toBe(true);
});

test('tests whether \'#A1B2C3\' is a valid hex color', () => {
    expect(functions.isHexColor('#A1B2C3')).toBe(true);
});

test('tests whether \'#A1B2C\' is a valid hex color', () => {
    expect(functions.isHexColor('#A1B2C')).toBe(false);
});

test('tests whether \'#A1B2\' is a valid hex color', () => {
    expect(functions.isHexColor('#A1B2')).toBe(false);
});