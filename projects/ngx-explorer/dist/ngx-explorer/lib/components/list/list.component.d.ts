import { BehaviorSubject } from 'rxjs';
import { ExplorerService } from '../../services/explorer.service';
import { HelperService } from '../../services/helper.service';
import { BaseView } from '../base-view/base-view.directive';
import { INode } from 'ngx-explorer';
export declare class ListComponent extends BaseView {
    readonly icons: {
        node: string;
        leaf: string;
    };
    constructor(explorerService: ExplorerService, helperService: HelperService, filter: BehaviorSubject<string>);
    orderByName(): void;
    orderBySize(): void;
    orderByDate(): void;
    openner(event: MouseEvent, item: INode): void;
    rightClick(event: MouseEvent, item: INode): void;
    select(event: MouseEvent, item: INode): void;
    emptySpaceClick(): void;
    getIcons(item: any): string;
    getIconByFileType(data: any): string;
    photoMap: {
        'application/pdf': string;
        'application/msword': string;
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': string;
        'application/vnd.oasis.opendocument.presentation': string;
        'application/vnd.oasis.opendocument.spreadsheet': string;
        'application/vnd.ms-powerpoint': string;
        'application/vnd.openxmlformats-officedocument.presentationml.presentation': string;
        'text/plain': string;
        'video/mp4': string;
        'application/vnd.ms-excel': string;
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': string;
        'image/jpeg': string;
        'image/png': string;
        'audio/x-ms-wma': string;
        'audio/mpeg': string;
        'audio/webm': string;
        'audio/ogg': string;
        'audio/wav': string;
        'application/x-msdownload': string;
        'application/zip': string;
        'image/svg+xml': string;
    };
}
