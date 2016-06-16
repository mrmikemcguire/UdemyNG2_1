import { UdemyNG2Page } from './app.po';

describe('udemy-ng2 App', function() {
  let page: UdemyNG2Page;

  beforeEach(() => {
    page = new UdemyNG2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
