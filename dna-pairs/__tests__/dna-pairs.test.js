const dnaPairs = require('../dna-pairs.js');

describe('dnaPairs()', () => {
  test('if a given a empty string return empty array', () => {

    // Arrange
    const dna = ""
    expected = [];

    // Act
    const result = dnaPairs(dna)

    // Assert
    expect(result).toEqual(expected);

  });

  test('if a given a single dna base return corresponding pair ', () => {

    // Arrange
    const dna = "AG"
    expected = [["A", "T"], ["A", "C"]];

    // Act
    const result = dnaPairs(dna)

    // Assert
    expect(result).toBe(expected);

  });
});
