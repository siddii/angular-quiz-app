'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('quiz app default route', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
    expect(browser().location().url()).toBe('/questions');
  });

  it('should automatically redirect to /questions when location hash/fragment is empty', function() {
    describe('questions', function() {

      it('should render the first question', function() {
        expect(element('.page-header').text()).
          toMatch(/Quiz App/);

        expect(element('.carousel-inner .active .question').text()).
          toMatch(/What is the capital city of New Mexico?/);
      });

    });
  });
});


describe('quiz app route to specific question', function() {

  beforeEach(function() {
    browser().navigateTo('#/questions/2');
  });

  it('should render the second question', function() {
    expect(element('.page-header').text()).
      toMatch(/Quiz App/);

    expect(element('.carousel-inner .active .question').text()).
      toMatch(/Who is the author of beowulf?/);
  });

});


