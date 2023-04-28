import { __decorate, __param } from "tslib";
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FILTER_STRING } from '../../injection-tokens/tokens';
import { BaseView } from '../base-view/base-view.directive';
let IconsComponent = class IconsComponent extends BaseView {
    constructor(explorerService, helperService, filter) {
        super(explorerService, helperService, filter);
        this.icons = {
            node: 'nxe-folder',
            leaf: 'nxe-doc',
        };
    }
    openner(event, item) {
        if (item.isLeaf) {
            this.openLeaf(event, item);
        }
        else {
            this.open(event, item);
        }
    }
    doubleClick(item) {
        this.dbClick(item);
    }
    select(event, item) {
        super.select(event, item);
        this.dbSelect(item);
    }
    emptySpaceClick() {
        super.emptySpaceClick();
        this.emptyClick();
    }
};
IconsComponent = __decorate([
    Component({
        selector: 'nxe-icons',
        templateUrl: './icons.component.html',
        styleUrls: ['./icons.component.scss'],
        encapsulation: ViewEncapsulation.None,
    }),
    __param(2, Inject(FILTER_STRING))
], IconsComponent);
export { IconsComponent };
//# sourceMappingURL=icons.component.js.map