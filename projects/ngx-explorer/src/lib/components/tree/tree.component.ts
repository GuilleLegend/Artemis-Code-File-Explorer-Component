import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ExplorerService } from '../../services/explorer.service';
import { filter } from 'rxjs/operators';
import { HelperService } from '../../services/helper.service';
import { Subscription } from 'rxjs';
import { INode } from '../../shared/types';

interface TreeNode extends INode {
    children: TreeNode[];
    expanded: boolean;
}

@Component({
    selector: 'nxe-tree',
    templateUrl: './tree.component.html',
    styleUrls: ['./tree.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TreeComponent implements OnDestroy {
    public treeNodes: TreeNode[] = [];
    private expandedIds: number[] = [];
    private sub = new Subscription();

    constructor(private explorerService: ExplorerService, private helperService: HelperService) {
        this.sub.add(this.explorerService.tree.pipe(filter(x => !!x)).subscribe(node => {
            this.addExpandedNode(node.id); // always expand root
            this.treeNodes = this.buildTree(node).children;
        }));
    }

    open(node: INode) {
        this.addExpandedNode(node.id);
        this.explorerService.openNode(node.id);
        this.explorerService.getCurrentPath();
    }

    expand(node: INode) {
        this.addExpandedNode(node.id);
        this.explorerService.expandNode(node.id);
    }

    collapse(node: INode) {
        this.removeExpandedNode(node.id);
        let nodes: INode;
        this.sub.add(this.explorerService.tree.pipe(filter(x => !!x)).subscribe(x => nodes = x));
        this.treeNodes = this.buildTree(nodes).children;
    }

    getName(node: INode) {
        return this.helperService.getName(node);
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    private buildTree(node: INode): TreeNode {
        const treeNode = {
            id: node.id,
            parentId: node.parentId,
            data: node.data,
            isLeaf: node.isLeaf,
            children: [],
            expanded: false
        } as TreeNode;

        treeNode.expanded = this.expandedIds.indexOf(node.id) > -1;
        if (treeNode.expanded) {
            treeNode.children = node.children.filter(x => !x.isLeaf).map(x => this.buildTree(x));
        }
        return treeNode;
    }

    private addExpandedNode(id: number) {
        const index = this.expandedIds.indexOf(id);
        if (index === -1) {
            this.expandedIds.push(id);
        }
    }

    private removeExpandedNode(id: number) {
        const index = this.expandedIds.indexOf(id);
        this.expandedIds.splice(index, 1);
    }

}
