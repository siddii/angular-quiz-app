'use strict';


// Declare app level module which depends on filters, and services
angular.module('quiz-app', ['quiz-app.filters', 'quiz-app.services', 'quiz-app.directives']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/questions', {templateUrl: 'templates/questions.html', controller: QuestionsController});

//  $routeProvider.when('/question', {templateUrl: 'templates/question.html', controller: QuestionController});
    $routeProvider.otherwise({redirectTo: '/questions'});
  }]);
