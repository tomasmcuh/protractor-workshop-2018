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
class OrderSummaryPage {
    constructor() {
        this.orderSummary = protractor_1.$('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
    }
    goToOrderSummary() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.orderSummary.click();
        });
    }
}
exports.OrderSummaryPage = OrderSummaryPage;
//# sourceMappingURL=order-summary.page.js.map