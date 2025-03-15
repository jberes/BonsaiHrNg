import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { PeopleType } from '../models/bamboo-sales/people-type';
import { BambooSalesService } from '../services/bamboo-sales.service';

@Component({
  selector: 'app-org-chart',
  standalone: false,
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.scss']
})
export class OrgChartComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public selectedReportsTo?: string;
  public bambooSalesPeople: PeopleType[] = [];
  public value: string = 'PlaceHolderfor ApexTree';

  constructor(
    private bambooSalesService: BambooSalesService,
  ) {}


  ngOnInit() {
    this.bambooSalesService.getPeopleList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.bambooSalesPeople = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
