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
            leaf: 'txt',
            pdf: 'pdf',
            audio: 'audio',
            code: 'code',
            doc: 'doc',
            exe: 'exe',
            odp: 'odp',
            img: 'img',
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
            'image/jpeg': 'img',
            'image/png': 'img',
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
        let photoName = this.photoMap[fileType] || 'txt';
        if (!fileType) {
            const type = (data.name).split('.');
            if (type[type.length - 1] == 'png') {
                photoName = 'img';
                return photoName;
            }
            else if (type[type.length - 1] == 'jpg') {
                photoName = 'img';
                return photoName;
            }
        }
        return photoName;
    }
}
ListComponent.decorators = [
    { type: Component, args: [{
                selector: 'nxe-list',
                template:  "<div class=\"nxe-list\" nxeDragDrop (dragging)=\"dragging = $event\">\n    <div class=\"nxe-list-drag\" (click)=\"emptySpaceClick()\" (contextmenu)=\"emptySpaceClick()\" [ngClass]=\"{ dragging: dragging}\"></div>\n    <div class=\"nxe-list-backpad\"></div>\n    <div class=\"nxe-list-container\">\n        <div class=\"nxe-list-wrapper \">\n            <table>\n                <thead>\n                    <tr>\n                        <th (click)=\"orderByName()\">Name</th>\n                        <th>Type</th>\n                        <th (click)=\"orderBySize()\">Size</th>\n                        <th (click)=\"orderByDate()\">Last Modified</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let item of filteredItems\" (dblclick)=\"openner($event, item)\" (click)=\"select($event, item)\" (contextmenu)=\"rightClick($event, item)\" \n                        [ngClass]=\"{'nxe-list-row-selected':isSelected(item)}\">\n                        <td>\n                            <span class=\"nxe-list-icon\">\n                                <i [className]=\"getIcons(item)\"></i>\n                            </span>\n                            {{ getDisplayName(item.data) }}\n                        </td>\n                        <td>{{ getFileType(item.data) }}</td>\n                        <td>{{ getSize(item.data) }}</td>\n                        <td>{{ getLastModified(item.data) }}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [".txt{background-image:url('../../assets/docIcons/txt.png');background-size:cover;background-position:center;width:20px;height:20px;display: inline-block;} .pdf{background-image:url('../../assets/docIcons/pdf.png');background-size:cover;background-position:center;width:20px;height:20px;display: inline-block;} .audio{background-image:url('../../assets/docIcons/audio.png');background-size:cover;background-position:center;width:20px;height:20px;display: inline-block;} .code{background-image:url('../../assets/docIcons/code.png');background-size:cover;background-position:center;width:20px;height:20px;display: inline-block;} .doc{background-image:url('../../assets/docIcons/docx.png');background-size:cover;background-position:center;width:20px;height:20px;display: inline-block;} .exe{background-image:url('../../assets/docIcons/exe.png');background-size:cover;background-position:center;width:20px;height:20px;display: inline-block;} .odp{background-image:url('../../assets/docIcons/odp.png');background-size:cover;background-position:center;width:20px;height:20px;display: inline-block;} .img{background-image:url('../../assets/docIcons/photo.png');background-size:cover;background-position:center;width:20px;height:20px;display: inline-block;} .pptx{background-image:url('../../assets/docIcons/pptx.png');background-size:cover;background-position:center;width:20px;height:20px;display: inline-block;} .vector{background-image:url('../../assets/docIcons/vector.png');background-size:cover;background-position:center;width:20px;height:20px;display: inline-block;} .video{background-image:url('../../assets/docIcons/video.png');background-size:cover;background-position:center;width:20px;height:20px;display: inline-block;} .xlsx{background-image:url('../../assets/docIcons/xlsx.png');background-size:cover;background-position:center;width:20px;height:20px;display: inline-block;} .zip{background-image:url('../../assets/docIcons/zip.png');background-size:cover;background-position:center;width:20px;height:20px;display: inline-block;} .nxe-list{height:100%;position:absolute;width:100%}.nxe-list .nxe-list-drag{bottom:2px;left:2px;position:absolute;right:2px;top:2px;z-index:1}.nxe-list .nxe-list-drag.dragging{border:2px dashed #30a2ff;margin:-2px}.nxe-list .nxe-list-backpad{height:100%;left:0;position:absolute;top:0;width:100%}.nxe-list .nxe-list-container{display:flex;flex-wrap:wrap}.nxe-list .nxe-list-container .nxe-list-wrapper{display:inline-block;flex-grow:0;height:100%;width:100%;z-index:1}.nxe-list .nxe-list-container .nxe-list-wrapper table{border-collapse:collapse;border-spacing:0;width:100%}.nxe-list .nxe-list-container .nxe-list-wrapper table thead{border-bottom:1px solid #ccc}.nxe-list .nxe-list-container .nxe-list-wrapper table thead tr th{border-collapse:collapse;border-right:1px solid #ccc;border-spacing:0;font-weight:400;padding:10px;text-align:left}.nxe-list .nxe-list-container .nxe-list-wrapper table thead tr th:last-child{border-right:none}.nxe-list .nxe-list-container .nxe-list-wrapper table tbody tr:nth-child(2n){background-color:#f4f4f4}.nxe-list .nxe-list-container .nxe-list-wrapper table tbody tr.nxe-list-row-selected,.nxe-list .nxe-list-container .nxe-list-wrapper table tbody tr:hover{background-color:#d7edff}.nxe-list .nxe-list-container .nxe-list-wrapper table tbody tr td{padding:8px 10px}.nxe-list .nxe-list-container .nxe-list-wrapper table tbody tr td .nxe-list-icon{color:#555;margin-right:5px}.nxe-list .nxe-list-container .nxe-list-wrapper table tbody tr td .nxe-list-icon .nxe-folder{color:#fdb900}"]

            },] }
];
ListComponent.ctorParameters = () => [
    { type: ExplorerService },
    { type: HelperService },
    { type: BehaviorSubject, decorators: [{ type: Inject, args: [FILTER_STRING,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbmd4LWV4cGxvcmVyL25neC1leHBsb3Jlci9wcm9qZWN0cy9uZ3gtZXhwbG9yZXIvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQVE1RCxNQUFNLE9BQU8sYUFBYyxTQUFRLFFBQVE7SUFPekMsWUFBWSxlQUFnQyxFQUFFLGFBQTRCLEVBQXlCLE1BQStCO1FBQ2hJLEtBQUssQ0FBQyxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBTmhDLFVBQUssR0FBRztZQUN0QixJQUFJLEVBQUUsWUFBWTtZQUNsQixJQUFJLEVBQUUsU0FBUztTQUNoQixDQUFDO0lBSUYsQ0FBQzs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixpNUNBQW9DO2dCQUVwQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7OztZQVRRLGVBQWU7WUFDZixhQUFhO1lBSGIsZUFBZSx1QkFtQnVELE1BQU0sU0FBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZJTFRFUl9TVFJJTkcgfSBmcm9tICcuLi8uLi9pbmplY3Rpb24tdG9rZW5zL3Rva2Vucyc7XG5pbXBvcnQgeyBFeHBsb3JlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9leHBsb3Jlci5zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9oZWxwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBCYXNlVmlldyB9IGZyb20gJy4uL2Jhc2Utdmlldy9iYXNlLXZpZXcuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnhlLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpc3QuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBleHRlbmRzIEJhc2VWaWV3IHtcblxuICBwdWJsaWMgcmVhZG9ubHkgaWNvbnMgPSB7XG4gICAgbm9kZTogJ254ZS1mb2xkZXInLFxuICAgIGxlYWY6ICdueGUtZG9jJyxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihleHBsb3JlclNlcnZpY2U6IEV4cGxvcmVyU2VydmljZSwgaGVscGVyU2VydmljZTogSGVscGVyU2VydmljZSwgQEluamVjdChGSUxURVJfU1RSSU5HKSBmaWx0ZXI6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KSB7XG4gICAgc3VwZXIoZXhwbG9yZXJTZXJ2aWNlLCBoZWxwZXJTZXJ2aWNlLCBmaWx0ZXIpO1xuICB9XG5cbn1cbiJdfQ==