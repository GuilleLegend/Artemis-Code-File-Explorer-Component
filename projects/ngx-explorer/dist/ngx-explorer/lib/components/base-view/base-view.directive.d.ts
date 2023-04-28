import { OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { INode } from '../../shared/types';
import { ExplorerService } from '../../services/explorer.service';
import { HelperService } from '../../services/helper.service';
export declare class BaseView implements OnDestroy {
    protected explorerService: ExplorerService;
    protected helperService: HelperService;
    private filter;
    selection: INode[];
    items: INode[];
    dragging: boolean;
    protected subs: Subscription;
    constructor(explorerService: ExplorerService, helperService: HelperService, filter: BehaviorSubject<string>);
    get filteredItems(): INode[];
    getDisplayName(data: any): string;
    getFileType(data: any): string;
    getLastModified(data: any): string;
    getSize(data: any): string;
    select(event: MouseEvent, item: INode): void;
    open(event: MouseEvent, item: INode): void;
    dbClick(item: INode): void;
    dbSelect(item: INode): void;
    emptyClick(): void;
    openLeaf(event: MouseEvent, item: INode): void;
    isSelected(item: INode): boolean;
    emptySpaceClick(): void;
    ngOnDestroy(): void;
}
