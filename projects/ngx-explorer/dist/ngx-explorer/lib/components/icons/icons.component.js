import { __decorate, __param } from "tslib";
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FILTER_STRING } from '../../injection-tokens/tokens';
import { BaseView } from '../base-view/base-view.directive';
let IconsComponent = class IconsComponent extends BaseView {
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
};
IconsComponent = __decorate([
    Component({
        selector: 'nxe-icons',
        templateUrl: './icons.component.html',
        styleUrls: ['./icons.component.scss'],
        encapsulation: ViewEncapsulation.None,
    }),
    __param(2, Inject(FILTER_STRING))
], IconsComponent);
export { IconsComponent };
//# sourceMappingURL=icons.component.js.map