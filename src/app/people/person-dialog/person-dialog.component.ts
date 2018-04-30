import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { PeopleService } from '../shared/people.service';
import { Person } from '../shared/person.model';

@Component({
    templateUrl: './person-dialog.component.html',
    styleUrls: ['./person-dialog.component.css']
})
export class PersonDialogComponent implements OnInit {
    person: Person;
    isEditMode = false;

    constructor(
        private peopleService: PeopleService,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private dialogRef: MatDialogRef<PersonDialogComponent>
    ) { }

    ngOnInit() {
        this.person = this.getPersonCopy(this.data.person);
        this.isEditMode = this.person.id !== undefined;
    }

    private getPersonCopy(person: Person): Person {
        const personTemp = new Person();

        if (person !== null) {
            personTemp.id = person.id;
            personTemp.firstName = person.firstName;
            personTemp.lastName = person.lastName;
            personTemp.email = person.email;
        }

        return personTemp;
    }

    onSaveClick() {
        if (this.isEditMode) {
            this.EditPerson();
        } else {
            this.AddPeson();
        }
    }

    private AddPeson(): void {
        this.peopleService.addPerson(this.person).subscribe(
            data => {
                this.person.id = data.id;
                this.dialogRef.close(this.person);
            },
            error => {
                console.error(error);
            }
        );
    }

    private EditPerson(): void {
        this.peopleService.editPerson(this.person).subscribe(
            data => {
                this.dialogRef.close(this.person);
            },
            error => {
                console.error(error);
            }
        );
    }

}
