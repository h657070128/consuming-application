import { ConsumingApplicationPage } from './app.po';

describe('consuming-application App', () => {
  let page: ConsumingApplicationPage;

  beforeEach(() => {
    page = new ConsumingApplicationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
