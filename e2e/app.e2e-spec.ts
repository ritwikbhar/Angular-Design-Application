import { DesignAppPage } from './app.po';

describe('design-app App', function() {
  let page: DesignAppPage;

  beforeEach(() => {
    page = new DesignAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
