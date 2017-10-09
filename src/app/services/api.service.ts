import {Injectable}     from '@angular/core';
import {Responses} from './api/responses';
import {Observable}     from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ApiService {
    getResponse1(): Observable<Object> {
        return Observable.of(Responses.response1);
       }

}