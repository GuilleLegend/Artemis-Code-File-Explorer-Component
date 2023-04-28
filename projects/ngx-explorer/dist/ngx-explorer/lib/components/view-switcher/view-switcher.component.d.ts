import { BehaviorSubject } from 'rxjs';
import { AvialableView } from '../../shared/types';
export declare class ViewSwitcherComponent {
    private currentView;
    readonly avialableView: typeof AvialableView;
    constructor(currentView: BehaviorSubject<AvialableView>);
    setView(view: AvialableView): void;
}
