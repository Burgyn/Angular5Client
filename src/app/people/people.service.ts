import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Person } from './person.model';

@Injectable()
export class PeopleService {

    constructor(private httpClient: HttpClient) { }

    getPeople(): Observable<Person[]> {
        return this.httpClient.get<Person[]>('http://sampleaspnetcorewebapi.azurewebsites.net/api/people');
    }

}
