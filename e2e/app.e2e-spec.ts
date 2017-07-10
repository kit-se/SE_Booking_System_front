import { SeBookingSystemPage } from './app.po';

describe('se-booking-system App', () => {
  let page: SeBookingSystemPage;

  beforeEach(() => {
    page = new SeBookingSystemPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
