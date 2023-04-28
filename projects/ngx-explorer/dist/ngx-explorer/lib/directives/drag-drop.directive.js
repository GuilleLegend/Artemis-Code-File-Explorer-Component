import { __decorate } from "tslib";
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
let DragDropDirective = class DragDropDirective {
    constructor(explorerService) {
        this.explorerService = explorerService;
        this.dragEnter = new EventEmitter();
        this.dragOver = new EventEmitter();
        this.dragLeave = new EventEmitter();
        this.dragDrop = new EventEmitter();
        this.dragging = new EventEmitter();
    }
    onDragEnter(event) {
        event.preventDefault();
        event.stopPropagation();
        this.dragEnter.emit(event);
        this.dragging.emit(true);
    }
    onDragOver(event) {
        event.preventDefault();
        event.stopPropagation();
        this.dragOver.emit(event);
        this.dragging.emit(true);
    }
    onDragLeave(event) {
        event.preventDefault();
        event.stopPropagation();
        this.dragLeave.emit(event);
        this.dragging.emit(false);
    }
    onDrop(event) {
        event.preventDefault();
        event.stopPropagation();
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            this.explorerService.upload(files);
            this.dragDrop.emit(files);
        }
        this.dragging.emit(false);
    }
};
__decorate([
    Output()
], DragDropDirective.prototype, "dragEnter", void 0);
__decorate([
    Output()
], DragDropDirective.prototype, "dragOver", void 0);
__decorate([
    Output()
], DragDropDirective.prototype, "dragLeave", void 0);
__decorate([
    Output()
], DragDropDirective.prototype, "dragDrop", void 0);
__decorate([
    Output()
], DragDropDirective.prototype, "dragging", void 0);
__decorate([
    HostListener('dragenter', ['$event'])
], DragDropDirective.prototype, "onDragEnter", null);
__decorate([
    HostListener('dragover', ['$event'])
], DragDropDirective.prototype, "onDragOver", null);
__decorate([
    HostListener('dragleave', ['$event'])
], DragDropDirective.prototype, "onDragLeave", null);
__decorate([
    HostListener('drop', ['$event'])
], DragDropDirective.prototype, "onDrop", null);
DragDropDirective = __decorate([
    Directive({
        selector: '[nxeDragDrop]'
    })
], DragDropDirective);
export { DragDropDirective };
//# sourceMappingURL=drag-drop.directive.js.map