import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxGridModule } from 'igniteui-angular';
import { PeopleGridComponent } from './people-grid.component';

describe('PeopleGridComponent', () => {
  let component: PeopleGridComponent;
  let fixture: ComponentFixture<PeopleGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeopleGridComponent],
      imports: [NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxGridModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
