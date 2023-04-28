import { __decorate } from "tslib";
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
let MenuBarComponent = class MenuBarComponent {
    constructor(explorerService, helperService) {
        this.explorerService = explorerService;
        this.helperService = helperService;
        this.canDownload = false;
        this.canDelete = false;
        this.canRename = false;
        this.canOpen = false;
        this.canShare = false;
        this.sub = new Subscription();
        this.selection = [];
        this.sub.add(this.explorerService.selectedNodes.subscribe(n => {
            this.selection = n;
            this.canDownload = n.filter(x => x.isLeaf).length === 1;
            this.canDelete = n.length > 0;
            this.canOpen = n.filter(x => x.isLeaf).length === 1;
            this.canShare = n.filter(x => x.isLeaf).length === 1;
            this.canRename = n.length === 1;
        }));
    }
    open() {
        this.explorerService.open();
    }
    share() {
        this.explorerService.share();
    }
    createFolder() {
        const name = prompt('Enter new folder name');
        if (name) {
            this.explorerService.createNode(name);
        }
    }
    refresh() {
        this.explorerService.refresh();
        this.explorerService.getCurrentPath();
    }
    rename() {
        if (this.selection.length === 1) {
            const oldName = this.helperService.getName(this.selection[0].data);
            const newName = prompt('Enter new name', oldName);
            if (newName) {
                this.explorerService.rename(newName);
            }
        }
    }
    remove() {
        if (confirm('Are you sure you want to delete the selected files?')) {
            this.explorerService.remove();
        }
    }
    openUploader() {
        this.uploader.nativeElement.click();
    }
    handleFiles(files) {
        this.explorerService.upload(files);
        this.uploader.nativeElement.value = '';
    }
    download() {
        this.explorerService.download();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
__decorate([
    ViewChild('uploader', { static: true })
], MenuBarComponent.prototype, "uploader", void 0);
MenuBarComponent = __decorate([
    Component({
        selector: 'nxe-menu-bar',
        templateUrl: './menu-artemis.component.html',
        styleUrls: ['./menu-bar.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], MenuBarComponent);
export { MenuBarComponent };
//# sourceMappingURL=menu-bar.component.js.map