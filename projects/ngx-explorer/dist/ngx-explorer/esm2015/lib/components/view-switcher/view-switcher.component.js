import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AvialableView } from '../../shared/types';
import { CURRENT_VIEW } from '../../injection-tokens/tokens';
export class ViewSwitcherComponent {
    constructor(currentView) {
        this.currentView = currentView;
        this.avialableView = AvialableView;
    }
    setView(view) {
        this.currentView.next(view);
    }
}
ViewSwitcherComponent.decorators = [
    { type: Component, args: [{
                selector: 'nxe-view-switcher',
                template: "<div class=\"nxe-view-switcher\">\n    <button (click)=\"setView(avialableView.Icon)\"><i class=\"nxe-th-large\" aria-hidden=\"true\"></i></button>\n    <button (click)=\"setView(avialableView.List)\"><i class=\"nxe-menu\" aria-hidden=\"true\"></i></button>\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [".nxe-view-switcher{padding:10px}.nxe-view-switcher button{background:transparent;border:0;border-radius:5px;cursor:pointer;font-family:inherit;font-size:inherit;font-weight:inherit;padding:5px}.nxe-view-switcher button:hover{background-color:#d7edff}"]
            },] }
];
ViewSwitcherComponent.ctorParameters = () => [
    { type: BehaviorSubject, decorators: [{ type: Inject, args: [CURRENT_VIEW,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1zd2l0Y2hlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbmd4LWV4cGxvcmVyL25neC1leHBsb3Jlci9wcm9qZWN0cy9uZ3gtZXhwbG9yZXIvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdmlldy1zd2l0Y2hlci92aWV3LXN3aXRjaGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFRN0QsTUFBTSxPQUFPLHFCQUFxQjtJQUloQyxZQUEwQyxXQUEyQztRQUEzQyxnQkFBVyxHQUFYLFdBQVcsQ0FBZ0M7UUFGckUsa0JBQWEsR0FBRyxhQUFhLENBQUM7SUFHOUMsQ0FBQztJQUVELE9BQU8sQ0FBQyxJQUFtQjtRQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUFmRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IscVJBQTZDO2dCQUU3QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7OztZQVRRLGVBQWUsdUJBY1QsTUFBTSxTQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXZpYWxhYmxlVmlldyB9IGZyb20gJy4uLy4uL3NoYXJlZC90eXBlcyc7XG5pbXBvcnQgeyBDVVJSRU5UX1ZJRVcgfSBmcm9tICcuLi8uLi9pbmplY3Rpb24tdG9rZW5zL3Rva2Vucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ254ZS12aWV3LXN3aXRjaGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ZpZXctc3dpdGNoZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi92aWV3LXN3aXRjaGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgVmlld1N3aXRjaGVyQ29tcG9uZW50IHtcblxuICBwdWJsaWMgcmVhZG9ubHkgYXZpYWxhYmxlVmlldyA9IEF2aWFsYWJsZVZpZXc7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChDVVJSRU5UX1ZJRVcpIHByaXZhdGUgY3VycmVudFZpZXc6IEJlaGF2aW9yU3ViamVjdDxBdmlhbGFibGVWaWV3Pikge1xuICB9XG5cbiAgc2V0Vmlldyh2aWV3OiBBdmlhbGFibGVWaWV3KSB7XG4gICAgdGhpcy5jdXJyZW50Vmlldy5uZXh0KHZpZXcpO1xuICB9XG5cbn1cbiJdfQ==