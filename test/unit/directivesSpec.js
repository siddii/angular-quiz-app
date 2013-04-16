//'use strict';
//
///* jasmine specs for directives go here */
//
//describe('directives', function() {
//  beforeEach(module('quiz-app.directives'));
//
//  var scope, $compile;
//  beforeEach(inject(function (_$rootScope_, _$compile_, $templateCache) {
//    scope = _$rootScope_;
//    $compile = _$compile_;
//    $templateCache.put('templates/timer.html', '.<h4 class="text-center">Time Taken: {{timeTaken | timerDisplay}}</h4>');
//  }));
//
//  describe('timer', function() {
//    it('should display timer', function() {
//      inject(function($compile, $rootScope) {
//        console.log('##### element', element.html());
//        expect(element.text()).toEqual('TEST_VER');
//      });
//    });
//  });
//});
