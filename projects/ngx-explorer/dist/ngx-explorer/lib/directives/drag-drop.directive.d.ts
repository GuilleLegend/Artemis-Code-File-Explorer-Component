import { EventEmitter } from '@angular/core';
import { ExplorerService } from '../services/explorer.service';
export declare class DragDropDirective {
    private explorerService;
    dragEnter: EventEmitter<any>;
    dragOver: EventEmitter<any>;
    dragLeave: EventEmitter<any>;
    dragDrop: EventEmitter<any>;
    dragging: EventEmitter<boolean>;
    constructor(explorerService: ExplorerService);
    onDragEnter(event: any): void;
    onDragOver(event: any): void;
    onDragLeave(event: any): void;
    onDrop(event: any): void;
}
