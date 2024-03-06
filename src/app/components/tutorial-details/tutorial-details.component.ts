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
    this.lngPlantCapacity = 9;
    this.capacityUtilization = 90;
    this.offtakeLongtermCOntracts = 100;
    this.equityShareHolder1= 70;
    this.equityShareHolder2 = 30;
    this.interestRateofDebtFinancing = 5;//where is the value coming from

    this.debtFiancing = 70;
    this.equatyFiancing = 0;
    this.costOfDebt = 5;
    this.costOfEquaty = 15;
    this.lngPrice = 645;
    this.naturalGasPrice = 0;
    this.naturalGasLiquafactionperunitcost = 105;
    this.CorporateTaxRate = 25;
    this.returnSharingtoShareholders = 0;
    this.OfftakeAgreementofShareholder2 = 0;
    this.longTermContract = 0;
    this.percentAdditiontoLNGExportpriceinUS = 0;
    this.JKMLNGprice = 0;
    this.onemtpaprojectcost= 1;
    this.feedGasSuppliedByShareHolder2 = 0;
  }

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

  }
  TotalLNGprojectcapex(): number { return this.lngPlantCapacity * (this.onemtpaprojectcost) };

  equityInvestmentForShareHolder1(): number {
    return this.onemtpaprojectcost * ((100 - this.debtFiancing) / 100) * (this.equityShareHolder1 / 100);
  }
  equityInvestmentForShareHolder2(): number {
    return this.lngPlantCapacity * this.onemtpaprojectcost * ((100 - this.debtFiancing) / 100) * ((100 - this.equityShareHolder1) / 100);
  }
  totalRevenue(): number {
    return (this.lngPrice + this.naturalGasLiquafactionperunitcost) * this.lngPlantCapacity;
  }
  expenses(): number {
    return ((this.naturalGasPrice + this.naturalGasLiquafactionperunitcost) * this.lngPlantCapacity) / 1000;
  }
  otherOpexCost(): number {
    return .04 * this.lngPlantCapacity * this.onemtpaprojectcost;
  }
  totalCost(): number {
    return this.naturalGasPrice + this.naturalGasLiquafactionperunitcost + this.expenses() + this.otherOpexCost()
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
    return this.CorporateTaxRate * (this.ebitda() - this.interest());
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
