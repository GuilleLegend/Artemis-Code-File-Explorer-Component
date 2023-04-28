import { INode } from '../shared/types';
import { DataService } from './data.service';
export declare class ExplorerService {
    private dataService;
    private internalTree;
    private flatPointers;
    private readonly selectedNodes$;
    private readonly openedNode$;
    private readonly breadcrumbs$;
    private readonly tree$;
    readonly selectedNodes: import("rxjs").Observable<INode[]>;
    readonly openedNode: import("rxjs").Observable<INode>;
    readonly breadcrumbs: import("rxjs").Observable<INode[]>;
    readonly tree: import("rxjs").Observable<INode>;
    constructor(dataService: DataService);
    selectNodes(nodes: INode[]): void;
    openNode(id: number): void;
    dbClick(target: INode): void;
    dbSelect(target: INode): void;
    emptyClick(): void;
    openLeaf(target: INode): void;
    expandNode(id: number): void;
    createNode(name: string): void;
    refresh(): void;
    rename(name: string): void;
    remove(): void;
    upload(files: File[]): void;
    download(): void;
    open(): void;
    share(): void;
    private getNodeChildren;
}