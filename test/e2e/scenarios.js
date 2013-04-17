'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('quiz app', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });


  it('should automatically redirect to /questions when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe("/questions");
  });


  describe('questions', function() {

    beforeEach(function() {
      browser().navigateTo('#/questions');
    });


    it('should render the first question', function() {
      expect(element('[ng-view] .page-header').text()).
        toMatch(/Quiz App/);
    });

  });

});
