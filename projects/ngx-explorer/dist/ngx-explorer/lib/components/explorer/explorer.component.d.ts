import { OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AvialableView } from '../../shared/types';
export declare class ExplorerComponent implements OnDestroy {
    private currentView;
    avialableView: typeof AvialableView;
    view: string;
    private sub;
    constructor(currentView: BehaviorSubject<AvialableView>);
    ngOnDestroy(): void;
}
