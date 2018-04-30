import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PeopleService } from './shared/people.service';
import { PeopleComponent } from './people.component';
import { PersonDialogComponent } from './person-dialog/person-dialog.component';
import { PersonDeleteDialogComponent } from './person-delete-dialog/person-delete-dialog.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        PeopleComponent,
        PersonDialogComponent,
        PersonDeleteDialogComponent
    ],
    providers: [
        PeopleService
    ],
    bootstrap: [
        PersonDialogComponent,
        PersonDeleteDialogComponent
    ]
})
export class PeopleModule { }
