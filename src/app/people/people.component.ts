import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { Person } from './person.model';

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
    people: Person[];

    constructor(private peopleService: PeopleService) { }

    ngOnInit() {
        this.peopleService.getPeople()
            .subscribe(data =>
                this.people = data
            );
    }

}
