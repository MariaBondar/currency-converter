import { ConverterService } from './converter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  amount:number = 0;
  fromCurrency: any;
  toCurrency: any;
  data: any;
  valueFrom: any;
  valueTo: any;
  total: any;
  usd: any;
  totalUsd: any;
  totalEur: any;

  constructor(private converterService: ConverterService) {}

  ngOnInit(): void {
    this.getContry();
    this.getCountryTo();
    this.convertEuro();
    this.convertUsd();
  }

  getContry(): void {
    this.converterService.getNameOfCountry().subscribe(data =>
      this.fromCurrency = Object.entries(data).map((value) => value[0].toUpperCase())
    );
  }

  getCountryTo(): void {
    this.converterService.getNameOfCountry().subscribe(data =>
      this.toCurrency = Object.entries(data).map((value) => value[0].toUpperCase())
    );
  }

  convertEuro() {
    this.converterService.getRatesEur().subscribe(data => {
      this.data = Object.entries(data).map(x => x);
      this.totalEur = Object.entries(data).map(x => x[1])[1].UAH.value;
    });
  }

  convertUsd() {
    this.converterService.getRatesUsd().subscribe(data => {
      this.data = Object.entries(data).map(x => x);
      this.totalUsd = Object.entries(data).map(x => x[1])[1].UAH.value;
      console.log(this.totalUsd)
    });
  }

  convertCurrency(from:any, to:any) {
    this.converterService.convert(from, to).subscribe(data => {
      this.data = Object.entries(data).map(x => x[1]);
      this.valueFrom = Object.entries(this.data[4]).map(x => x[1])[0];
      this.valueTo = Object.entries(this.data[4]).map(x => x[1])[1];
      this.total = (this.amount * (this.valueTo/this.valueFrom)).toFixed(2);
    });
  }
}
