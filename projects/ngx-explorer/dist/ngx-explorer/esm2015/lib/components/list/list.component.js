import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FILTER_STRING } from '../../injection-tokens/tokens';
import { ExplorerService } from '../../services/explorer.service';
import { HelperService } from '../../services/helper.service';
import { BaseView } from '../base-view/base-view.directive';
export class ListComponent extends BaseView {
    constructor(explorerService, helperService, filter) {
        super(explorerService, helperService, filter);
        this.icons = {
            node: 'nxe-folder',
            leaf: 'nxe-doc',
        };
        this.photoMap = {
            'application/pdf': 'pdf',
            'application/msword': 'doc',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'doc',
            'application/vnd.oasis.opendocument.presentation': 'odp',
            'application/vnd.oasis.opendocument.spreadsheet': 'ods',
            'application/vnd.ms-powerpoint': 'pptx',
            'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'pptx',
            'text/plain': 'txt',
            'video/mp4': 'video',
            'application/vnd.ms-excel': 'xlsx',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
            'image/jpeg': 'photo',
            'image/png': 'photo',
            'audio/x-ms-wma': 'audio',
            'audio/mpeg': 'audio',
            'audio/webm': 'audio.',
            'audio/ogg': 'audio',
            'audio/wav': 'audio',
            'application/x-msdownload': 'exe',
            'application/zip': 'zip',
            'image/svg+xml': 'vector'
        };
    }
    orderByName() {
        this.items.sort((a, b) => { var _a, _b; return (_a = a.data) === null || _a === void 0 ? void 0 : _a.name.localeCompare((_b = b.data) === null || _b === void 0 ? void 0 : _b.name); });
    }
    orderBySize() {
        this.filteredItems.sort((a, b) => Number(this.getSize(a)) - Number(this.getSize(b)));
    }
    orderByDate() {
        this.filteredItems.sort((a, b) => new Date(this.getLastModified(a)).getTime() - new Date(this.getLastModified(b)).getTime());
    }
    openner(event, item) {
        if (item.isLeaf) {
            this.openLeaf(event, item);
        }
        else {
            this.open(event, item);
        }
    }
    rightClick(event, item) {
        super.select(event, item);
        this.dbClick(item);
    }
    select(event, item) {
        super.select(event, item);
        this.dbSelect(item);
    }
    emptySpaceClick() {
        super.emptySpaceClick();
        this.emptyClick();
    }
    getIcons(item) {
        return item.isLeaf ? this.getIconByFileType(item.data) : this.icons.node;
    }
    getIconByFileType(data) {
        let fileType = this.getFileType(data);
        const photoName = this.photoMap[fileType] || 'txt';
        return photoName;
    }
}
ListComponent.decorators = [
    { type: Component, args: [{
                selector: 'nxe-list',
                templateUrl: './list.component.html',
                encapsulation: ViewEncapsulation.None,
                styleUrls: ['./list.component.scss']
            },] }
];
ListComponent.ctorParameters = () => [
    { type: ExplorerService },
    { type: HelperService },
    { type: BehaviorSubject, decorators: [{ type: Inject, args: [FILTER_STRING,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbmd4LWV4cGxvcmVyL25neC1leHBsb3Jlci9wcm9qZWN0cy9uZ3gtZXhwbG9yZXIvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQVE1RCxNQUFNLE9BQU8sYUFBYyxTQUFRLFFBQVE7SUFPekMsWUFBWSxlQUFnQyxFQUFFLGFBQTRCLEVBQXlCLE1BQStCO1FBQ2hJLEtBQUssQ0FBQyxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBTmhDLFVBQUssR0FBRztZQUN0QixJQUFJLEVBQUUsWUFBWTtZQUNsQixJQUFJLEVBQUUsU0FBUztTQUNoQixDQUFDO0lBSUYsQ0FBQzs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixpNUNBQW9DO2dCQUVwQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7OztZQVRRLGVBQWU7WUFDZixhQUFhO1lBSGIsZUFBZSx1QkFtQnVELE1BQU0sU0FBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZJTFRFUl9TVFJJTkcgfSBmcm9tICcuLi8uLi9pbmplY3Rpb24tdG9rZW5zL3Rva2Vucyc7XG5pbXBvcnQgeyBFeHBsb3JlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9leHBsb3Jlci5zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9oZWxwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBCYXNlVmlldyB9IGZyb20gJy4uL2Jhc2Utdmlldy9iYXNlLXZpZXcuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnhlLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpc3QuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBleHRlbmRzIEJhc2VWaWV3IHtcblxuICBwdWJsaWMgcmVhZG9ubHkgaWNvbnMgPSB7XG4gICAgbm9kZTogJ254ZS1mb2xkZXInLFxuICAgIGxlYWY6ICdueGUtZG9jJyxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihleHBsb3JlclNlcnZpY2U6IEV4cGxvcmVyU2VydmljZSwgaGVscGVyU2VydmljZTogSGVscGVyU2VydmljZSwgQEluamVjdChGSUxURVJfU1RSSU5HKSBmaWx0ZXI6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KSB7XG4gICAgc3VwZXIoZXhwbG9yZXJTZXJ2aWNlLCBoZWxwZXJTZXJ2aWNlLCBmaWx0ZXIpO1xuICB9XG5cbn1cbiJdfQ==