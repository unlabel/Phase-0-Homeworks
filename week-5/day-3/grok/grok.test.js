const funcEasy1 = require('./Easy/1.js')
const funcEasy2 = require('./Easy/2.js')
const funcEasy3 = require("./Easy/3.js")

const funcMedium1 = require('./Medium/1.js')
const funcMedium2 = require('./Medium/2.js')
const funcMedium3 = require('./Medium/3.js')

const funcHard1 = require('./Hard/1.js')
const funcHard2 = require('./Hard/2.js')
const funcHard3 = require('./Hard/3.js')

describe('Easy', () => {

  test('Sentence from an array of words', () => {
    expect(funcEasy1(['Hello', 'World', '!'])).toBe('Hello World !')
    expect(funcEasy1(['Grok', 'JS'])).toBe('Grok JS')
    expect(funcEasy1(['Grok', 'Marathon', 'Problem', 'Solving'])).toBe('Grok Marathon Problem Solving')
  })

  test("Get an object's values using a key", () => {
    const obj = {
      'James':'1000',
      'Emma':'500',
      'Robert':'200'
    }
    expect(funcEasy2(obj, 'Robert')).toBe('200')
    expect(funcEasy2(obj, 'James')).toBe('1000')
    expect(funcEasy2(obj, 'Emma')).toBe('500')

  })

  test("A given number's index in a 2D array", () => {
    const arr = [[1, 2, 3], [4, 5, 6], [7,8,9]]
    expect(funcEasy3(arr, 3)).toBe(0)
    expect(funcEasy3(arr, 9)).toBe(2)
    expect(funcEasy3(arr, 4)).toBe(1)
    expect(funcEasy3(arr, 11)).toBe(undefined)
  })
})

describe('Medium', () => {
  test('Outputting each character of a string in the terminal console', () => {
    console.log = jest.fn();
    funcMedium1('Elbrus');
    expect(console.log).toHaveBeenCalledWith('E')
    expect(console.log).toHaveBeenCalledWith('l')
    expect(console.log).toHaveBeenCalledWith('b')
    expect(console.log).toHaveBeenCalledWith('r')
    expect(console.log).toHaveBeenCalledWith('u')
    expect(console.log).toHaveBeenCalledWith('s')
  });

  test('Array of 10 random integers from 0 to 10', () => {
    const array = funcMedium2()
    expect(array).toHaveLength(10)
    for (let i = 0; i < array.length; i++) {
      expect(Number.isInteger(array[i])).toBe(true)
      expect(array[i]).toBeGreaterThanOrEqual(0)
      expect(array[i]).toBeLessThanOrEqual(10)
      
    }
    expect(funcMedium2()).not.toEqual(funcMedium2())
  });

  test('Sum of numbers in a given range', () => {
    expect(funcMedium3(1, 10)).toBe(55)
    expect(funcMedium3(4, 4)).toBe(4)
    expect(funcMedium3(5, 3)).toBe(12)
  });

})

describe('Hard', () => {

  test('Triangle with correct values', () => {
    expect(funcHard1(0,0,0)).toBe(false)
    expect(funcHard1(1,1,1)).toBe(true)
    expect(funcHard1(3,4,5)).toBe(true)
    expect(funcHard1(4,3,5)).toBe(true)
    expect(funcHard1(5,3,4)).toBe(true)
    expect(funcHard1(10, 10, 100)).toBe(false)
  });

  test('Longest string', () => {
    expect(funcHard2([])).toBe(null)
    expect(funcHard2(['cat', 'applesauce', 'apples'])).toBe('applesauce')
    expect(funcHard2(['js', 'node', 'express', 'mongoose'])).toBe('mongoose')
  });

  test('camelCase', () => {
    expect(funcHard3('elbrus_bootcamp')).toBe('elbrusBootcamp')
    expect(funcHard3('hello_world')).toBe('helloWorld')
    expect(funcHard3('js_master')).toBe('jsMaster')
  });
})
