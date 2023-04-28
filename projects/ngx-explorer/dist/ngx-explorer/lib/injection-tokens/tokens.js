import { InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AvialableView } from '../shared/types';
export const CURRENT_VIEW = new InjectionToken('CURRENT_VIEW', {
    providedIn: 'root',
    factory: () => new BehaviorSubject(AvialableView.Icon),
});
export const FILTER_STRING = new InjectionToken('FILTER_STRING', {
    providedIn: 'root',
    factory: () => new BehaviorSubject(''),
});
//# sourceMappingURL=tokens.js.map