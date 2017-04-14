import { Angular2ActionPage } from './app.po';

describe('angular2-action App', () => {
  let page: Angular2ActionPage;

  beforeEach(() => {
    page = new Angular2ActionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
