import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxSimpleComboModule, IgxInputGroupModule } from 'igniteui-angular';
import { OrgChartComponent } from './org-chart.component';

describe('OrgChartComponent', () => {
  let component: OrgChartComponent;
  let fixture: ComponentFixture<OrgChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrgChartComponent],
      imports: [NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxSimpleComboModule, IgxInputGroupModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
