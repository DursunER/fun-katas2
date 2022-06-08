const herdTheBabies = require('../herd-the-babies.js')

describe('takes a string as its argument and sorts in alphabetical order', () => {

test('check if the input string is empty', () => {
// Arange
let str = ""
const expected = ""

// Act
const result = herdTheBabies(str);

// Asert
expect(result).toEqual(expected);

});

test('check if the input string is a single char', () => {
    // Arange
    let str = "aA"
    const expected = "Aa"
    
    // Act
    const result = herdTheBabies(str);
    
    // Asert
    expect(result).toEqual(expected);
    
    });

test.only('when one or more characters entered to be sorted in alpabetical order', () => {

// Arrange
let str = 'AaBbbBaAbAbbAbB';
const expected = 'AAAAaaBBBbbbbbb';

//Act
const result = herdTheBabies(str);

//Assert
expect(result).toEqual(expected)

})

});