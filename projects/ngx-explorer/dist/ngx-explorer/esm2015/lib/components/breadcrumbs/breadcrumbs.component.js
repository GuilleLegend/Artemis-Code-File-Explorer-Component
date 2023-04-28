import { Component, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExplorerService } from '../../services/explorer.service';
import { HelperService } from '../../services/helper.service';
import { ConfigProvider } from '../../services/config.provider';
export class BreadcrumbsComponent {
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
}
BreadcrumbsComponent.decorators = [
    { type: Component, args: [{
                selector: 'nxe-breadcrumbs',
                template: "<div class=\"nxe-breadcrumbs\">\n    <span *ngFor=\"let crumb of breadcrumbs; last as last\">\n        <button (click)=\"click(crumb)\" class=\"nxe-breadcrumb-button\">{{ crumb.name }}</button>\n        <span *ngIf=\"!last\" class=\"nxe-breadcrumb-separator\">\n            <i class=\"nxe-angle-right\" aria-hidden=\"true\"></i>\n        </span>\n    </span>\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [".nxe-breadcrumbs .nxe-breadcrumb-button{background:transparent;border:0;border-radius:5px;cursor:pointer;font-family:inherit;font-size:inherit;font-weight:inherit;padding:5px}.nxe-breadcrumbs .nxe-breadcrumb-button:hover{background-color:#d7edff}"]
            },] }
];
BreadcrumbsComponent.ctorParameters = () => [
    { type: ExplorerService },
    { type: HelperService },
    { type: ConfigProvider }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25neC1leHBsb3Jlci9uZ3gtZXhwbG9yZXIvcHJvamVjdHMvbmd4LWV4cGxvcmVyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFcEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFhaEUsTUFBTSxPQUFPLG9CQUFvQjtJQUk3QixZQUFvQixlQUFnQyxFQUFVLGFBQTRCLEVBQVUsTUFBc0I7UUFBdEcsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUhuSCxnQkFBVyxHQUFpQixFQUFFLENBQUM7UUFDOUIsUUFBRyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFHN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBRU8sZ0JBQWdCLENBQUMsS0FBYztRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsSSxDQUFDO0lBRU0sS0FBSyxDQUFDLEtBQWlCO1FBQzFCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVNLFdBQVc7UUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQXhCSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsMFhBQTJDO2dCQUUzQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDeEM7OztZQWRRLGVBQWU7WUFDZixhQUFhO1lBQ2IsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJTm9kZSB9IGZyb20gJy4uLy4uL3NoYXJlZC90eXBlcyc7XG5pbXBvcnQgeyBFeHBsb3JlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9leHBsb3Jlci5zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9oZWxwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb25maWdQcm92aWRlciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbmZpZy5wcm92aWRlcic7XG5cbmludGVyZmFjZSBCcmVhZGNydW1iIHtcbiAgICBub2RlOiBJTm9kZTtcbiAgICBuYW1lOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbnhlLWJyZWFkY3J1bWJzJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYnMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIHB1YmxpYyBicmVhZGNydW1iczogQnJlYWRjcnVtYltdID0gW107XG4gICAgcHJpdmF0ZSBzdWIgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV4cGxvcmVyU2VydmljZTogRXhwbG9yZXJTZXJ2aWNlLCBwcml2YXRlIGhlbHBlclNlcnZpY2U6IEhlbHBlclNlcnZpY2UsIHByaXZhdGUgY29uZmlnOiBDb25maWdQcm92aWRlcikge1xuICAgICAgICB0aGlzLnN1Yi5hZGQodGhpcy5leHBsb3JlclNlcnZpY2UuYnJlYWRjcnVtYnMuc3Vic2NyaWJlKG4gPT4gdGhpcy5idWlsZEJyZWFkY3J1bWJzKG4pKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEJyZWFkY3J1bWJzKG5vZGVzOiBJTm9kZVtdKSB7XG4gICAgICAgIHRoaXMuYnJlYWRjcnVtYnMgPSBub2Rlcy5tYXAobiA9PiAoeyBuYW1lOiB0aGlzLmhlbHBlclNlcnZpY2UuZ2V0TmFtZShuLmRhdGEpIHx8IHRoaXMuY29uZmlnLmNvbmZpZy5ob21lTm9kZU5hbWUsIG5vZGU6IG4gfSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGljayhjcnVtYjogQnJlYWRjcnVtYikge1xuICAgICAgICB0aGlzLmV4cGxvcmVyU2VydmljZS5vcGVuTm9kZShjcnVtYi5ub2RlLmlkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG59XG4iXX0=