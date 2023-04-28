import { ElementRef, OnDestroy } from '@angular/core';
import { ExplorerService } from '../../services/explorer.service';
import { HelperService } from '../../services/helper.service';
export declare class MenuBarComponent implements OnDestroy {
    private explorerService;
    private helperService;
    uploader: ElementRef;
    canDownload: boolean;
    canDelete: boolean;
    canRename: boolean;
    canOpen: boolean;
    canShare: boolean;
    private sub;
    private selection;
    constructor(explorerService: ExplorerService, helperService: HelperService);
    open(): void;
    share(): void;
    createFolder(): void;
    refresh(): void;
    rename(): void;
    remove(): void;
    openUploader(): void;
    handleFiles(files: File[]): void;
    download(): void;
    ngOnDestroy(): void;
}
