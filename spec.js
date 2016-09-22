

describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.ignoreSynchronization=true;
    browser.get('https://www.onliner.by/');
    browser.getTitle().then(function(title) {
            expect(title).toBe('Onliner.by');
            console.log(title);
        });
it('input responce', function(){
     browser.ignoreSynchronization=true;
    browser.get('https://www.onliner.by/');
    browser.getText('a=Apple iPhone 6s 16GB Silver').then(function() {
   
    element(by.class('')).sendKeys('phone 6s 16gb Silver');
})

  //  expect(browser.getTitle()).toBe('Onliner.by');
  });
});
