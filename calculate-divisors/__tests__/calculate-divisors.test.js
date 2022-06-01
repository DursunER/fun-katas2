const calculateDivisors = require('../calculate-divisors.js');

describe('calculate-divisors()', () => {
    
    test('checks what change the customer will get', () => {
      
    // Arrange
        const arg = 1
        const expected = 0;

    //Act
        const result = calculateDivisors(arg);

    //Assert
        expect(result).toEqual(expected);

    }); 

    test('test if argument is greater than 3', () => {
      
        // Arrange
            const arg = 10
            const expected = 23;
    
        //Act
            const result = calculateDivisors(arg);
    
        //Assert
            expect(result).toEqual(expected);
    
        }); 
  });