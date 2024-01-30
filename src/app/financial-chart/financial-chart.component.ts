import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';
import { Stock } from '../models/fin-tech_api/stock';
import { StockData } from '../models/fin-tech_api/stock-data';
import { FinTechAPIService } from '../services/fin-tech-api.service';

@Component({
  selector: 'app-financial-chart',
  templateUrl: './financial-chart.component.html',
  styleUrls: ['./financial-chart.component.scss']
})
export class FinancialChartComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  private _selectedStock?: Stock;
  public get selectedStock(): Stock | undefined {
    return this._selectedStock;
  }
  public set selectedStock(value: Stock | undefined) {
    this._selectedStock = value;
    this.finTechAPIStockData$.next();
  }
  public finTechAPIStock: Stock[] = [];
  public finTechAPIStockData: StockData[] = [];
  public finTechAPIStockData$: Subject<void> = new Subject<void>();


  constructor(
    private finTechAPIService: FinTechAPIService,
  ) {}

  ngOnInit() {
    this.finTechAPIService.getStock('UNH').pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.selectedStock = data,
      error: (_err: any) => this.selectedStock = undefined
    });
    this.finTechAPIService.getStockList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.finTechAPIStock = data,
      error: (_err: any) => this.finTechAPIStock = []
    });
    this.finTechAPIService.getStockDataList(this.selectedStock?.stock_symbol as any).pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.finTechAPIStockData = data,
      error: (_err: any) => this.finTechAPIStockData = []
    });
    this.finTechAPIStockData$.pipe(takeUntil(this.destroy$)).subscribe(
      () => { this.finTechAPIService.getStockDataList(this.selectedStock?.stock_symbol as any).pipe(take(1)).subscribe({
        next: (data) => this.finTechAPIStockData = data,
        error: (_err: any) => this.finTechAPIStockData = []
    })});
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.finTechAPIStockData$.complete();
    this.destroy$.complete();
  }

  public listItemClick(item: Stock) {
    this.selectedStock = item as Stock;
  }

  protected getData(data: unknown[]): any[] {
    return (Array.isArray(data[0]) ? data : [data]).map((series: any) => {
      return series.map((item: any) => {
        const dateTimeKey = Object.keys(item).find((key: any) => this.isValidDateISO(item[key]));
        return {
          ...item,
          ...dateTimeKey ? { [dateTimeKey]: this.dateStringToLocalDate(item[dateTimeKey]) } : {},
        }
      });
    });
  }

  private isValidDateISO(value: unknown) {
    return typeof value === 'string' &&  /^\d{4}-\d{2}-\d{2}($|T)/.test(value) && Number.isFinite(Date.parse(value));
  }

  private dateStringToLocalDate(value: string): Date {
    if (value.length === 10 && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
      // It's a full-date string (date-only), add time with no timezone to be parsed as local Date
      return new Date(value + 'T00:00');
    }
    // It's likely date-time, use the default parser as is
    return new Date(value);
  }
}
