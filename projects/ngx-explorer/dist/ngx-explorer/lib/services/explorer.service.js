import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Utils } from '../shared/utils';
let ExplorerService = class ExplorerService {
    constructor(dataService) {
        this.dataService = dataService;
        this.internalTree = Utils.createNode();
        this.flatPointers = { [this.internalTree.id]: this.internalTree };
        this.selectedNodes$ = new BehaviorSubject([]);
        this.openedNode$ = new BehaviorSubject(undefined);
        this.breadcrumbs$ = new BehaviorSubject([]);
        this.tree$ = new BehaviorSubject(this.internalTree);
        this.selectedNodes = this.selectedNodes$.asObservable();
        this.openedNode = this.openedNode$.asObservable();
        this.breadcrumbs = this.breadcrumbs$.asObservable();
        this.tree = this.tree$.asObservable();
        this.openNode(this.internalTree.id);
    }
    selectNodes(nodes) {
        this.selectedNodes$.next(nodes);
    }
    openNode(id) {
        this.getNodeChildren(id).subscribe(() => {
            const parent = this.flatPointers[id];
            this.openedNode$.next(parent);
            const breadcrumbs = Utils.buildBreadcrumbs(this.flatPointers, parent);
            this.breadcrumbs$.next(breadcrumbs);
            this.selectedNodes$.next([]);
        });
    }
    dbClick(target) {
        this.dataService.rightClick(target);
    }
    dbSelect(target) {
        this.dataService.leftClick(target);
    }
    emptyClick() {
        this.dataService.emptyClick();
    }
    openLeaf(target) {
        this.dataService.open(target.data).subscribe(() => {
            this.refresh();
        });
    }
    expandNode(id) {
        this.getNodeChildren(id).subscribe();
    }
    createNode(name) {
        const parent = this.openedNode$.value;
        this.dataService.createNode(parent.data, name).subscribe(() => {
            this.refresh();
        });
    }
    refresh() {
        this.openNode(this.openedNode$.value.id);
    }
    rename(name) {
        const nodes = this.selectedNodes$.value;
        if (nodes.length > 1) {
            throw new Error('Multiple selection rename not supported');
        }
        if (nodes.length === 0) {
            throw new Error('Nothing selected to rename');
        }
        const node = nodes[0];
        if (node.isLeaf) {
            this.dataService.renameLeaf(node.data, name).subscribe(() => {
                this.refresh();
            });
        }
        else {
            this.dataService.renameNode(node.data, name).subscribe(() => {
                this.refresh();
            });
        }
    }
    remove() {
        const selection = this.selectedNodes$.value;
        if (selection.length === 0) {
            throw new Error('Nothing selected to remove');
        }
        const targets = selection.map(node => this.flatPointers[node.id]);
        const nodes = targets.filter(t => !t.isLeaf).map(data => data.data);
        const leafs = targets.filter(t => t.isLeaf).map(data => data.data);
        const sub1 = nodes.length ? this.dataService.deleteNodes(nodes) : of([]);
        const sub2 = leafs.length ? this.dataService.deleteLeafs(leafs) : of([]);
        forkJoin([sub1, sub2]).subscribe(() => {
            this.refresh();
        });
    }
    upload(files) {
        const node = this.openedNode$.value;
        this.dataService.uploadFiles(node.data, files).subscribe(() => {
            this.refresh();
        });
    }
    download() {
        const target = this.selectedNodes$.value[0];
        this.dataService.download(target.data).subscribe(() => {
            this.refresh();
        });
    }
    open() {
        const target = this.selectedNodes$.value[0];
        this.dataService.open(target.data).subscribe(() => {
            this.refresh();
        });
    }
    share() {
        const target = this.selectedNodes$.value[0];
        this.dataService.share(target.data).subscribe(() => {
            this.refresh();
        });
    }
    getNodeChildren(id) {
        const parent = this.flatPointers[id];
        if (parent.isLeaf) {
            throw new Error('Cannot open leaf node');
        }
        return this.dataService
            .getNodeChildren(parent.data)
            .pipe(tap(({ leafs, nodes }) => {
            const newNodes = nodes.map(data => Utils.createNode(id, false, data));
            const newLeafs = leafs.map(data => Utils.createNode(id, true, data));
            const newChildren = newNodes.concat(newLeafs);
            const added = newChildren.filter(c => !parent.children.find(o => Utils.compareObjects(o.data, c.data)));
            const removed = parent.children.filter(o => !newChildren.find(c => Utils.compareObjects(o.data, c.data)));
            removed.forEach(c => {
                const index = parent.children.findIndex(o => o.id === c.id);
                parent.children.splice(index, 1);
                delete this.flatPointers[c.id];
            });
            added.forEach(c => {
                parent.children.push(c);
                this.flatPointers[c.id] = c;
            });
            parent.children.sort((a, b) => a.data.name.localeCompare(b.data.name));
            const nodeChildren = parent.children.filter(c => !c.isLeaf);
            const leafChildren = parent.children.filter(c => c.isLeaf);
            parent.children = nodeChildren.concat(leafChildren);
            this.tree$.next(this.internalTree);
        }));
    }
    getCurrentPath() {
        var _a, _b, _c;
        let res = 'Home';
        const path = this.openedNode;
        if (((_c = (_b = (_a = path.source) === null || _a === void 0 ? void 0 : _a._value) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.path) != undefined) {
            res = path.source._value.data.path;
            this.dataService.getCurrentPath(res);
            return;
        }
        else {
            res = 'Home';
            this.dataService.getCurrentPath(res);
            return;
        }
    }
};
ExplorerService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ExplorerService);
export { ExplorerService };
//# sourceMappingURL=explorer.service.js.map