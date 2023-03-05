import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRegComponent } from './add-reg.component';

describe('AddRegComponent', () => {
  let component: AddRegComponent;
  let fixture: ComponentFixture<AddRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
