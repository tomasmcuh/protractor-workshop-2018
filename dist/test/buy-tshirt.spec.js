"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const page_1 = require("../src/page");
describe('Buy a t-shirt', () => {
    const menuContentPage = new page_1.MenuContentPage();
    const addressStepPage = new page_1.AddressStepPage();
    const bankPaymentPage = new page_1.BankPaymentPage();
    const orderSummaryPage = new page_1.OrderSummaryPage();
    beforeEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
    });
    it('then should be bought a t-shirt', () => __awaiter(void 0, void 0, void 0, function* () {
        yield addressStepPage.goToAddressStepPage();
        yield (protractor_1.browser.sleep(3000));
        yield menuContentPage.goToTShirtMenu();
        yield (protractor_1.browser.sleep(3000));
        yield orderSummaryPage.goToOrderSummary();
        yield (protractor_1.browser.sleep(3000));
        yield protractor_1.$('[style*="display: block;"] .button-container > a').click();
        yield (protractor_1.browser.sleep(3000));
        yield protractor_1.$('.cart_navigation span').click();
        yield (protractor_1.browser.sleep(3000));
        yield protractor_1.$('#email').sendKeys('aperdomobo@gmail.com');
        yield protractor_1.$('#passwd').sendKeys('WorkshopProtractor');
        yield protractor_1.$('#SubmitLogin > span').click();
        yield (protractor_1.browser.sleep(3000));
        yield protractor_1.$('#center_column > form > p > button > span').click();
        yield (protractor_1.browser.sleep(3000));
        yield protractor_1.$('#cgv').click();
        yield (protractor_1.browser.sleep(3000));
        yield protractor_1.$('#form > p > button > span').click();
        yield (protractor_1.browser.sleep(3000));
        yield bankPaymentPage.goToBankPayment();
        yield (protractor_1.browser.sleep(3000));
        yield protractor_1.$('#cart_navigation > button > span').click();
        yield (protractor_1.browser.sleep(3000));
        yield expect(protractor_1.$('#center_column > div > p > strong').getText())
            .toBe('Your order on My Store is complete.');
    }));
});
//# sourceMappingURL=buy-tshirt.spec.js.map