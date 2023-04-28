import { IHelperService } from '../shared/types';
export declare class HelperService implements IHelperService {
    getName(data: any): string;
    getFileType(data: any): string;
    getLastModified(data: any): string;
    getSize(data: any): string;
    formatSize(size: number): string;
}
