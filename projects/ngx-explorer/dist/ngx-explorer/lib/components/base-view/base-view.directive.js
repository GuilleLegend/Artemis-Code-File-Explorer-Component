import { __decorate, __param } from "tslib";
import { Directive, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { FILTER_STRING } from '../../injection-tokens/tokens';
let BaseView = class BaseView {
    constructor(explorerService, helperService, filter) {
        this.explorerService = explorerService;
        this.helperService = helperService;
        this.filter = filter;
        this.selection = [];
        this.items = [];
        this.dragging = false;
        this.subs = new Subscription();
        this.subs.add(this.explorerService.openedNode.subscribe(nodes => {
            this.items = nodes ? nodes.children : [];
        }));
        this.subs.add(this.explorerService.selectedNodes.subscribe(nodes => {
            this.selection = nodes ? nodes : [];
        }));
    }
    get filteredItems() {
        const filter = this.filter.value;
        if (!filter) {
            return this.items;
        }
        return this.items.filter(i => this.helperService.getName(i.data).toLowerCase().includes(filter.toLowerCase()));
    }
    getDisplayName(data) {
        return this.helperService.getName(data);
    }
    getFileType(data) {
        return this.helperService.getFileType(data);
    }
    getLastModified(data) {
        return this.helperService.getLastModified(data);
    }
    getSize(data) {
        return this.helperService.getSize(data);
    }
    select(event, item) {
        const selectedIndex = this.selection.findIndex(i => i === item);
        const alreadySelected = selectedIndex !== -1;
        const metaKeyPressed = event.metaKey || event.ctrlKey || event.shiftKey;
        if (alreadySelected && metaKeyPressed) {
            this.selection.splice(selectedIndex, 1);
        }
        else {
            if (!metaKeyPressed) {
                this.selection.length = 0;
            }
            this.selection.push(item);
        }
        this.explorerService.selectNodes(this.selection);
    }
    open(event, item) {
        const metaKeyPressed = event.metaKey || event.ctrlKey || event.shiftKey;
        if (!metaKeyPressed) {
            this.explorerService.openNode(item.id);
            this.explorerService.getCurrentPath();
        }
    }
    dbClick(item) {
        this.explorerService.dbClick(item);
    }
    dbSelect(item) {
        this.explorerService.dbSelect(item);
    }
    emptyClick() {
        this.explorerService.emptyClick();
        this.explorerService.getCurrentPath();
    }
    openLeaf(event, item) {
        const metaKeyPressed = event.metaKey || event.ctrlKey || event.shiftKey;
        if (!metaKeyPressed) {
            this.explorerService.openLeaf(item);
        }
    }
    isSelected(item) {
        return this.selection.indexOf(item) !== -1;
    }
    emptySpaceClick() {
        this.explorerService.selectNodes([]);
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
};
BaseView = __decorate([
    Directive(),
    __param(2, Inject(FILTER_STRING))
], BaseView);
export { BaseView };
//# sourceMappingURL=base-view.directive.js.map