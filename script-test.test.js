const capitalize = require('./capitalize');
const reverse = require('./reverse');
const calculator = require('./calculator');
const caesarCipher = require('./caesar_cipher.js')
const analyzeArray = require('./analyze_array.js')


test('capitalize string', () => {
    expect(capitalize('hELLO')).toMatch('Hello');
})

test('reverse string', () => {
    expect(reverse('hello')).toMatch('olleh');
})

test('calculator', () => {
    expect(calculator.sum(1,2)).toBe(3);
    expect(calculator.subtract(1,2)).toBe(-1);
    expect(calculator.multiply(1,2)).toBe(2);
    expect(calculator.divide(2,2)).toBe(1);
})

test('Caesar Cipher', () => {
    expect(caesarCipher('hello', 2)).toMatch('jgnnq')
    expect(caesarCipher('HeLLo!',3)).toMatch('KhOOr!')
})

test('analyze array', () => {
    expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4)
    expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1)
    expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8)
    expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6)
})