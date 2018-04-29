import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDeleteDialogComponent } from './person-delete-dialog.component';

describe('PersonDeleteDialogComponent', () => {
  let component: PersonDeleteDialogComponent;
  let fixture: ComponentFixture<PersonDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
