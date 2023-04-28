import { __decorate, __param } from "tslib";
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { AvialableView } from '../../shared/types';
import { CURRENT_VIEW } from '../../injection-tokens/tokens';
let ViewSwitcherComponent = class ViewSwitcherComponent {
    constructor(currentView) {
        this.currentView = currentView;
        this.avialableView = AvialableView;
    }
    setView(view) {
        this.currentView.next(view);
    }
};
ViewSwitcherComponent = __decorate([
    Component({
        selector: 'nxe-view-switcher',
        templateUrl: './view-switcher.component.html',
        styleUrls: ['./view-switcher.component.scss'],
        encapsulation: ViewEncapsulation.None
    }),
    __param(0, Inject(CURRENT_VIEW))
], ViewSwitcherComponent);
export { ViewSwitcherComponent };
//# sourceMappingURL=view-switcher.component.js.map