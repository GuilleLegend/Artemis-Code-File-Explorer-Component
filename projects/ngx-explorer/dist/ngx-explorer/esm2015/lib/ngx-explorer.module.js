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
const ɵ0 = Config;
export class NgxExplorerModule {
}
NgxExplorerModule.decorators = [
    { type: NgModule, args: [{
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
                        useValue: ɵ0
                    }
                ]
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4cGxvcmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9uZ3gtZXhwbG9yZXIvbmd4LWV4cGxvcmVyL3Byb2plY3RzL25neC1leHBsb3Jlci9zcmMvIiwic291cmNlcyI6WyJsaWIvbmd4LWV4cGxvcmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDNUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHlCQUF5QixDQUFDO1dBZ0NqQyxNQUFNO0FBSXRCLE1BQU0sT0FBTyxpQkFBaUI7OztZQWxDN0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixjQUFjO29CQUNkLGlCQUFpQjtvQkFDakIsZ0JBQWdCO29CQUNoQixvQkFBb0I7b0JBQ3BCLGFBQWE7b0JBQ2Isc0JBQXNCO29CQUN0QixxQkFBcUI7b0JBQ3JCLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixpQkFBaUI7aUJBQ2xCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxjQUFjO29CQUNkLGlCQUFpQjtvQkFDakIsZ0JBQWdCO29CQUNoQixvQkFBb0I7b0JBQ3BCLGFBQWE7b0JBQ2Isc0JBQXNCO29CQUN0QixxQkFBcUI7b0JBQ3JCLGFBQWE7b0JBQ2IsZUFBZTtpQkFDaEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxNQUFNO3dCQUNmLFFBQVEsSUFBUTtxQkFDakI7aUJBQ0Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pY29ucy9pY29ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEV4cGxvcmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V4cGxvcmVyL2V4cGxvcmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZW51QmFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21lbnUtYmFyL21lbnUtYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCcmVhZGNydW1ic0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9icmVhZGNydW1icy9icmVhZGNydW1icy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFNlY29uZE1lbnVCYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2Vjb25kLW1lbnUtYmFyL3NlY29uZC1tZW51LWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVmlld1N3aXRjaGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3ZpZXctc3dpdGNoZXIvdmlldy1zd2l0Y2hlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJlZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmVlL3RyZWUuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEcmFnRHJvcERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9kcmFnLWRyb3AuZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vc2hhcmVkL2RlZmF1bHQtY29uZmlnJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgSWNvbnNDb21wb25lbnQsXG4gICAgRXhwbG9yZXJDb21wb25lbnQsXG4gICAgTWVudUJhckNvbXBvbmVudCxcbiAgICBCcmVhZGNydW1ic0NvbXBvbmVudCxcbiAgICBMaXN0Q29tcG9uZW50LFxuICAgIFNlY29uZE1lbnVCYXJDb21wb25lbnQsXG4gICAgVmlld1N3aXRjaGVyQ29tcG9uZW50LFxuICAgIFRyZWVDb21wb25lbnQsXG4gICAgRmlsdGVyQ29tcG9uZW50LFxuICAgIERyYWdEcm9wRGlyZWN0aXZlLFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBJY29uc0NvbXBvbmVudCxcbiAgICBFeHBsb3JlckNvbXBvbmVudCxcbiAgICBNZW51QmFyQ29tcG9uZW50LFxuICAgIEJyZWFkY3J1bWJzQ29tcG9uZW50LFxuICAgIExpc3RDb21wb25lbnQsXG4gICAgU2Vjb25kTWVudUJhckNvbXBvbmVudCxcbiAgICBWaWV3U3dpdGNoZXJDb21wb25lbnQsXG4gICAgVHJlZUNvbXBvbmVudCxcbiAgICBGaWx0ZXJDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogQ29uZmlnLFxuICAgICAgdXNlVmFsdWU6IENvbmZpZ1xuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hFeHBsb3Jlck1vZHVsZSB7IH1cbiJdfQ==