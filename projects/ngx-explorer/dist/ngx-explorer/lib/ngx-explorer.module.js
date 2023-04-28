import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { IconsComponent } from './components/icons/icons.component';
import { CommonModule } from '@angular/common';
import { ExplorerComponent } from './components/explorer/explorer.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ListComponent } from './components/list/list.component';
import { SecondMenuBarComponent } from './components/second-menu-bar/second-menu-bar.component';
import { ViewSwitcherComponent } from './components/view-switcher/view-switcher.component';
import { TreeComponent } from './components/tree/tree.component';
import { FilterComponent } from './components/filter/filter.component';
import { DragDropDirective } from './directives/drag-drop.directive';
import { Config } from './shared/default-config';
let NgxExplorerModule = class NgxExplorerModule {
};
NgxExplorerModule = __decorate([
    NgModule({
        declarations: [
            IconsComponent,
            ExplorerComponent,
            MenuBarComponent,
            BreadcrumbsComponent,
            ListComponent,
            SecondMenuBarComponent,
            ViewSwitcherComponent,
            TreeComponent,
            FilterComponent,
            DragDropDirective,
        ],
        imports: [
            CommonModule
        ],
        exports: [
            IconsComponent,
            ExplorerComponent,
            MenuBarComponent,
            BreadcrumbsComponent,
            ListComponent,
            SecondMenuBarComponent,
            ViewSwitcherComponent,
            TreeComponent,
            FilterComponent
        ],
        providers: [
            {
                provide: Config,
                useValue: Config
            }
        ]
    })
], NgxExplorerModule);
export { NgxExplorerModule };
//# sourceMappingURL=ngx-explorer.module.js.map