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
                template: "<div class=\"nxe-icons\" nxeDragDrop (dragging)=\"dragging = $event\">\n    <div class=\"nxe-icons-drag\" [ngClass]=\"{ dragging: dragging}\"></div>\n    <div class=\"nxe-icons-backpad\" (click)=\"emptySpaceClick()\"  (contextmenu)=\"emptySpaceClick()\"></div>\n    <div class=\"nxe-icons-container\">\n        <div class=\"nxe-icons-wrapper\" *ngFor=\"let item of filteredItems\" (dblclick)=\"openner($event, item)\" (click)=\"select($event, item)\" (contextmenu)=\"rightClick($event, item)\">\n            <div class=\"nxe-icons-wrapper-inner\" [ngClass]=\"{'nxe-icon-selected':isSelected(item)}\" [title]=\"getDisplayName(item.data)\">\n                <div class=\"nxe-icons-icon\">\n                    <i [className]=\"getIcons(item)\"></i>\n                </div>\n                <div class=\"nxe-icon-text\">{{ getDisplayName(item.data) }}</div>\n            </div>\n        </div>\n    </div>\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [".txt{background-image:url('../../assets/docIcons/txt.png');background-size:cover;background-position:center;width:70px;height:70px;display: inline-block;} .pdf{background-image:url('../../assets/docIcons/pdf.png');background-size:cover;background-position:center;width:70px;height:70px;display: inline-block;} .audio{background-image:url('../../assets/docIcons/audio.png');background-size:cover;background-position:center;width:70px;height:70px;display: inline-block;} .code{background-image:url('../../assets/docIcons/code.png');background-size:cover;background-position:center;width:70px;height:70px;display: inline-block;} .doc{background-image:url('../../assets/docIcons/docx.png');background-size:cover;background-position:center;width:70px;height:70px;display: inline-block;} .exe{background-image:url('../../assets/docIcons/exe.png');background-size:cover;background-position:center;width:70px;height:70px;display: inline-block;} .odp{background-image:url('../../assets/docIcons/odp.png');background-size:cover;background-position:center;width:70px;height:70px;display: inline-block;} .img{background-image:url('../../assets/docIcons/photo.png');background-size:cover;background-position:center;width:70px;height:70px;display: inline-block;} .pptx{background-image:url('../../assets/docIcons/pptx.png');background-size:cover;background-position:center;width:70px;height:70px;display: inline-block;} .vector{background-image:url('../../assets/docIcons/vector.png');background-size:cover;background-position:center;width:70px;height:70px;display: inline-block;} .video{background-image:url('../../assets/docIcons/video.png');background-size:cover;background-position:center;width:70px;height:70px;display: inline-block;} .xlsx{background-image:url('../../assets/docIcons/xlsx.png');background-size:cover;background-position:center;width:70px;height:70px;display: inline-block;} .zip{background-image:url('../../assets/docIcons/zip.png');background-size:cover;background-position:center;width:70px;height:70px;display: inline-block;} .nxe-icons{height:100%;position:absolute;width:100%}.nxe-icons .nxe-icons-drag{bottom:2px;left:2px;position:absolute;right:2px;top:2px}.nxe-icons .nxe-icons-drag.dragging{border:2px dashed #30a2ff;margin:-2px}.nxe-icons .nxe-icons-backpad{height:100%;left:0;position:absolute;top:0;width:100%}.nxe-icons .nxe-icons-container{display:flex;flex-wrap:wrap}.nxe-icons .nxe-icons-container .nxe-icons-wrapper{display:inline-block;flex-grow:0;height:110px;margin:10px 10px 0;width:80px;z-index:1}.nxe-icons .nxe-icons-container .nxe-icons-wrapper .nxe-icons-wrapper-inner{border:1px solid transparent;border-radius:5px;padding-bottom:5px;text-align:center}.nxe-icons .nxe-icons-container .nxe-icons-wrapper .nxe-icons-wrapper-inner:hover{cursor:pointer}.nxe-icons .nxe-icons-container .nxe-icons-wrapper .nxe-icons-wrapper-inner .nxe-icons-icon{margin-top:5px}.nxe-icons .nxe-icons-container .nxe-icons-wrapper .nxe-icons-wrapper-inner .nxe-icons-icon i{color:#555;font-size:50px;font-weight:500}.nxe-icons .nxe-icons-container .nxe-icons-wrapper .nxe-icons-wrapper-inner .nxe-icons-icon i.nxe-folder{color:#fdb900}.nxe-icons .nxe-icons-container .nxe-icons-wrapper .nxe-icons-wrapper-inner .nxe-icons-icon i.nxe-doc{-webkit-text-stroke:3px #fff}.nxe-icons .nxe-icons-container .nxe-icons-wrapper .nxe-icons-wrapper-inner.nxe-icon-selected{background-color:#f1f9ff;border:1px solid #94cfff}.nxe-icons .nxe-icons-container .nxe-icons-wrapper .nxe-icons-wrapper-inner.nxe-icon-selected .nxe-icons-icon i.nxe-doc{-webkit-text-stroke:3px #f1f9ff}.nxe-icons .nxe-icons-container .nxe-icons-wrapper .nxe-icon-text{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden;text-align:center;text-overflow:ellipsis}"]
            },] }
];
IconsComponent.ctorParameters = () => [
    { type: ExplorerService },
    { type: HelperService },
    { type: BehaviorSubject, decorators: [{ type: Inject, args: [FILTER_STRING,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25neC1leHBsb3Jlci9uZ3gtZXhwbG9yZXIvcHJvamVjdHMvbmd4LWV4cGxvcmVyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ljb25zL2ljb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQVE1RCxNQUFNLE9BQU8sY0FBZSxTQUFRLFFBQVE7SUFPeEMsWUFBWSxlQUFnQyxFQUFFLGFBQTRCLEVBQXlCLE1BQStCO1FBQzlILEtBQUssQ0FBQyxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBTmxDLFVBQUssR0FBRztZQUNwQixJQUFJLEVBQUUsWUFBWTtZQUNsQixJQUFJLEVBQUUsU0FBUztTQUNsQixDQUFDO0lBSUYsQ0FBQzs7O1lBZkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxXQUFXO2dCQUNyQiw4MUJBQXFDO2dCQUVyQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDeEM7OztZQVRRLGVBQWU7WUFDZixhQUFhO1lBSGIsZUFBZSx1QkFtQnlELE1BQU0sU0FBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZJTFRFUl9TVFJJTkcgfSBmcm9tICcuLi8uLi9pbmplY3Rpb24tdG9rZW5zL3Rva2Vucyc7XG5pbXBvcnQgeyBFeHBsb3JlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9leHBsb3Jlci5zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9oZWxwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBCYXNlVmlldyB9IGZyb20gJy4uL2Jhc2Utdmlldy9iYXNlLXZpZXcuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdueGUtaWNvbnMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9pY29ucy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vaWNvbnMuY29tcG9uZW50LnNjc3MnXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBJY29uc0NvbXBvbmVudCBleHRlbmRzIEJhc2VWaWV3IHtcblxuICAgIHB1YmxpYyByZWFkb25seSBpY29ucyA9IHtcbiAgICAgICAgbm9kZTogJ254ZS1mb2xkZXInLFxuICAgICAgICBsZWFmOiAnbnhlLWRvYycsXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKGV4cGxvcmVyU2VydmljZTogRXhwbG9yZXJTZXJ2aWNlLCBoZWxwZXJTZXJ2aWNlOiBIZWxwZXJTZXJ2aWNlLCBASW5qZWN0KEZJTFRFUl9TVFJJTkcpIGZpbHRlcjogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4pIHtcbiAgICAgICAgc3VwZXIoZXhwbG9yZXJTZXJ2aWNlLCBoZWxwZXJTZXJ2aWNlLCBmaWx0ZXIpO1xuICAgIH1cblxufVxuIl19