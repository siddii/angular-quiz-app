'use strict';

/* Controllers */

function QuestionsController($scope, $http, $routeParams, $location, $resultsService) {

  $scope.questionNo = $routeParams && $routeParams.questionNo ? $routeParams.questionNo : 0;
  $http.get('/app/services/questions.json').success(function (questions){
    $scope.questions = questions;
  });

  $scope.selectAnswer = function (question, choice) {
    question.selected = choice;
  };


  $scope.viewResults = function () {
    $resultsService.setResults($scope.questions);
    $location.path( "/results" );
  }
}
QuestionsController.$inject = ['$scope', '$http', '$routeParams', '$location', 'resultsService'];

function ResultsController ($scope, $location, $resultsService) {
  $scope.results = $resultsService.getResults();
  $('#results').modal();


  $scope.closeModal = function() {
    $('#results').modal('hide');
    $location.path('/questions/'+($scope.results.length - 1));
  }
}
ResultsController.$inject = ['$scope', '$location', 'resultsService'];

