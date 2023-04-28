import { INode, Dictionary } from './types';
export declare class Utils {
    private static id;
    static createNode(parentId?: number, isLeaf?: boolean, data?: any): INode;
    static buildBreadcrumbs(flatPointers: Dictionary<INode>, node: INode): INode[];
    static compareObjects(a: any, b: any): boolean;
}
