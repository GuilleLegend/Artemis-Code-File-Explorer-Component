import { __decorate, __param } from "tslib";
import { Component, Inject, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { FILTER_STRING } from '../../injection-tokens/tokens';
let FilterComponent = class FilterComponent {
    constructor(filter, explorerService) {
        this.filter = filter;
        this.sub = new Subscription();
        this.sub.add(explorerService.tree.subscribe(() => {
            this.clear();
        }));
    }
    onChange(e, value) {
        if (e.key === 'Escape') {
            this.input.nativeElement.value = '';
            this.filter.next('');
            return;
        }
        this.filter.next(value.trim());
    }
    clear() {
        if (!this.input) {
            return;
        }
        this.input.nativeElement.value = '';
        this.filter.next('');
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
__decorate([
    ViewChild('input')
], FilterComponent.prototype, "input", void 0);
FilterComponent = __decorate([
    Component({
        selector: 'nxe-filter',
        templateUrl: './filter.component.html',
        styleUrls: ['./filter.component.scss']
    }),
    __param(0, Inject(FILTER_STRING))
], FilterComponent);
export { FilterComponent };
//# sourceMappingURL=filter.component.js.map