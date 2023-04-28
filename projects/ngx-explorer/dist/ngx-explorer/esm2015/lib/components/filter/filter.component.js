import { Component, Inject, ViewChild } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { FILTER_STRING } from '../../injection-tokens/tokens';
import { ExplorerService } from '../../services/explorer.service';
export class FilterComponent {
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
}
FilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'nxe-filter',
                template: "<div class=\"nxe-filter\">\n    <input class=\"nxe-filter-input\" type=\"text\" #input (keyup)=\"onChange($event, input.value)\">\n    <button class=\"nxe-filter-button\" (click)=\"clear()\"><i class=\"nxe-cancel\" aria-hidden=\"true\"></i></button>\n</div>",
                styles: [".nxe-filter .nxe-filter-input{border:1px solid #ccc;font-size:1rem;font-weight:300;padding:.25rem}.nxe-filter .nxe-filter-button{background:transparent;border:0;border-radius:5px;cursor:pointer;font-family:inherit;font-size:inherit;font-weight:inherit;margin-left:5px;padding:5px 2px 5px 5px}.nxe-filter .nxe-filter-button:hover{background-color:#d7edff}"]
            },] }
];
FilterComponent.ctorParameters = () => [
    { type: BehaviorSubject, decorators: [{ type: Inject, args: [FILTER_STRING,] }] },
    { type: ExplorerService }
];
FilterComponent.propDecorators = {
    input: [{ type: ViewChild, args: ['input',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9uZ3gtZXhwbG9yZXIvbmd4LWV4cGxvcmVyL3Byb2plY3RzL25neC1leHBsb3Jlci9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLE1BQU0sRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQU9sRSxNQUFNLE9BQU8sZUFBZTtJQUsxQixZQUEyQyxNQUErQixFQUFFLGVBQWdDO1FBQWpFLFdBQU0sR0FBTixNQUFNLENBQXlCO1FBRmxFLFFBQUcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRy9CLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUMvQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVELFFBQVEsQ0FBQyxDQUFnQixFQUFFLEtBQWE7UUFDdEMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3JCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7O1lBakNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsNlFBQXNDOzthQUV2Qzs7O1lBUlEsZUFBZSx1QkFjVCxNQUFNLFNBQUMsYUFBYTtZQVoxQixlQUFlOzs7b0JBUXJCLFNBQVMsU0FBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbmplY3QsIE9uRGVzdHJveSwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRklMVEVSX1NUUklORyB9IGZyb20gJy4uLy4uL2luamVjdGlvbi10b2tlbnMvdG9rZW5zJztcbmltcG9ydCB7IEV4cGxvcmVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2V4cGxvcmVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdueGUtZmlsdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbHRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZpbHRlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0JykgaW5wdXQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG5cbiAgcHJpdmF0ZSBzdWIgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChGSUxURVJfU1RSSU5HKSBwcml2YXRlIGZpbHRlcjogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4sIGV4cGxvcmVyU2VydmljZTogRXhwbG9yZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy5zdWIuYWRkKGV4cGxvcmVyU2VydmljZS50cmVlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfSkpO1xuICB9XG5cbiAgb25DaGFuZ2UoZTogS2V5Ym9hcmRFdmVudCwgdmFsdWU6IHN0cmluZykge1xuICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgdGhpcy5maWx0ZXIubmV4dCgnJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZmlsdGVyLm5leHQodmFsdWUudHJpbSgpKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGlmICghdGhpcy5pbnB1dCkgeyByZXR1cm47IH1cbiAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICB0aGlzLmZpbHRlci5uZXh0KCcnKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxufVxuIl19