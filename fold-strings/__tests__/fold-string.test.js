const foldString = require('../fold-string.js');

describe('foldString()', () => {
  test('if a given string length is even and turn string inside out', () => {

    // Arrange

    str = "code"
    expected = "oced"

    // Act
    const result = foldString(str)

    // Assert
    expect(result).toEqual(expected);

  });

  test('if a given string length is odd and turn string inside out', () => {

    // Arrange
    str = "Northcoders"
    expected = "htroNcsredo"

    // Act
    const result = foldString(str)

    // Assert
    expect(result).toBe(expected);

  });
});
