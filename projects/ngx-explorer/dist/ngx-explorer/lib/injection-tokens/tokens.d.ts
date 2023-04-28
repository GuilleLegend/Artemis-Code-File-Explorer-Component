import { InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AvialableView } from '../shared/types';
export declare const CURRENT_VIEW: InjectionToken<BehaviorSubject<AvialableView>>;
export declare const FILTER_STRING: InjectionToken<BehaviorSubject<string>>;
