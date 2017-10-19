import { AtranNgPage } from './app.po';

describe('atran-ng App', () => {
  let page: AtranNgPage;

  beforeEach(() => {
    page = new AtranNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
