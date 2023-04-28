import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { ExplorerService } from '../services/explorer.service';
export class DragDropDirective {
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
}
DragDropDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nxeDragDrop]'
            },] }
];
DragDropDirective.ctorParameters = () => [
    { type: ExplorerService }
];
DragDropDirective.propDecorators = {
    dragEnter: [{ type: Output }],
    dragOver: [{ type: Output }],
    dragLeave: [{ type: Output }],
    dragDrop: [{ type: Output }],
    dragging: [{ type: Output }],
    onDragEnter: [{ type: HostListener, args: ['dragenter', ['$event'],] }],
    onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
    onDragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }],
    onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1kcm9wLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9uZ3gtZXhwbG9yZXIvbmd4LWV4cGxvcmVyL3Byb2plY3RzL25neC1leHBsb3Jlci9zcmMvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9kcmFnLWRyb3AuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBSy9ELE1BQU0sT0FBTyxpQkFBaUI7SUFPNUIsWUFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBTjFDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ25DLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ25DLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBRU8sQ0FBQztJQUdsRCxXQUFXLENBQUMsS0FBSztRQUN0QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTNCLENBQUM7SUFHTSxVQUFVLENBQUMsS0FBSztRQUNyQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFHTSxXQUFXLENBQUMsS0FBSztRQUN0QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFHTSxNQUFNLENBQUMsS0FBSztRQUNqQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ3ZDLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7WUEvQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2FBQzFCOzs7WUFKUSxlQUFlOzs7d0JBTXJCLE1BQU07dUJBQ04sTUFBTTt3QkFDTixNQUFNO3VCQUNOLE1BQU07dUJBQ04sTUFBTTswQkFJTixZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO3lCQVNwQyxZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDOzBCQVFuQyxZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO3FCQVFwQyxZQUFZLFNBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFeHBsb3JlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9leHBsb3Jlci5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW254ZURyYWdEcm9wXSdcbn0pXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BEaXJlY3RpdmUge1xuICBAT3V0cHV0KCkgZHJhZ0VudGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBkcmFnT3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZHJhZ0xlYXZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBkcmFnRHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZHJhZ2dpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBleHBsb3JlclNlcnZpY2U6IEV4cGxvcmVyU2VydmljZSkgeyB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ2VudGVyJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uRHJhZ0VudGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmRyYWdFbnRlci5lbWl0KGV2ZW50KTtcbiAgICB0aGlzLmRyYWdnaW5nLmVtaXQodHJ1ZSk7XG5cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uRHJhZ092ZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZHJhZ092ZXIuZW1pdChldmVudCk7XG4gICAgdGhpcy5kcmFnZ2luZy5lbWl0KHRydWUpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ2xlYXZlJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uRHJhZ0xlYXZlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmRyYWdMZWF2ZS5lbWl0KGV2ZW50KTtcbiAgICB0aGlzLmRyYWdnaW5nLmVtaXQoZmFsc2UpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkRyb3AoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGZpbGVzID0gZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzO1xuICAgIGlmIChmaWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmV4cGxvcmVyU2VydmljZS51cGxvYWQoZmlsZXMpO1xuICAgICAgdGhpcy5kcmFnRHJvcC5lbWl0KGZpbGVzKTtcbiAgICB9XG4gICAgdGhpcy5kcmFnZ2luZy5lbWl0KGZhbHNlKTtcbiAgfVxuXG59XG4iXX0=