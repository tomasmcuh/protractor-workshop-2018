import { browser } from 'protractor';

export class AddressStepPage {

    public async goToAddressStepPage(): Promise<void> {
    await browser.get('http://automationpractice.com/');
  }
}
