import { Component, OnDestroy, OnInit } from '@angular/core';
import { IPivotConfiguration, IgxPivotDateDimension, IgxPivotNumericAggregate } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { SalesType } from '../models/financial/sales-type';
import { FinancialService } from '../services/financial.service';

@Component({
  selector: 'app-pivot-grid',
  templateUrl: './pivot-grid.component.html',
  styleUrls: ['./pivot-grid.component.scss']
})
export class PivotGridComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public dateDimension: IgxPivotDateDimension = new IgxPivotDateDimension({
    memberName: 'Date',
    enabled: true
  }, {
    months: false,
    quarters: true,
    years: true
  });
  public pivotConfigHierarchy: IPivotConfiguration = {
    columns: [
      {
        memberName: 'Country',
        enabled: true
      },
      {
        memberName: 'Product',
        enabled: true
      }
    ],
    rows: [
      this.dateDimension,
    ],
    values: [
      {
        member: 'Sales',
        aggregate: {
          aggregator: IgxPivotNumericAggregate.sum,
          key: 'Sum Of Sales',
          label: 'Sum'
        },
        enabled: false,
        dataType: 'currency'
      },
      {
        member: 'Profit',
        aggregate: {
          aggregator: IgxPivotNumericAggregate.sum,
          key: 'Sum Of Profit',
          label: 'Sum'
        },
        enabled: true,
        dataType: 'currency'
      }
    ],
    filters: [
      {
        memberName: 'MonthName',
        enabled: false
      }
    ]
  };
  public financialSales: SalesType[] = [];

  constructor(
    private financialService: FinancialService,
  ) {}

  ngOnInit() {
    this.financialService.getData('SalesType').pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.financialSales = data,
      error: (_err: any) => this.financialSales = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
