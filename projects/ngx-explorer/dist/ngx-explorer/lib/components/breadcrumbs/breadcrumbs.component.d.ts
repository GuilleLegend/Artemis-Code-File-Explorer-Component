import { OnDestroy } from '@angular/core';
import { INode } from '../../shared/types';
import { ExplorerService } from '../../services/explorer.service';
import { HelperService } from '../../services/helper.service';
import { ConfigProvider } from '../../services/config.provider';
interface Breadcrumb {
    node: INode;
    name: string;
}
export declare class BreadcrumbsComponent implements OnDestroy {
    private explorerService;
    private helperService;
    private config;
    breadcrumbs: Breadcrumb[];
    private sub;
    constructor(explorerService: ExplorerService, helperService: HelperService, config: ConfigProvider);
    private buildBreadcrumbs;
    click(crumb: Breadcrumb): void;
    ngOnDestroy(): void;
}
export {};
