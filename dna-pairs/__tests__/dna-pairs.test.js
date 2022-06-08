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

  test('if a given a single dna pair string return corresponding pair array', () => {
     // Arrange
     const dna = "G"
     expected = [ ["G", "C"] ];
 
     // Act
     const result = dnaPairs(dna)
 
     // Assert
     expect(result).toEqual(expected);
 
   });

  test('if a given a two dna bases return corresponding pairs ', () => {

    // Arrange
    const dna = "AG"
    expected = [ ["A", "T"], ["G", "C"] ];

    // Act
    const result = dnaPairs(dna)

    // Assert
    expect(result).toEqual(expected);

  });

  test('if given two or more dna bases return correspondingg pairs', () => {

    //Arange
    const dna = "ATAG"
    expected = [ ["A", "T"], ["T", "A"], ["A", "T"], ["G", "C"] ]

    //Act
    const result = dnaPairs(dna)

    //Assert
    expect(result).toEqual(expected)
    
  })

});
