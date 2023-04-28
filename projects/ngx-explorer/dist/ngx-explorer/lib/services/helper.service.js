import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let HelperService = class HelperService {
    getName(data) {
        return data === null || data === void 0 ? void 0 : data.name;
    }
};
HelperService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], HelperService);
export { HelperService };
//# sourceMappingURL=helper.service.js.map