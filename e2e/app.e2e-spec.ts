import { ZaferabiPage } from './app.po';

describe('zaferabi App', () => {
  let page: ZaferabiPage;

  beforeEach(() => {
    page = new ZaferabiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
