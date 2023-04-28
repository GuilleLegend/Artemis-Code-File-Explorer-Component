import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
let BreadcrumbsComponent = class BreadcrumbsComponent {
    constructor(explorerService, helperService, config) {
        this.explorerService = explorerService;
        this.helperService = helperService;
        this.config = config;
        this.breadcrumbs = [];
        this.sub = new Subscription();
        this.sub.add(this.explorerService.breadcrumbs.subscribe(n => this.buildBreadcrumbs(n)));
    }
    buildBreadcrumbs(nodes) {
        this.breadcrumbs = nodes.map(n => ({ name: this.helperService.getName(n.data) || this.config.config.homeNodeName, node: n }));
    }
    click(crumb) {
        this.explorerService.openNode(crumb.node.id);
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
BreadcrumbsComponent = __decorate([
    Component({
        selector: 'nxe-breadcrumbs',
        templateUrl: './breadcrumbs.component.html',
        styleUrls: ['./breadcrumbs.component.scss'],
        encapsulation: ViewEncapsulation.None,
    })
], BreadcrumbsComponent);
export { BreadcrumbsComponent };
//# sourceMappingURL=breadcrumbs.component.js.map