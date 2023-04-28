import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AvialableView } from '../../shared/types';
import { CURRENT_VIEW } from '../../injection-tokens/tokens';
export class ExplorerComponent {
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
}
ExplorerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nxe-explorer',
                template: "<div class=\"nxe-explorer\">\n    <div class=\"nxe-eplorer-menu\">\n        <nxe-menu-bar></nxe-menu-bar>\n    </div>\n    <div class=\"nxe-explorer-containers\">\n        <div class=\"nxe-explorer-left-container\">\n            <nxe-tree></nxe-tree>\n        </div>\n        <div class=\"nxe-explorer-right-container\">\n            <div class=\"nxe-explorer-right-menu\">\n                <nxe-second-menu-bar></nxe-second-menu-bar>\n            </div>\n            <div class=\"nxe-explorer-right-content\">\n                <ng-container *ngIf=\"view === avialableView.Icon\">\n                    <nxe-icons></nxe-icons>\n                </ng-container>\n                <ng-container *ngIf=\"view === avialableView.List\">\n                    <nxe-list></nxe-list>\n                </ng-container>\n            </div>\n        </div>\n    </div>\n</div> ",
                encapsulation: ViewEncapsulation.None,
                styles: [".nxe-explorer{border:1px solid #ccc;display:flex;flex-direction:column;height:100%}.nxe-eplorer-menu{border-bottom:1px solid #ccc}.nxe-explorer-containers{display:flex;flex-wrap:wrap;height:100%}.nxe-explorer-left-container{border-right:1px solid #ccc;flex-basis:20rem;flex-grow:1;overflow:auto;position:relative}.nxe-explorer-right-container{display:flex;flex-basis:0;flex-direction:column;flex-grow:999}.nxe-explorer-right-menu{border-bottom:1px solid #ccc}.nxe-explorer-right-content{flex-grow:1;overflow:auto;position:relative}"]
            },] }
];
ExplorerComponent.ctorParameters = () => [
    { type: BehaviorSubject, decorators: [{ type: Inject, args: [CURRENT_VIEW,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwbG9yZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25neC1leHBsb3Jlci9uZ3gtZXhwbG9yZXIvcHJvamVjdHMvbmd4LWV4cGxvcmVyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2V4cGxvcmVyL2V4cGxvcmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBYSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBUTdELE1BQU0sT0FBTyxpQkFBaUI7SUFNMUIsWUFBMEMsV0FBMkM7UUFBM0MsZ0JBQVcsR0FBWCxXQUFXLENBQWdDO1FBSjlFLGtCQUFhLEdBQUcsYUFBYSxDQUFDO1FBRTdCLFFBQUcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRzdCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBcEJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsY0FBYztnQkFDeEIseTJCQUF3QztnQkFFeEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3hDOzs7WUFUUSxlQUFlLHVCQWdCUCxNQUFNLFNBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPbkRlc3Ryb3ksIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXZpYWxhYmxlVmlldyB9IGZyb20gJy4uLy4uL3NoYXJlZC90eXBlcyc7XG5pbXBvcnQgeyBDVVJSRU5UX1ZJRVcgfSBmcm9tICcuLi8uLi9pbmplY3Rpb24tdG9rZW5zL3Rva2Vucyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbnhlLWV4cGxvcmVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZXhwbG9yZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2V4cGxvcmVyLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBFeHBsb3JlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgICBwdWJsaWMgYXZpYWxhYmxlVmlldyA9IEF2aWFsYWJsZVZpZXc7XG4gICAgcHVibGljIHZpZXc6IHN0cmluZztcbiAgICBwcml2YXRlIHN1YiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoQ1VSUkVOVF9WSUVXKSBwcml2YXRlIGN1cnJlbnRWaWV3OiBCZWhhdmlvclN1YmplY3Q8QXZpYWxhYmxlVmlldz4pIHtcbiAgICAgICAgdGhpcy5zdWIuYWRkKHRoaXMuY3VycmVudFZpZXcuc3Vic2NyaWJlKHZpZXcgPT4ge1xuICAgICAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxufVxuIl19