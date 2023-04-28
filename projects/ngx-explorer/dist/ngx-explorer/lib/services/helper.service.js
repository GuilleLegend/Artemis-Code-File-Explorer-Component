import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let HelperService = class HelperService {
    getName(data) {
        return data === null || data === void 0 ? void 0 : data.name;
    }
    getFileType(data) {
        return data === null || data === void 0 ? void 0 : data.fileType;
    }
    getLastModified(data) {
        return data === null || data === void 0 ? void 0 : data.lastModified;
    }
    getSize(data) {
        if ((data === null || data === void 0 ? void 0 : data.size) === undefined) {
            return '0';
        }
        return this.formatSize(data === null || data === void 0 ? void 0 : data.size);
    }
    formatSize(size) {
        const byte = 1;
        const kilobyte = 1024 * byte;
        const megabyte = 1024 * kilobyte;
        const gigabyte = 1024 * megabyte;
        const terabyte = 1024 * gigabyte;
        if (size < kilobyte) {
            return size + ' bytes';
        }
        else if (size < megabyte) {
            return (size / kilobyte).toFixed(2) + ' KB';
        }
        else if (size < gigabyte) {
            return (size / megabyte).toFixed(2) + ' MB';
        }
        else if (size < terabyte) {
            return (size / gigabyte).toFixed(2) + ' GB';
        }
        else {
            return (size / terabyte).toFixed(2) + ' TB';
        }
    }
};
HelperService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], HelperService);
export { HelperService };
//# sourceMappingURL=helper.service.js.map