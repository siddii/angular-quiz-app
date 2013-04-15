'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('quiz-app.services', [])
  .service('resultsService', function (){
     var _questions;
    return {
      setResults: function(questions) {
        _questions = questions;
      },
      getResults: function (){
        return _questions;
      }
    };
  });
