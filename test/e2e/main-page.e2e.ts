describe('App', () => {
  
  beforeEach(() => {
    browser.get('/');
  });
  
  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'McDonald\'s Application';
    expect(subject).toEqual(result);
  });
  
  it('should have header', () => {
    let subject = element(by.css('h1')).isPresent();
    let result  = true;
    expect(subject).toEqual(result);
  });

});
