import { CounterForMySonUiPage } from './app.po';

describe('counter-for-my-son-ui App', () => {
  let page: CounterForMySonUiPage;

  beforeEach(() => {
    page = new CounterForMySonUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
