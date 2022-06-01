  const changeCalculator = require('../change-calculator.js');

describe.only('change-calculator()', () => {
    
    test('calculate the change the customer gets backis £1', () => {
      
    // Arrange
        const change = 1
        expected = {'1': 1}

    //Act
        const result = changeCalculator(change);

    //Assert
        expect(result).toEqual(expected);

    }); 

   test ('calculate the change the customer gets backis £13', () => {
      
    // Arrange
        const change = 14
        expected = {'10':1,'2':1,'1':1}

    //Act
        const result = changeCalculator(change);
    
    //Assert
        expect(result).toEqual(expected);
    
    }); 
  });