import { HackathonPage } from './app.po';

describe('hackathon App', () => {
  let page: HackathonPage;

  beforeEach(() => {
    page = new HackathonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
