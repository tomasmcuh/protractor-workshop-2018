import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private orderSummary: ElementFinder;

  constructor () {
    this.orderSummary = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async goToOrderSummary(): Promise<void> {
    await this.orderSummary.click();
  }
}
