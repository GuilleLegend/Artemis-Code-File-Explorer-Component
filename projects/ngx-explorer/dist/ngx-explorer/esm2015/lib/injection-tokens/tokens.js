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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW5zLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25neC1leHBsb3Jlci9uZ3gtZXhwbG9yZXIvcHJvamVjdHMvbmd4LWV4cGxvcmVyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9pbmplY3Rpb24tdG9rZW5zL3Rva2Vucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWhELE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyxJQUFJLGNBQWMsQ0FBaUMsY0FBYyxFQUFFO0lBQzNGLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO0NBQ3pELENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxJQUFJLGNBQWMsQ0FBMEIsZUFBZSxFQUFFO0lBQ3RGLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUM7Q0FDekMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXZpYWxhYmxlVmlldyB9IGZyb20gJy4uL3NoYXJlZC90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBDVVJSRU5UX1ZJRVcgPSBuZXcgSW5qZWN0aW9uVG9rZW48QmVoYXZpb3JTdWJqZWN0PEF2aWFsYWJsZVZpZXc+PignQ1VSUkVOVF9WSUVXJywge1xuICAgIHByb3ZpZGVkSW46ICdyb290JyxcbiAgICBmYWN0b3J5OiAoKSA9PiBuZXcgQmVoYXZpb3JTdWJqZWN0KEF2aWFsYWJsZVZpZXcuSWNvbiksXG59KTtcblxuZXhwb3J0IGNvbnN0IEZJTFRFUl9TVFJJTkcgPSBuZXcgSW5qZWN0aW9uVG9rZW48QmVoYXZpb3JTdWJqZWN0PHN0cmluZz4+KCdGSUxURVJfU1RSSU5HJywge1xuICAgIHByb3ZpZGVkSW46ICdyb290JyxcbiAgICBmYWN0b3J5OiAoKSA9PiBuZXcgQmVoYXZpb3JTdWJqZWN0KCcnKSxcbn0pO1xuIl19