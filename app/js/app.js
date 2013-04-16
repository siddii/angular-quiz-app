'use strict';


// Declare app level module which depends on filters, services & directives
angular.module('quiz-app', ['quiz-app.filters', 'quiz-app.services', 'quiz-app.directives']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/questions', {templateUrl: 'templates/questions.html', controller: QuestionsController});
  $routeProvider.when('/questions/:questionNo', {templateUrl:'templates/questions.html', controller:QuestionsController});

  $routeProvider.when('/results', {templateUrl:'templates/results.html', controller:ResultsController});

  $routeProvider.otherwise({redirectTo:'/questions'});
}]);
