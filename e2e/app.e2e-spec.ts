import { ProjetoRevisaoPage } from './app.po';

describe('projeto-revisao App', () => {
  let page: ProjetoRevisaoPage;

  beforeEach(() => {
    page = new ProjetoRevisaoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
