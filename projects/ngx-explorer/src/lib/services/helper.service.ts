import { Injectable } from '@angular/core';
import { IHelperService } from '../shared/types';

@Injectable({
    providedIn: 'root'
})
export class HelperService implements IHelperService {

    getName(data: any): string {
        return data?.name;
    }

    getFileType(data: any): string {
        return data?.fileType;
    }

    getLastModified(data: any): string {        
        return data?.lastModified;
    }

    getSize(data: any): string {
        if(data?.size === undefined){
            return '0';
        }
        return this.formatSize(data?.size);
    }

    formatSize(size: number): string {
        const byte = 1;
        const kilobyte = 1024 * byte;
        const megabyte = 1024 * kilobyte;
        const gigabyte = 1024 * megabyte;
        const terabyte = 1024 * gigabyte;

        if (size < kilobyte) {
            return size + ' bytes';
        } else if (size < megabyte) {
            return (size / kilobyte).toFixed(2) + ' KB';
        } else if (size < gigabyte) {
            return (size / megabyte).toFixed(2) + ' MB';
        } else if (size < terabyte) {
            return (size / gigabyte).toFixed(2) + ' GB';
        } else {
            return (size / terabyte).toFixed(2) + ' TB';
        }
    }
}
