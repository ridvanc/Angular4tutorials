import { Angular4tutorialsPage } from './app.po';

describe('angular4tutorials App', () => {
  let page: Angular4tutorialsPage;

  beforeEach(() => {
    page = new Angular4tutorialsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
