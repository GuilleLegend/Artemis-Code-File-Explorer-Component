import { __decorate, __param } from "tslib";
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FILTER_STRING } from '../../injection-tokens/tokens';
import { BaseView } from '../base-view/base-view.directive';
let ListComponent = class ListComponent extends BaseView {
    constructor(explorerService, helperService, filter) {
        super(explorerService, helperService, filter);
        this.icons = {
            node: 'nxe-folder',
            leaf: 'nxe-doc',
        };
    }
};
ListComponent = __decorate([
    Component({
        selector: 'nxe-list',
        templateUrl: './list.component.html',
        styleUrls: ['./list.component.scss'],
        encapsulation: ViewEncapsulation.None,
    }),
    __param(2, Inject(FILTER_STRING))
], ListComponent);
export { ListComponent };
//# sourceMappingURL=list.component.js.map