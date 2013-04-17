'use strict';

/* jasmine specs for controllers go here */
describe('Quiz App controllers', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  var mockQuestions = [
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

  beforeEach(module('quiz-app.services'));


  describe('QuestionsController', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/app/questions/questions.json').
        respond(mockQuestions);

      scope = $rootScope.$new();
      ctrl = $controller(QuestionsController, {$scope: scope});
    }));


    it('should return 2 questions', function() {
      $httpBackend.flush();

      expect(scope.questions).toEqualData(
        mockQuestions);
    });
  });

});
