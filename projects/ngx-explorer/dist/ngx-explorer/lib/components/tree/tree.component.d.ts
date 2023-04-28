import { OnDestroy } from '@angular/core';
import { ExplorerService } from '../../services/explorer.service';
import { HelperService } from '../../services/helper.service';
import { INode } from '../../shared/types';
interface TreeNode extends INode {
    children: TreeNode[];
    expanded: boolean;
}
export declare class TreeComponent implements OnDestroy {
    private explorerService;
    private helperService;
    treeNodes: TreeNode[];
    private expandedIds;
    private sub;
    constructor(explorerService: ExplorerService, helperService: HelperService);
    open(node: INode): void;
    expand(node: INode): void;
    collapse(node: INode): void;
    getName(node: INode): string;
    ngOnDestroy(): void;
    private buildTree;
    private addExpandedNode;
    private removeExpandedNode;
}
export {};
