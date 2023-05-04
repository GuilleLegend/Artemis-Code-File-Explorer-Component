import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FILTER_STRING } from '../../injection-tokens/tokens';
import { ExplorerService } from '../../services/explorer.service';
import { HelperService } from '../../services/helper.service';
import { BaseView } from '../base-view/base-view.directive';
import { INode } from 'ngx-explorer';

@Component({
  selector: 'nxe-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ListComponent extends BaseView {

  public readonly icons = {
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

  constructor(explorerService: ExplorerService, helperService: HelperService, @Inject(FILTER_STRING) filter: BehaviorSubject<string>) {
    super(explorerService, helperService, filter);
  }

  orderByName() {
    this.items.sort((a, b) => a.data?.name.localeCompare(b.data?.name));
  }

  orderBySize() {
    this.filteredItems.sort((a, b) => Number(this.getSize(a)) - Number(this.getSize(b)));
  }

  orderByDate() {
    this.filteredItems.sort((a, b) => new Date(this.getLastModified(a)).getTime() - new Date(this.getLastModified(b)).getTime());
  }

  openner(event: MouseEvent, item: INode) {
    if (item.isLeaf) {
      this.openLeaf(event, item);
    } else {
      this.open(event, item);
    }
  }

  rightClick(event: MouseEvent, item: INode) {
    super.select(event, item)
    this.dbClick(item);
  }

  select(event: MouseEvent, item: INode) {
    super.select(event, item)
    this.dbSelect(item)
  }

  emptySpaceClick() {
    super.emptySpaceClick()
    this.emptyClick()
  }

  getIcons(item: any): string {
    return item.isLeaf ? this.getIconByFileType(item.data) : this.icons.node;
  }

  getIconByFileType(data: any): string {
    let fileType = this.getFileType(data)
    console.log(data.name);

    let photoName = this.photoMap[fileType] || 'txt';

    if (!fileType) {
      const type = (data.name).split('.');
      if (type[type.length - 1] == 'png') {
        photoName = 'img';
        return photoName;
      } else if (type[type.length - 1] == 'jpg') {
        photoName = 'img';
        return photoName;
      }
    }

    return photoName;
  }

  photoMap = {
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
