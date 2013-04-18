'use strict';

/* jasmine specs for services go here */

describe('service', function() {
  beforeEach(module('quiz-app.services'));

  var questions = [
    {
      "question": "What is the capital city of New Mexico?",
      "choice":
        [
          "Guadalajara",
          "Albuquerque",
          "Santa Fe",
          "Taos"
        ],
      "answer": "Santa Fe"
    },
    {
      "question": "Who is the author of beowulf?",
      "choice":
        [
          "Mark Twain",
          "Shakespeare",
          "Abraham Lincoln",
          "Newton"
        ],
      "answer": "Shakespeare"
    }];


  describe('resultsService', function() {
    it('Set and get results', inject(function(resultsService) {
      resultsService.setResults(questions);
      expect(resultsService.getResults()).toEqual(questions);
    }));
  });
});
