import { __decorate, __param } from "tslib";
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { AvialableView } from '../../shared/types';
import { CURRENT_VIEW } from '../../injection-tokens/tokens';
let ExplorerComponent = class ExplorerComponent {
    constructor(currentView) {
        this.currentView = currentView;
        this.avialableView = AvialableView;
        this.sub = new Subscription();
        this.sub.add(this.currentView.subscribe(view => {
            this.view = view;
        }));
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
ExplorerComponent = __decorate([
    Component({
        selector: 'nxe-explorer',
        templateUrl: './explorer.component.html',
        styleUrls: ['./explorer.component.scss'],
        encapsulation: ViewEncapsulation.None
    }),
    __param(0, Inject(CURRENT_VIEW))
], ExplorerComponent);
export { ExplorerComponent };
//# sourceMappingURL=explorer.component.js.map