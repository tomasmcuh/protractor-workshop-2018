import { $, browser } from 'protractor';
import { MenuContentPage, AddressStepPage, BankPaymentPage, OrderSummaryPage } from '../src/page';


describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await addressStepPage.goToAddressStepPage();
    await(browser.sleep(3000));
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    await orderSummaryPage.goToOrderSummary();
    await(browser.sleep(3000));
    await $('[style*="display: block;"] .button-container > a').click();
    await(browser.sleep(3000));
    await $('.cart_navigation span').click();
    await(browser.sleep(3000));

    await $('#email').sendKeys('aperdomobo@gmail.com');
    await $('#passwd').sendKeys('WorkshopProtractor');
    await $('#SubmitLogin > span').click();
    await(browser.sleep(3000));

    await $('#center_column > form > p > button > span').click();
    await(browser.sleep(3000));

    await $('#cgv').click();
    await(browser.sleep(3000));

    await $('#form > p > button > span').click();
    await(browser.sleep(3000));
    await bankPaymentPage.goToBankPayment();
    await(browser.sleep(3000));
    await $('#cart_navigation > button > span').click();
    await(browser.sleep(3000));

    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });
});
