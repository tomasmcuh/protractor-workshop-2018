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
class BankPaymentPage {
    constructor() {
        this.bankPayment = protractor_1.$('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
    }
    goToBankPayment() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.bankPayment.click();
        });
    }
}
exports.BankPaymentPage = BankPaymentPage;
//# sourceMappingURL=bank-payment.page.js.map