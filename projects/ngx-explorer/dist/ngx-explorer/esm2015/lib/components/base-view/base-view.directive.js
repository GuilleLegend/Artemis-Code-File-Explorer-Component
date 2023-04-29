import { Directive, Inject } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { FILTER_STRING } from '../../injection-tokens/tokens';
import { ExplorerService } from '../../services/explorer.service';
import { HelperService } from '../../services/helper.service';
export class BaseView {
    constructor(explorerService, helperService, filter) {
        this.explorerService = explorerService;
        this.helperService = helperService;
        this.filter = filter;
        this.selection = [];
        this.items = [];
        this.dragging = false;
        this.subs = new Subscription();
        this.subs.add(this.explorerService.openedNode.subscribe(nodes => {
            this.items = nodes ? nodes.children : [];
        }));
        this.subs.add(this.explorerService.selectedNodes.subscribe(nodes => {
            this.selection = nodes ? nodes : [];
        }));
    }
    get filteredItems() {
        const filter = this.filter.value;
        if (!filter) {
            return this.items;
        }
        return this.items.filter(i => this.helperService.getName(i.data).toLowerCase().includes(filter.toLowerCase()));
    }
    getDisplayName(data) {
        return this.helperService.getName(data);
    }
    getFileType(data) {
        return this.helperService.getFileType(data);
    }
    getLastModified(data) {
        return this.helperService.getLastModified(data);
    }
    getSize(data) {
        return this.helperService.getSize(data);
    }
    select(event, item) {
        const selectedIndex = this.selection.findIndex(i => i === item);
        const alreadySelected = selectedIndex !== -1;
        const metaKeyPressed = event.metaKey || event.ctrlKey || event.shiftKey;
        if (alreadySelected && metaKeyPressed) {
            this.selection.splice(selectedIndex, 1);
        }
        else {
            if (!metaKeyPressed) {
                this.selection.length = 0;
            }
            this.selection.push(item);
        }
        this.explorerService.selectNodes(this.selection);
    }
    open(event, item) {
        const metaKeyPressed = event.metaKey || event.ctrlKey || event.shiftKey;
        if (!metaKeyPressed) {
            this.explorerService.openNode(item.id);
            this.explorerService.getCurrentPath();
        }
    }
    dbClick(item) {
        this.explorerService.dbClick(item);
    }
    dbSelect(item) {
        this.explorerService.dbSelect(item);
    }
    emptyClick() {
        this.explorerService.emptyClick();
        this.explorerService.getCurrentPath();
    }
    openLeaf(event, item) {
        const metaKeyPressed = event.metaKey || event.ctrlKey || event.shiftKey;
        if (!metaKeyPressed) {
            this.explorerService.openLeaf(item);
        }
    }
    isSelected(item) {
        return this.selection.indexOf(item) !== -1;
    }
    emptySpaceClick() {
        this.explorerService.selectNodes([]);
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
BaseView.decorators = [
    { type: Directive }
];
BaseView.ctorParameters = () => [
    { type: ExplorerService },
    { type: HelperService },
    { type: BehaviorSubject, decorators: [{ type: Inject, args: [FILTER_STRING,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS12aWV3LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9uZ3gtZXhwbG9yZXIvbmd4LWV4cGxvcmVyL3Byb2plY3RzL25neC1leHBsb3Jlci9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9iYXNlLXZpZXcvYmFzZS12aWV3LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUc5RCxNQUFNLE9BQU8sUUFBUTtJQU1qQixZQUFzQixlQUFnQyxFQUFZLGFBQTRCLEVBQWlDLE1BQStCO1FBQXhJLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFZLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQWlDLFdBQU0sR0FBTixNQUFNLENBQXlCO1FBTHZKLGNBQVMsR0FBWSxFQUFFLENBQUM7UUFDeEIsVUFBSyxHQUFZLEVBQUUsQ0FBQztRQUNwQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2QsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFHaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzVELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMvRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3JCO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuSCxDQUFDO0lBRUQsY0FBYyxDQUFDLElBQUk7UUFDZixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBaUIsRUFBRSxJQUFXO1FBQ2pDLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sZUFBZSxHQUFHLGFBQWEsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM3QyxNQUFNLGNBQWMsR0FBRyxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUV4RSxJQUFJLGVBQWUsSUFBSSxjQUFjLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDSCxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDN0I7WUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM3QjtRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsSUFBSSxDQUFDLEtBQWlCLEVBQUUsSUFBVztRQUMvQixNQUFNLGNBQWMsR0FBRyxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUN4RSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMxQztJQUNMLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBVztRQUNsQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzVCLENBQUM7OztZQTlESixTQUFTOzs7WUFIRCxlQUFlO1lBQ2YsYUFBYTtZQUpiLGVBQWUsdUJBYTZFLE1BQU0sU0FBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbmplY3QsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElOb2RlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3R5cGVzJztcbmltcG9ydCB7IEZJTFRFUl9TVFJJTkcgfSBmcm9tICcuLi8uLi9pbmplY3Rpb24tdG9rZW5zL3Rva2Vucyc7XG5pbXBvcnQgeyBFeHBsb3JlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9leHBsb3Jlci5zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9oZWxwZXIuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGNsYXNzIEJhc2VWaWV3IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICBwdWJsaWMgc2VsZWN0aW9uOiBJTm9kZVtdID0gW107XG4gICAgcHVibGljIGl0ZW1zOiBJTm9kZVtdID0gW107XG4gICAgcHVibGljIGRyYWdnaW5nID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIHN1YnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZXhwbG9yZXJTZXJ2aWNlOiBFeHBsb3JlclNlcnZpY2UsIHByb3RlY3RlZCBoZWxwZXJTZXJ2aWNlOiBIZWxwZXJTZXJ2aWNlLCBASW5qZWN0KEZJTFRFUl9TVFJJTkcpIHByaXZhdGUgZmlsdGVyOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPikge1xuICAgICAgICB0aGlzLnN1YnMuYWRkKHRoaXMuZXhwbG9yZXJTZXJ2aWNlLm9wZW5lZE5vZGUuc3Vic2NyaWJlKG5vZGVzID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBub2RlcyA/IG5vZGVzLmNoaWxkcmVuIDogW107XG4gICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLnN1YnMuYWRkKHRoaXMuZXhwbG9yZXJTZXJ2aWNlLnNlbGVjdGVkTm9kZXMuc3Vic2NyaWJlKG5vZGVzID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbm9kZXMgPyBub2RlcyA6IFtdO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgZ2V0IGZpbHRlcmVkSXRlbXMoKTogSU5vZGVbXSB7XG4gICAgICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuZmlsdGVyLnZhbHVlO1xuICAgICAgICBpZiAoIWZpbHRlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKGkgPT4gdGhpcy5oZWxwZXJTZXJ2aWNlLmdldE5hbWUoaS5kYXRhKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlci50b0xvd2VyQ2FzZSgpKSk7XG4gICAgfVxuXG4gICAgZ2V0RGlzcGxheU5hbWUoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWxwZXJTZXJ2aWNlLmdldE5hbWUoZGF0YSk7XG4gICAgfVxuXG4gICAgc2VsZWN0KGV2ZW50OiBNb3VzZUV2ZW50LCBpdGVtOiBJTm9kZSkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gdGhpcy5zZWxlY3Rpb24uZmluZEluZGV4KGkgPT4gaSA9PT0gaXRlbSk7XG4gICAgICAgIGNvbnN0IGFscmVhZHlTZWxlY3RlZCA9IHNlbGVjdGVkSW5kZXggIT09IC0xO1xuICAgICAgICBjb25zdCBtZXRhS2V5UHJlc3NlZCA9IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleTtcblxuICAgICAgICBpZiAoYWxyZWFkeVNlbGVjdGVkICYmIG1ldGFLZXlQcmVzc2VkKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5zcGxpY2Uoc2VsZWN0ZWRJbmRleCwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIW1ldGFLZXlQcmVzc2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24ubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5leHBsb3JlclNlcnZpY2Uuc2VsZWN0Tm9kZXModGhpcy5zZWxlY3Rpb24pO1xuICAgIH1cblxuICAgIG9wZW4oZXZlbnQ6IE1vdXNlRXZlbnQsIGl0ZW06IElOb2RlKSB7XG4gICAgICAgIGNvbnN0IG1ldGFLZXlQcmVzc2VkID0gZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5O1xuICAgICAgICBpZiAoIW1ldGFLZXlQcmVzc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmV4cGxvcmVyU2VydmljZS5vcGVuTm9kZShpdGVtLmlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzU2VsZWN0ZWQoaXRlbTogSU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uLmluZGV4T2YoaXRlbSkgIT09IC0xO1xuICAgIH1cblxuICAgIGVtcHR5U3BhY2VDbGljaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5leHBsb3JlclNlcnZpY2Uuc2VsZWN0Tm9kZXMoW10pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbn1cbiJdfQ==