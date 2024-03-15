import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorial } from '../../models/tutorial.model';
import { TutorialService } from '../../services/tutorial.service';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css'],
})
export class TutorialDetailsComponent implements OnInit {
  lngPlantCapacity: number = 9;
  capacityUtilization: number = 90;
  offtakeLongtermCOntracts: number = 100;
  equityShareHolder1: number = 70;
  equityShareHolder2: number = 30;
  interestRateofDebtFinancing: number = 5;//where is the value coming from

  debtFiancing: number = 70;
  equatyFiancing: number = 0;
  costOfDebt: number = 5;
  costOfEquaty: number = 15;
  lngPrice: number = 645;
  naturalGasPrice: number = 0;
  naturalGasLiquafactionperunitcost: number = 105;
  CorporateTaxRate: number = 25;
  returnSharingtoShareholders: number = 0;
  OfftakeAgreementofShareholder2: number = 0;
  longTermContract: number = 0;
  percentAdditiontoLNGExportpriceinUS: number = 0;
  JKMLNGprice: number = 0;
  onemtpaprojectcost: number = 1;
  feedGasSuppliedByShareHolder2 = 0;
  dAndACost: number = 0;

  
  _inputFormValues: any;
  @Input()
  public get inputFormValues() {
    return this._inputFormValues;
  }
  public set inputFormValues(formValues: any) {
    this._inputFormValues = formValues;
    this.lngPlantCapacity = this._inputFormValues.lngPlantCapacity;
    this.capacityUtilization = this._inputFormValues.capacityUtilization;
    this.offtakeLongtermCOntracts = this._inputFormValues.offtakeLongtermCOntracts;
    this.equityShareHolder1= this._inputFormValues.equityShareHolder1;
    this.equityShareHolder2 = this._inputFormValues.equityShareHolder2;
    this.interestRateofDebtFinancing = this._inputFormValues.interestRateofDebtFinancing;//where is the value coming from
    this.debtFiancing = this._inputFormValues.debtFiancing;
    this.equatyFiancing = this._inputFormValues.equatyFiancing;
    this.costOfDebt = this._inputFormValues.costOfDebt;
    this.costOfEquaty = this._inputFormValues.costOfEquaty;
    this.lngPrice = this._inputFormValues.lngPrice;
    this.naturalGasPrice = this._inputFormValues.naturalGasPrice;
    this.naturalGasLiquafactionperunitcost = this._inputFormValues.naturalGasLiquafactionperunitcost;
    this.CorporateTaxRate = this._inputFormValues.CorporateTaxRate;
    this.returnSharingtoShareholders = this._inputFormValues.returnSharingtoShareholders;
    this.OfftakeAgreementofShareholder2 = this._inputFormValues.OfftakeAgreementofShareholder2;
    this.longTermContract = this._inputFormValues.longTermContract;
    this.percentAdditiontoLNGExportpriceinUS = this._inputFormValues.percentAdditiontoLNGExportpriceinUS;
    this.JKMLNGprice = this._inputFormValues.JKMLNGprice;
    this.onemtpaprojectcost= this._inputFormValues.onemtpaprojectcost;
    this.feedGasSuppliedByShareHolder2 = this._inputFormValues.feedGasSuppliedByShareHolder2;
  }

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

  }
  TotalLNGprojectcapex(): number { return this.lngPlantCapacity * (this.onemtpaprojectcost)/1000 };

  equityInvestmentForShareHolder1(): number {
    return this.TotalLNGprojectcapex() * ((100 - this.debtFiancing) / 100) * (this.equityShareHolder1 / 100);
  }
  equityInvestmentForShareHolder2(): number {
    return this.TotalLNGprojectcapex() * ((100 - this.debtFiancing) / 100) * ((100 - this.equityShareHolder1) / 100);
  }
  totalRevenue(): number {
    return (this.lngPrice) * this.lngPlantCapacity;
  }
  expenses(): number {
    return ((this.naturalGasPrice + this.naturalGasLiquafactionperunitcost) * this.lngPlantCapacity) / 1000;
  }
  otherOpexCost(): number {
    return .04 * this.lngPlantCapacity * this.onemtpaprojectcost;
  }
  totalCost(): number {
    return this.expenses() + this.otherOpexCost()
  }
  ebitda(): number {
    return this.totalRevenue() - this.totalCost();
  }
  dAndA(): number {
    return (this.lngPlantCapacity * this.onemtpaprojectcost) / 40;
  }
  ebit(): number {
    return this.ebitda() - this.dAndA();
  }
  interest(): number {
    return this.interestRateofDebtFinancing * (this.debtFiancing / 100) * (this.lngPlantCapacity * this.onemtpaprojectcost);
  }
  tax(): number {
    return this.CorporateTaxRate * (this.ebit() - this.interest());
  }
  pat(): number {
    return (this.ebitda() - this.dAndA()) - (this.interest()) - this.tax();
  }
  patForOne(): number {
    return this.pat() * this.equityShareHolder1 * this.returnSharingtoShareholders;
  }
  patForTwo(): number {
    return this.pat() * this.equityShareHolder2 * this.returnSharingtoShareholders;
  }
  revenueForNGSales(): number {
    return (this.naturalGasPrice * this.feedGasSuppliedByShareHolder2 * (1 + (this.percentAdditiontoLNGExportpriceinUS / 100)) * this.lngPrice) / 1000
  }
  cogs(): number {
    return (3 * 52 * ((1 + (this.percentAdditiontoLNGExportpriceinUS / 100)) * this.lngPrice)) / 1001;
  }
  opex(): number {
    return .04 * (this.totalRevenue() + this.revenueForNGSales());
  }
  ebitdaForIntegrated(): number {
    return this.totalRevenue() + this.revenueForNGSales() - this.cogs() - this.opex();
  }
  ebitForIntegrated(): number {
    return this.ebitdaForIntegrated() - this.dAndACost;
  }
  taxForIntegrated(): number {
    let interestForIntegrated = .01
    return this.CorporateTaxRate * (this.ebitForIntegrated() - interestForIntegrated);
  }
  patForIntegrated(): number {
    let interestForIntegrated = .01
    return this.ebitForIntegrated() - interestForIntegrated - this.taxForIntegrated();
  }

  ebitdaForTollingAndmerchant(): number {
    let revenueForNGSalesForTollingAndmerchant = 0;
    let cogs = 0;
    return this.totalRevenue() + revenueForNGSalesForTollingAndmerchant - cogs - this.opex();
  }
  ebitForTollingAndmerchant(): number {
    return this.ebitdaForTollingAndmerchant() - this.dAndACost;
  }
  taxForTollingAndmerchant(): number {
    let interestForIntegrated = .03;
    return this.CorporateTaxRate * (this.ebitForTollingAndmerchant() - interestForIntegrated);
  }
  patForTollingAndmerchant(): number {
    let interestForIntegrated = .03;
    return this.ebitForTollingAndmerchant() - interestForIntegrated - this.taxForTollingAndmerchant();
  }

  ebitdaForIncomeStatement(): number {
    return this.totalRevenue();
  }
  ebitForIncomeStatement(): number {
    return this.ebitdaForIncomeStatement() - this.dAndACost;
  }
  taxForIncomeStatement(): number {
    let interestForIncomeStatement = 0;
    return this.CorporateTaxRate * (this.ebitForIncomeStatement() - interestForIncomeStatement);
  }
  patForIncomeStatement(): number {
    let interestForIncomeStatement = 0;
    return this.ebitForIncomeStatement() - interestForIncomeStatement - this.taxForIncomeStatement();
  }
}
