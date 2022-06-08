  const changeCalculator = require('../change-calculator.js');

describe.only('change-calculator()', () => {
    
    test('calculate the change the customer gets back is £1', () => {
      
    // Arrange
        const change = 1
        expected = {'1': 1}

    //Act
        const result = changeCalculator(change);

    //Assert
        expect(result).toEqual(expected);

    }); 

   test('calculate the change the customer gets back is £13', () => {
      
    // Arrange
        const change = 13
        expected = {'10':1,'2':1,'1':1}

    //Act
        const result = changeCalculator(change);
    
    //Assert
        expect(result).toEqual(expected);
    
    }); 
  });