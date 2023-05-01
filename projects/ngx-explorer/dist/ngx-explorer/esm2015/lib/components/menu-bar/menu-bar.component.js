import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExplorerService } from '../../services/explorer.service';
import { HelperService } from '../../services/helper.service';
export class MenuBarComponent {
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
}
MenuBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'nxe-menu-bar',
                template: "<div class=\"nxe-menu-bar\">\n    <div class=\"nxe-menu-bar-left\">    \n        <button class=\"nxe-menu-bar-button\" (click)=\"createFolder()\"><i class=\"nxe-folder\" aria-hidden=\"true\"></i>New Folder</button>\n        <button class=\"nxe-menu-bar-button\" (click)=\"refresh()\"><i class=\"nxe-arrows-cw\" aria-hidden=\"true\"></i> Refresh</button>\n        <button class=\"nxe-menu-bar-button\" (click)=\"openUploader()\"><i class=\"nxe-upload\" aria-hidden=\"true\"></i> Upload</button>\n        <button class=\"nxe-menu-bar-button\" [hidden]=\"!canDownload\" (click)=\"download()\"><i class=\"nxe-download\" aria-hidden=\"true\"></i> Download</button>\n        <button class=\"nxe-menu-bar-button\" [hidden]=\"!canRename\" (click)=\"rename()\"><i class=\"nxe-edit\" aria-hidden=\"true\"></i> Rename</button>\n <button class=\"nxe-menu-bar-button\" [hidden]=\"!canOpen\" (click)=\"open()\"><i class=\"nxe-open\" aria-hidden=\"true\"></i>Open</button>\n <button class=\"nxe-menu-bar-button\" [hidden]=\"!canShare\" (click)=\"share()\"><i class=\"nxe-share\" aria-hidden=\"true\"></i>Share</button>\n        <button class=\"nxe-menu-bar-button\" [hidden]=\"!canDelete\" (click)=\"remove()\"><i class=\"nxe-trash-empty\" aria-hidden=\"true\"></i> Delete</button>\n    </div>\n\n    <div class=\"nxe-menu-bar-right\">\n        <nxe-view-switcher></nxe-view-switcher>\n    </div>\n    <input style=\"display: none\" type=\"file\" multiple (change)=\"handleFiles($event.target.files)\" #uploader>\n</div>",
                encapsulation: ViewEncapsulation.None,
                styleUrls: ['./menu-bar.component.scss']
            },] }
];
MenuBarComponent.ctorParameters = () => [
    { type: ExplorerService },
    { type: HelperService }
];
MenuBarComponent.propDecorators = {
    uploader: [{ type: ViewChild, args: ['uploader', { static: true },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25neC1leHBsb3Jlci9uZ3gtZXhwbG9yZXIvcHJvamVjdHMvbmd4LWV4cGxvcmVyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL21lbnUtYmFyL21lbnUtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUF5QixTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVwQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBUTlELE1BQU0sT0FBTyxnQkFBZ0I7SUFVekIsWUFBb0IsZUFBZ0MsRUFBVSxhQUE0QjtRQUF0RSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQVAxRixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFVixRQUFHLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6QixjQUFTLEdBQVksRUFBRSxDQUFDO1FBRzVCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMxRCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFFRCxZQUFZO1FBQ1IsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDN0MsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QztJQUNMLENBQUM7SUFFRCxPQUFPO1FBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsTUFBTTtRQUNGLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzdCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkUsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2xELElBQUksT0FBTyxFQUFFO2dCQUNULElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3hDO1NBQ0o7SUFDTCxDQUFDO0lBRUQsTUFBTTtRQUNGLElBQUksT0FBTyxDQUFDLHFEQUFxRCxDQUFDLEVBQUU7WUFDaEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNqQztJQUNMLENBQUM7SUFFRCxZQUFZO1FBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7WUFuRUosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxjQUFjO2dCQUN4Qiw2c0NBQXdDO2dCQUV4QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDeEM7OztZQVJRLGVBQWU7WUFDZixhQUFhOzs7dUJBU2pCLFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSU5vZGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvdHlwZXMnO1xuaW1wb3J0IHsgRXhwbG9yZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZXhwbG9yZXIuc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaGVscGVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ254ZS1tZW51LWJhcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21lbnUtYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9tZW51LWJhci5jb21wb25lbnQuc2NzcyddLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTWVudUJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgQFZpZXdDaGlsZCgndXBsb2FkZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSB1cGxvYWRlcjogRWxlbWVudFJlZjtcblxuICAgIGNhbkRvd25sb2FkID0gZmFsc2U7XG4gICAgY2FuRGVsZXRlID0gZmFsc2U7XG4gICAgY2FuUmVuYW1lID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIHN1YiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICBwcml2YXRlIHNlbGVjdGlvbjogSU5vZGVbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBleHBsb3JlclNlcnZpY2U6IEV4cGxvcmVyU2VydmljZSwgcHJpdmF0ZSBoZWxwZXJTZXJ2aWNlOiBIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuc3ViLmFkZCh0aGlzLmV4cGxvcmVyU2VydmljZS5zZWxlY3RlZE5vZGVzLnN1YnNjcmliZShuID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbjtcbiAgICAgICAgICAgIHRoaXMuY2FuRG93bmxvYWQgPSBuLmZpbHRlcih4ID0+IHguaXNMZWFmKS5sZW5ndGggPT09IDE7XG4gICAgICAgICAgICB0aGlzLmNhbkRlbGV0ZSA9IG4ubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIHRoaXMuY2FuUmVuYW1lID0gbi5sZW5ndGggPT09IDE7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBjcmVhdGVGb2xkZXIoKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBwcm9tcHQoJ0VudGVyIG5ldyBmb2xkZXIgbmFtZScpO1xuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgdGhpcy5leHBsb3JlclNlcnZpY2UuY3JlYXRlTm9kZShuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMuZXhwbG9yZXJTZXJ2aWNlLnJlZnJlc2goKTtcbiAgICB9XG5cbiAgICByZW5hbWUoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IG9sZE5hbWUgPSB0aGlzLmhlbHBlclNlcnZpY2UuZ2V0TmFtZSh0aGlzLnNlbGVjdGlvblswXS5kYXRhKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld05hbWUgPSBwcm9tcHQoJ0VudGVyIG5ldyBuYW1lJywgb2xkTmFtZSk7XG4gICAgICAgICAgICBpZiAobmV3TmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwbG9yZXJTZXJ2aWNlLnJlbmFtZShuZXdOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgaWYgKGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhlIHNlbGVjdGVkIGZpbGVzPycpKSB7XG4gICAgICAgICAgICB0aGlzLmV4cGxvcmVyU2VydmljZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9wZW5VcGxvYWRlcigpIHtcbiAgICAgICAgdGhpcy51cGxvYWRlci5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XG4gICAgfVxuXG4gICAgaGFuZGxlRmlsZXMoZmlsZXM6IEZpbGVbXSkge1xuICAgICAgICB0aGlzLmV4cGxvcmVyU2VydmljZS51cGxvYWQoZmlsZXMpO1xuICAgICAgICB0aGlzLnVwbG9hZGVyLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICBkb3dubG9hZCgpIHtcbiAgICAgICAgdGhpcy5leHBsb3JlclNlcnZpY2UuZG93bmxvYWQoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbn1cbiJdfQ==