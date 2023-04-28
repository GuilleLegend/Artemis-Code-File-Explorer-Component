import { IDataService } from '../shared/types';
export declare abstract class DataService implements IDataService<any> {
    abstract getNodeChildren(node: any): any;
    abstract createNode(parentNode: any, name: any): any;
    abstract renameNode(node: any, newName: string): any;
    abstract renameLeaf(node: any, newName: string): any;
    abstract deleteNodes(nodes: any[]): any;
    abstract deleteLeafs(nodes: any[]): any;
    abstract uploadFiles(node: any, files: File[]): any;
    abstract download(node: any): any;
    abstract openLeaf(node: any): any;
    abstract open(node: any): any;
    abstract share(node: any): any;
    abstract rightClick(node: any): any;
    abstract leftClick(node: any): any;
    abstract emptyClick(): any;
    abstract getCurrentPath(path: string): any;
}
