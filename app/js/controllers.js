'use strict';

/* Controllers */

function QuestionsController($scope, $http) {
  $http.get('/app/services/questions.json').success(function (questions){
    $scope.questions = questions;
  });

  $scope.selectAnswer = function (question, choice) {
    question.selected = choice;
  } ;
}


function QuestionController() {

}

//MyCtrl1.$inject = [];
//MyCtrl2.$inject = [];
