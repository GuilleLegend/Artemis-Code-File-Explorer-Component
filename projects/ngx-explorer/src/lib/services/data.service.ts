import { Injectable } from '@angular/core';
import { IDataService } from '../shared/types';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export abstract class DataService implements IDataService<any> {
    abstract getNodeChildren(node: any);
    abstract createNode(parentNode: any, name: any);
    abstract renameNode(node: any, newName: string);
    abstract renameLeaf(node: any, newName: string);
    abstract deleteNodes(nodes: any[]);
    abstract deleteLeafs(nodes: any[]);
    abstract uploadFiles(node: any, files: File[]);
    abstract download(node: any); // TODO multple download. should be configurable in settings
    abstract openLeaf(node:any);
    abstract open(node:any);
    abstract share(node:any);
    abstract rightClick(node:any);
    abstract leftClick(node:any);
    abstract emptyClick();
    abstract getCurrentPath(path:string);
    // move(from to) // TODO: on/off in settings
    // copyPaste(from to) // TODO: on/off in settings
    // cutPaste(from to) // TODO: on/off in settings
}
