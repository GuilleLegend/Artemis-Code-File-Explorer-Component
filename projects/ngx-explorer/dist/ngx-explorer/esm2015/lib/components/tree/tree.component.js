import { Component, ViewEncapsulation } from '@angular/core';
import { ExplorerService } from '../../services/explorer.service';
import { filter } from 'rxjs/operators';
import { HelperService } from '../../services/helper.service';
import { Subscription } from 'rxjs';
export class TreeComponent {
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
}
TreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'nxe-tree',
                template: "<div class=\"nxe-tree\">\n    <ng-container *ngTemplateOutlet=\"tree;context:{nodes:treeNodes}\">\n    </ng-container>\n</div>\n\n<ng-template #tree let-nodes=\"nodes\">\n    <ul *ngIf=\"nodes && nodes.length > 0\">\n        <li *ngFor=\"let node of nodes\">\n            <div class=\"chevron\" *ngIf=\"!node.expanded\" (click)=\"expand(node)\"><i class=\"nxe-angle-right\" aria-hidden=\"true\"></i></div>\n            <div class=\"chevron\" *ngIf=\"node.expanded\" (click)=\"collapse(node)\"><i class=\"nxe-angle-down\" aria-hidden=\"true\"></i></div>\n\n            <div class=\"item\" (dblclick)=\"open(node)\">\n                <div class=\"folder-icon\"><i class=\"nxe-folder\" aria-hidden=\"true\"></i></div>\n                <div class=\"grow\" [innerText]=\"getName(node.data)\"></div>\n                <!-- <div class=\"ellipsis-icon\"><i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i></div> -->\n                <div class=\"highlighter\"></div>\n            </div>\n\n            <ng-container *ngTemplateOutlet=\"tree;context:{nodes:node.children}\">\n            </ng-container>\n        </li>\n    </ul>\n</ng-template> ",
                encapsulation: ViewEncapsulation.None,
                styles: [".nxe-tree{position:absolute}.nxe-tree ul{list-style-position:inside;margin:0 0 0 20px;padding:0}.nxe-tree li{list-style-type:none;padding:0;position:relative}.nxe-tree .chevron{color:#333;cursor:pointer;font-size:1.3rem;left:-20px;position:absolute;text-align:center;top:1px;width:21px}.nxe-tree .item{border-radius:5px;cursor:pointer;display:flex;padding:5px}.nxe-tree .item .folder-icon{margin-right:5px}.nxe-tree .item .folder-icon i{color:#555;font-weight:500}.nxe-tree .item .folder-icon i.nxe-folder{color:#fdb900}.nxe-tree .item .grow{flex:1}.nxe-tree .item:hover{background-color:#d7edff}"]
            },] }
];
TreeComponent.ctorParameters = () => [
    { type: ExplorerService },
    { type: HelperService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbmd4LWV4cGxvcmVyL25neC1leHBsb3Jlci9wcm9qZWN0cy9uZ3gtZXhwbG9yZXIvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdHJlZS90cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFjcEMsTUFBTSxPQUFPLGFBQWE7SUFLdEIsWUFBb0IsZUFBZ0MsRUFBVSxhQUE0QjtRQUF0RSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUpuRixjQUFTLEdBQWUsRUFBRSxDQUFDO1FBQzFCLGdCQUFXLEdBQWEsRUFBRSxDQUFDO1FBQzNCLFFBQUcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRzdCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDM0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxxQkFBcUI7WUFDcEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFD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QW9DO2dCQUVwQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDeEM7OztZQWhCUSxlQUFlO1lBRWYsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXhwbG9yZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZXhwbG9yZXIuc2VydmljZSc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaGVscGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJTm9kZSB9IGZyb20gJy4uLy4uL3NoYXJlZC90eXBlcyc7XG5cbmludGVyZmFjZSBUcmVlTm9kZSBleHRlbmRzIElOb2RlIHtcbiAgICBjaGlsZHJlbjogVHJlZU5vZGVbXTtcbiAgICBleHBhbmRlZDogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdueGUtdHJlZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RyZWUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3RyZWUuY29tcG9uZW50LnNjc3MnXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIHB1YmxpYyB0cmVlTm9kZXM6IFRyZWVOb2RlW10gPSBbXTtcbiAgICBwcml2YXRlIGV4cGFuZGVkSWRzOiBudW1iZXJbXSA9IFtdO1xuICAgIHByaXZhdGUgc3ViID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBleHBsb3JlclNlcnZpY2U6IEV4cGxvcmVyU2VydmljZSwgcHJpdmF0ZSBoZWxwZXJTZXJ2aWNlOiBIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuc3ViLmFkZCh0aGlzLmV4cGxvcmVyU2VydmljZS50cmVlLnBpcGUoZmlsdGVyKHggPT4gISF4KSkuc3Vic2NyaWJlKG5vZGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRFeHBhbmRlZE5vZGUobm9kZS5pZCk7IC8vIGFsd2F5cyBleHBhbmQgcm9vdFxuICAgICAgICAgICAgdGhpcy50cmVlTm9kZXMgPSB0aGlzLmJ1aWxkVHJlZShub2RlKS5jaGlsZHJlbjtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIG9wZW4obm9kZTogSU5vZGUpIHtcbiAgICAgICAgdGhpcy5hZGRFeHBhbmRlZE5vZGUobm9kZS5pZCk7XG4gICAgICAgIHRoaXMuZXhwbG9yZXJTZXJ2aWNlLm9wZW5Ob2RlKG5vZGUuaWQpO1xuICAgIH1cblxuICAgIGV4cGFuZChub2RlOiBJTm9kZSkge1xuICAgICAgICB0aGlzLmFkZEV4cGFuZGVkTm9kZShub2RlLmlkKTtcbiAgICAgICAgdGhpcy5leHBsb3JlclNlcnZpY2UuZXhwYW5kTm9kZShub2RlLmlkKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZShub2RlOiBJTm9kZSkge1xuICAgICAgICB0aGlzLnJlbW92ZUV4cGFuZGVkTm9kZShub2RlLmlkKTtcbiAgICAgICAgbGV0IG5vZGVzOiBJTm9kZTtcbiAgICAgICAgdGhpcy5zdWIuYWRkKHRoaXMuZXhwbG9yZXJTZXJ2aWNlLnRyZWUucGlwZShmaWx0ZXIoeCA9PiAhIXgpKS5zdWJzY3JpYmUoeCA9PiBub2RlcyA9IHgpKTtcbiAgICAgICAgdGhpcy50cmVlTm9kZXMgPSB0aGlzLmJ1aWxkVHJlZShub2RlcykuY2hpbGRyZW47XG4gICAgfVxuXG4gICAgZ2V0TmFtZShub2RlOiBJTm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWxwZXJTZXJ2aWNlLmdldE5hbWUobm9kZSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZFRyZWUobm9kZTogSU5vZGUpOiBUcmVlTm9kZSB7XG4gICAgICAgIGNvbnN0IHRyZWVOb2RlID0ge1xuICAgICAgICAgICAgaWQ6IG5vZGUuaWQsXG4gICAgICAgICAgICBwYXJlbnRJZDogbm9kZS5wYXJlbnRJZCxcbiAgICAgICAgICAgIGRhdGE6IG5vZGUuZGF0YSxcbiAgICAgICAgICAgIGlzTGVhZjogbm9kZS5pc0xlYWYsXG4gICAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgICAgICBleHBhbmRlZDogZmFsc2VcbiAgICAgICAgfSBhcyBUcmVlTm9kZTtcblxuICAgICAgICB0cmVlTm9kZS5leHBhbmRlZCA9IHRoaXMuZXhwYW5kZWRJZHMuaW5kZXhPZihub2RlLmlkKSA+IC0xO1xuICAgICAgICBpZiAodHJlZU5vZGUuZXhwYW5kZWQpIHtcbiAgICAgICAgICAgIHRyZWVOb2RlLmNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbi5maWx0ZXIoeCA9PiAheC5pc0xlYWYpLm1hcCh4ID0+IHRoaXMuYnVpbGRUcmVlKHgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJlZU5vZGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRFeHBhbmRlZE5vZGUoaWQ6IG51bWJlcikge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZXhwYW5kZWRJZHMuaW5kZXhPZihpZCk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kZWRJZHMucHVzaChpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZUV4cGFuZGVkTm9kZShpZDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5leHBhbmRlZElkcy5pbmRleE9mKGlkKTtcbiAgICAgICAgdGhpcy5leHBhbmRlZElkcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxufVxuIl19