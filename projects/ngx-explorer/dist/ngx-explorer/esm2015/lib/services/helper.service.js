import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class HelperService {
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
}
HelperService.ɵprov = i0.ɵɵdefineInjectable({ factory: function HelperService_Factory() { return new HelperService(); }, token: HelperService, providedIn: "root" });
HelperService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbmd4LWV4cGxvcmVyL25neC1leHBsb3Jlci9wcm9qZWN0cy9uZ3gtZXhwbG9yZXIvc3JjLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2hlbHBlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNDLE1BQU0sT0FBTyxhQUFhO0lBRXRCLE9BQU8sQ0FBQyxJQUFTO1FBQ2IsT0FBTyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsSUFBSSxDQUFDO0lBQ3RCLENBQUM7Ozs7WUFQSixVQUFVLFNBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJSGVscGVyU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC90eXBlcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSGVscGVyU2VydmljZSBpbXBsZW1lbnRzIElIZWxwZXJTZXJ2aWNlIHtcblxuICAgIGdldE5hbWUoZGF0YTogYW55KTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGRhdGE/Lm5hbWU7XG4gICAgfVxufVxuIl19