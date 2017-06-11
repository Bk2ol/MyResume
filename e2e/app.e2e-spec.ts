import { WebResumePage } from './app.po';

describe('web-resume App', () => {
  let page: WebResumePage;

  beforeEach(() => {
    page = new WebResumePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
