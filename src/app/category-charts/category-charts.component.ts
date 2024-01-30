import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { GlobalElectricityDemandType } from '../models/financial/global-electricity-demand-type';
import { TradingType } from '../models/financial/trading-type';
import { BoxOfficeRevenueType } from '../models/financial/box-office-revenue-type';
import { FinancialService } from '../services/financial.service';

@Component({
  selector: 'app-category-charts',
  templateUrl: './category-charts.component.html',
  styleUrls: ['./category-charts.component.scss']
})
export class CategoryChartsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public financialBoxOfficeRevenue: BoxOfficeRevenueType[] = [];
  public financialGlobalElectricityDemand: GlobalElectricityDemandType[] = [];
  public financialTrading: TradingType[] = [];

  constructor(
    private financialService: FinancialService,
  ) {}

  ngOnInit() {
    this.financialService.getData('BoxOfficeRevenueType').pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.financialBoxOfficeRevenue = data,
      error: (_err: any) => this.financialBoxOfficeRevenue = []
    });
    this.financialService.getData('GlobalElectricityDemandType').pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.financialGlobalElectricityDemand = data,
      error: (_err: any) => this.financialGlobalElectricityDemand = []
    });
    this.financialService.getData('TradingType').pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.financialTrading = data,
      error: (_err: any) => this.financialTrading = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
