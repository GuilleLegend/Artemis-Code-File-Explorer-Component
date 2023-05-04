import { __decorate, __param } from "tslib";
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FILTER_STRING } from '../../injection-tokens/tokens';
import { BaseView } from '../base-view/base-view.directive';
let ListComponent = class ListComponent extends BaseView {
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
};
ListComponent = __decorate([
    Component({
        selector: 'nxe-list',
        templateUrl: './list.component.html',
        styleUrls: ['./list.component.scss'],
        encapsulation: ViewEncapsulation.None,
    }),
    __param(2, Inject(FILTER_STRING))
], ListComponent);
export { ListComponent };
//# sourceMappingURL=list.component.js.map