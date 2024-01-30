import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../models/fin-tech_api/stock';
import { StockData } from '../models/fin-tech_api/stock-data';

const API_ENDPOINT = 'https://fintechcloud.azurewebsites.net';

@Injectable({
  providedIn: 'root'
})
export class FinTechAPIService {
  constructor(
    private http: HttpClient
  ) { }

  public getStock(symbol: string = 'PLCE'): Observable<Stock> {
    return this.http.get<Stock>(`${API_ENDPOINT}/stocks/${symbol}`);
  }

  public getStockList(): Observable<Stock[]> {
    return this.http.get<Stock[]>(`${API_ENDPOINT}/stocks`);
  }

  public getStockDataList(symbol: string = 'UNH'): Observable<StockData[]> {
    return this.http.get<StockData[]>(`${API_ENDPOINT}/stockprices/${symbol}`);
  }
}
