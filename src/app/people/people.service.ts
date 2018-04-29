import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Person } from './person.model';

@Injectable()
export class PeopleService {

    private apiUrl = 'http://sampleaspnetcorewebapi.azurewebsites.net/api/v2/people';

    constructor(private httpClient: HttpClient) { }

    getPeople(): Observable<Person[]> {
        return this.httpClient.get<Person[]>(this.apiUrl);
    }

    addPerson(person: Person): Observable<Person> {
        return this.httpClient.post<Person>(this.apiUrl, person);
    }

    editPerson(person: Person): Observable<Person> {
        return this.httpClient.put<Person>(this.apiUrl + '/' + person.id, person);
    }

    deletePerson(id: number): Observable<Person> {
        return this.httpClient.delete<Person>(this.apiUrl + '/' + id);
    }

}
