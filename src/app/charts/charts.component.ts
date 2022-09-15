import { Component, OnInit } from '@angular/core';
import { FinancialService } from '../services/financial.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  public financialBoxOfficeRevenue: any = null;
  public financialTrading: any = null;
  public financialGlobalElectricityDemand: any = null;

  constructor(
    private financialService: FinancialService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.financialService.getData('BoxOfficeRevenue').subscribe(data => this.financialBoxOfficeRevenue = data);
    this.financialService.getData('Trading').subscribe(data => this.financialTrading = data);
    this.financialService.getData('GlobalElectricityDemand').subscribe(data => this.financialGlobalElectricityDemand = data);
  }
}
