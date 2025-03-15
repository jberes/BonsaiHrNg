import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { PeopleType } from '../models/bamboo-sales/people-type';
import { BambooSalesService } from '../services/bamboo-sales.service';

@Component({
  selector: 'app-people-grid',
  standalone: false,
  templateUrl: './people-grid.component.html',
  styleUrls: ['./people-grid.component.scss']
})
export class PeopleGridComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public bambooSalesPeople: PeopleType[] = [];

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
