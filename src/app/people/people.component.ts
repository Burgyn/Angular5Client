import { Component, OnInit } from '@angular/core';
import { MatList, MatListOptionChange, MatDialog } from '@angular/material';
import { PeopleService } from './people.service';
import { Person } from './person.model';
import { PersonDialogComponent } from '../person-dialog/person-dialog.component';
import { PersonDeleteDialogComponent } from '../person-delete-dialog/person-delete-dialog.component';

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
    people: Person[];
    selectedIndex = 0;

    constructor(
        private peopleService: PeopleService,
        private personDialog: MatDialog
    ) { }

    ngOnInit() {
        this.peopleService.getPeople()
            .subscribe(data =>
                this.people = data
            );
    }

    onSelectedIndexChanged(index: number) {
        this.selectedIndex = index;
    }

    onAddPersonClick() {
        this.personDialog.open(PersonDialogComponent, {
            width: '400px',
            data: { person: null }
        })
            .afterClosed()
            .subscribe(
                resultPerson => {
                    if (resultPerson !== 'cancel') {
                        this.people.push(resultPerson);
                        this.selectedIndex = this.people.indexOf(resultPerson);
                    }
                }
            );
    }

    onEditPersonClick() {
        const person = this.people[this.selectedIndex];

        this.personDialog.open(PersonDialogComponent, {
            width: '400px',
            data: { person: person }
        })
            .afterClosed()
            .subscribe(
                resultPerson => {
                    if (resultPerson !== 'cancel') {
                        this.people[this.selectedIndex].firstName = resultPerson.firstName;
                        this.people[this.selectedIndex].lastName = resultPerson.lastName;
                        this.people[this.selectedIndex].email = resultPerson.email;
                    }
                }
            );
    }

    onDeletePersonClick() {
        const person = this.people[this.selectedIndex];

        this.personDialog.open(PersonDeleteDialogComponent, {
            data: { person: person }
        })
            .afterClosed()
            .subscribe(
                result => {
                    if (result) {
                        const index = this.people[this.selectedIndex].id;
                        this.people.splice(this.selectedIndex, 1);
                        this.peopleService.deletePerson(index).subscribe();
                        this.selectPersonAfterDeletion();
                    }
                }
            );
    }

    private selectPersonAfterDeletion(): void {
        if (this.selectedIndex >= this.people.length) {
            this.selectedIndex = this.people.length - 1;
        }
    }

    isSelected(index: number): boolean {
        return this.selectedIndex === index;
    }

}
