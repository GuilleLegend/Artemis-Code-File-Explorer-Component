import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
let TreeComponent = class TreeComponent {
    constructor(explorerService, helperService) {
        this.explorerService = explorerService;
        this.helperService = helperService;
        this.treeNodes = [];
        this.expandedIds = [];
        this.sub = new Subscription();
        this.sub.add(this.explorerService.tree.pipe(filter(x => !!x)).subscribe(node => {
            this.addExpandedNode(node.id); // always expand root
            this.treeNodes = this.buildTree(node).children;
        }));
    }
    open(node) {
        this.addExpandedNode(node.id);
        this.explorerService.openNode(node.id);
        this.explorerService.getCurrentPath();
    }
    expand(node) {
        this.addExpandedNode(node.id);
        this.explorerService.expandNode(node.id);
    }
    collapse(node) {
        this.removeExpandedNode(node.id);
        let nodes;
        this.sub.add(this.explorerService.tree.pipe(filter(x => !!x)).subscribe(x => nodes = x));
        this.treeNodes = this.buildTree(nodes).children;
    }
    getName(node) {
        return this.helperService.getName(node);
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    buildTree(node) {
        const treeNode = {
            id: node.id,
            parentId: node.parentId,
            data: node.data,
            isLeaf: node.isLeaf,
            children: [],
            expanded: false
        };
        treeNode.expanded = this.expandedIds.indexOf(node.id) > -1;
        if (treeNode.expanded) {
            treeNode.children = node.children.filter(x => !x.isLeaf).map(x => this.buildTree(x));
        }
        return treeNode;
    }
    addExpandedNode(id) {
        const index = this.expandedIds.indexOf(id);
        if (index === -1) {
            this.expandedIds.push(id);
        }
    }
    removeExpandedNode(id) {
        const index = this.expandedIds.indexOf(id);
        this.expandedIds.splice(index, 1);
    }
};
TreeComponent = __decorate([
    Component({
        selector: 'nxe-tree',
        templateUrl: './tree.component.html',
        styleUrls: ['./tree.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], TreeComponent);
export { TreeComponent };
//# sourceMappingURL=tree.component.js.map