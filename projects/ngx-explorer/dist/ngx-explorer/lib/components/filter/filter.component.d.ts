import { ElementRef, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ExplorerService } from '../../services/explorer.service';
export declare class FilterComponent implements OnDestroy {
    private filter;
    input: ElementRef<HTMLInputElement>;
    private sub;
    constructor(filter: BehaviorSubject<string>, explorerService: ExplorerService);
    onChange(e: KeyboardEvent, value: string): void;
    clear(): void;
    ngOnDestroy(): void;
}
