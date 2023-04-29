import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FILTER_STRING } from '../../injection-tokens/tokens';
import { ExplorerService } from '../../services/explorer.service';
import { HelperService } from '../../services/helper.service';
import { BaseView } from '../base-view/base-view.directive';
export class IconsComponent extends BaseView {
    constructor(explorerService, helperService, filter) {
        super(explorerService, helperService, filter);
        this.icons = {
            node: 'nxe-folder',
            leaf: 'txt',
            pdf: 'pdf',
            audio: 'audio',
            code: 'code',
            doc: 'doc',
            exe: 'exe',
            odp: 'odp',
            img: 'photo',
            pptx: 'pptx',
            vector: 'vector',
            video: 'video',
            xlsx: 'xlsx',
            zip: 'zip',
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
IconsComponent.decorators = [
    { type: Component, args: [{
                selector: 'nxe-icons',
                templateUrl: './icons.component.html',
                encapsulation: ViewEncapsulation.None,
                styleUrls: ['./icons.component.scss']
            },] }
];
IconsComponent.ctorParameters = () => [
    { type: ExplorerService },
    { type: HelperService },
    { type: BehaviorSubject, decorators: [{ type: Inject, args: [FILTER_STRING,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25neC1leHBsb3Jlci9uZ3gtZXhwbG9yZXIvcHJvamVjdHMvbmd4LWV4cGxvcmVyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ljb25zL2ljb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQVE1RCxNQUFNLE9BQU8sY0FBZSxTQUFRLFFBQVE7SUFPeEMsWUFBWSxlQUFnQyxFQUFFLGFBQTRCLEVBQXlCLE1BQStCO1FBQzlILEtBQUssQ0FBQyxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBTmxDLFVBQUssR0FBRztZQUNwQixJQUFJLEVBQUUsWUFBWTtZQUNsQixJQUFJLEVBQUUsU0FBUztTQUNsQixDQUFDO0lBSUYsQ0FBQzs7O1lBZkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxXQUFXO2dCQUNyQiw4MUJBQXFDO2dCQUVyQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDeEM7OztZQVRRLGVBQWU7WUFDZixhQUFhO1lBSGIsZUFBZSx1QkFtQnlELE1BQU0sU0FBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZJTFRFUl9TVFJJTkcgfSBmcm9tICcuLi8uLi9pbmplY3Rpb24tdG9rZW5zL3Rva2Vucyc7XG5pbXBvcnQgeyBFeHBsb3JlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9leHBsb3Jlci5zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9oZWxwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBCYXNlVmlldyB9IGZyb20gJy4uL2Jhc2Utdmlldy9iYXNlLXZpZXcuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdueGUtaWNvbnMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9pY29ucy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vaWNvbnMuY29tcG9uZW50LnNjc3MnXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBJY29uc0NvbXBvbmVudCBleHRlbmRzIEJhc2VWaWV3IHtcblxuICAgIHB1YmxpYyByZWFkb25seSBpY29ucyA9IHtcbiAgICAgICAgbm9kZTogJ254ZS1mb2xkZXInLFxuICAgICAgICBsZWFmOiAnbnhlLWRvYycsXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKGV4cGxvcmVyU2VydmljZTogRXhwbG9yZXJTZXJ2aWNlLCBoZWxwZXJTZXJ2aWNlOiBIZWxwZXJTZXJ2aWNlLCBASW5qZWN0KEZJTFRFUl9TVFJJTkcpIGZpbHRlcjogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4pIHtcbiAgICAgICAgc3VwZXIoZXhwbG9yZXJTZXJ2aWNlLCBoZWxwZXJTZXJ2aWNlLCBmaWx0ZXIpO1xuICAgIH1cblxufVxuIl19