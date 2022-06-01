const getTweetData = require('../get-tweet-data.js');

describe('getTweetData()', () => {
  test('tweet string with no tags, no mentions', () => {

      // Arrange

      const tweet = "My awesome tweet"
      expected = { tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 16 }

      // Act
      const result = getTweetData(tweet)

      // Assert
      expect(result).toEqual(expected);

  }); 

  test('tweet with one tag and one mention', () => {

      // Arrange
      const tweet = "My awesome tweet about #coding to @northcoders"
      expected = { tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 46 }

      // Act
      const result = getTweetData(tweet)

      // Assert
      expect(result).toEqual(expected);

  }); 
});
