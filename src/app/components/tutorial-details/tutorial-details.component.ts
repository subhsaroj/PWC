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
  equatyFiancing: number = 30;
  costOfDebt: number = 5;
  costOfEquaty: number = 15;
  lngPrice: number = 645;
  naturalGasPrice: number = 335;
  naturalGasLiquafactionperunitcost: number = 105;
  CorporateTaxRate: number = 25;
  returnSharingtoShareholders: number = 30;
  OfftakeAgreementofShareholder2: number = 50;
  longTermContractPercent: number = 55;
  percentShortTermContract: number = 100 - this.longTermContractPercent;
  usLNGExportPrice: number = 645;

  percentAdditiontoLNGExportpriceinUS: number = 12;
  JKMLNGprice: number = 35;
  onemtpaprojectcost: number = 1;
  feedGasSuppliedByShareHolder2 = 0;
  dAndACost: number = 0;
  liquifactionCost: number = 208;


  _inputFormValues: any;
  @Input()
  public get inputFormValues() {
    return this._inputFormValues;
  }
  public set inputFormValues(formValues: any) {
    this._inputFormValues = formValues;
    // this.lngPlantCapacity = this._inputFormValues.lngPlantCapacity;
    // this.capacityUtilization = this._inputFormValues.capacityUtilization;
    // this.offtakeLongtermCOntracts = this._inputFormValues.offtakeLongtermCOntracts;
    // this.equityShareHolder1= this._inputFormValues.equityShareHolder1;
    // this.equityShareHolder2 = this._inputFormValues.equityShareHolder2;
    // this.interestRateofDebtFinancing = this._inputFormValues.interestRateofDebtFinancing;//where is the value coming from
    // this.debtFiancing = this._inputFormValues.debtFiancing;
    // this.equatyFiancing = this._inputFormValues.equatyFiancing;
    // this.costOfDebt = this._inputFormValues.costOfDebt;
    // this.costOfEquaty = this._inputFormValues.costOfEquaty;
    // this.lngPrice = this._inputFormValues.lngPrice;
    // this.naturalGasPrice = this._inputFormValues.naturalGasPrice;
    // this.naturalGasLiquafactionperunitcost = this._inputFormValues.naturalGasLiquafactionperunitcost;
    // this.CorporateTaxRate = this._inputFormValues.CorporateTaxRate;
    // this.returnSharingtoShareholders = this._inputFormValues.returnSharingtoShareholders;
    // this.OfftakeAgreementofShareholder2 = this._inputFormValues.OfftakeAgreementofShareholder2;
    // this.longTermContractPercent = this._inputFormValues.longTermContract;
    // this.percentAdditiontoLNGExportpriceinUS = this._inputFormValues.percentAdditiontoLNGExportpriceinUS;
    // this.JKMLNGprice = this._inputFormValues.JKMLNGprice;
    // this.onemtpaprojectcost= this._inputFormValues.onemtpaprojectcost;
    // this.feedGasSuppliedByShareHolder2 = this._inputFormValues.feedGasSuppliedByShareHolder2;
  }

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

  }
  TotalLNGprojectcapex(): number {
    let result = this.lngPlantCapacity * (this.onemtpaprojectcost) / 1000;
    console.log(result);
    return result;
  }


  equityInvestmentForShareHolder1(): number {
    let result = this.TotalLNGprojectcapex() * ((100 - this.debtFiancing) / 100) * (this.equityShareHolder1 / 100);
    console.log(result);
    return result;
  }
  equityInvestmentForShareHolder2(): number {
    let result = this.TotalLNGprojectcapex() * ((100 - this.debtFiancing) / 100) * ((100 - this.equityShareHolder1) / 100);
    console.log(result);
    return result;
  }
  totalRevenueLNGPlant(): number {
    let result = (this.lngPrice) * this.lngPlantCapacity;
    console.log(result);
    return result;
  }
  expenses(): number {
    let result = ((this.naturalGasPrice + this.naturalGasLiquafactionperunitcost) * this.lngPlantCapacity) / 1000;
    console.log(result);
    return result;
  }
  otherOpexCost(): number {
    let result = .04 * this.lngPlantCapacity * this.onemtpaprojectcost;
    console.log(result);
    return result;
  }
  totalCost(): number {
    let result = this.expenses() + this.otherOpexCost();
    console.log(result);
    return result;
  }
  ebitda(): number {
    let result = this.totalRevenueLNGPlant() - this.totalCost();
    console.log(result);
    return result;
  }
  dAndA(): number {
    let result = (this.lngPlantCapacity * this.onemtpaprojectcost) / 40;
    console.log(result);
    return result;
  }
  ebit(): number {
    let result = this.ebitda() - this.dAndA();
    console.log(result);
    return result;
  }
  interest(): number {
    let result = this.interestRateofDebtFinancing * (this.debtFiancing / 100) * (this.lngPlantCapacity * this.onemtpaprojectcost);
    console.log(result);
    return result;
  }
  tax(): number {
    let result = this.CorporateTaxRate * (this.ebit() - this.interest());
    console.log(result);
    return result;
  }
  patForLNGTerminal(): number {
    let result = (this.ebitda() - this.dAndA()) - (this.interest()) - this.tax();
    console.log(result);
    return result;
  }
  patForOne(): number {
    let result = this.patForLNGTerminal() * this.equityShareHolder1 * this.returnSharingtoShareholders;
    console.log(result);
    return result;
  }
  patForTwo(): number {
    let result = this.patForLNGTerminal() * this.equityShareHolder2 * this.returnSharingtoShareholders;
    console.log(result);
    return result;
  }
  r1ForTotalFromSalesMarketingOfLng(): number {
    let result = this.OfftakeAgreementofShareholder2 * this.longTermContractPercent / 100 * this.lngPrice * (1 + this.percentAdditiontoLNGExportpriceinUS / 100);
    console.log(result);
    return result;
  }

  transportationCostFromSalesMarketingOfLng(): number {
    let result = .2 * this.JKMLNGprice;
    console.log(result);
    return result;
  }
  r2ForTotalFromSalesMarketingOfLng(): number {
    let result = this.OfftakeAgreementofShareholder2 * ((100 - this.longTermContractPercent) / 100) * (this.JKMLNGprice - this.transportationCostFromSalesMarketingOfLng() - (this.lngPrice * (1 + this.percentAdditiontoLNGExportpriceinUS / 100)));
    console.log(result);
    return result
  }

  r3ForTotalFromSalesMarketingOfLng(): number {
    let result = this.patForLNGTerminal() * this.equityShareHolder2 * this.returnSharingtoShareholders;
    console.log(result);
    return result;
  }

  totalRevenueFromSalesMarketingOfLng(): number {
    let result = this.r1ForTotalFromSalesMarketingOfLng() + this.r2ForTotalFromSalesMarketingOfLng() + this.r3ForTotalFromSalesMarketingOfLng();
    console.log(result);
    return result;
  }
  revenueForNGSalesForIntegrated(): number {
    let result = (this.naturalGasPrice * this.feedGasSuppliedByShareHolder2 * (1 + (this.percentAdditiontoLNGExportpriceinUS / 100)) * this.lngPrice) / 1000;
    console.log(result);
    return result;
  }
  cogsForIntegrated(): number {
    let result = (3 * 52 * ((1 + (this.percentAdditiontoLNGExportpriceinUS / 100)) * this.naturalGasPrice)) / 1000;
    console.log(result);
    return result;
  }
  opexForIntegrated(): number {

    let result = .04 * (this.totalRevenueFromSalesMarketingOfLng() + this.revenueForNGSalesForIntegrated());
    console.log(result);
    return result;
  }
  ebitdaForIntegrated(): number {
    let result = this.totalRevenueFromSalesMarketingOfLng() + this.revenueForNGSalesForIntegrated() - this.cogsForIntegrated() - this.opexForIntegrated();
    console.log(result);
    return result;
  }
  ebitForIntegrated(): number {
    let result = this.ebitdaForIntegrated() - this.dAndACost;
    console.log(result);
    return result;
  }
  taxForIntegrated(): number {
    let interestForIntegrated = .01;
    let result = this.CorporateTaxRate * (this.ebitForIntegrated() - interestForIntegrated);
    console.log(result);
    return result;
  }
  patForIntegrated(): number {
    let interestForIntegrated = .01;
    let result = this.ebitForIntegrated() - interestForIntegrated - this.taxForIntegrated();
    console.log(result);
    return result;
  }

  totalRevenueForTollingAndmerchant(): number {
    let result = this.r1ForTotalFromSalesMarketingOfLng() + this.r2ForTotalFromSalesMarketingOfLng() + this.r3ForTotalFromSalesMarketingOfLng();
    console.log(result);
    return result;
  }

  opexForTollingAndMerchant(): number {
    let result = .04 * (this.totalRevenueForTollingAndmerchant());
    console.log(result);
    return result;
  }
  ebitdaForTollingAndmerchant(): number {
    let revenueForNGSalesForTollingAndmerchant = 0;
    let cogs = 0;
    let result = this.totalRevenueForTollingAndmerchant() + revenueForNGSalesForTollingAndmerchant - cogs - this.opexForTollingAndMerchant();

    console.log(result);
    return result;
  }
  ebitForTollingAndmerchant(): number {
    let result = this.ebitdaForTollingAndmerchant() - this.dAndACost;
    console.log(result);
    return result;
  }
  taxForTollingAndmerchant(): number {
    let interestForIntegrated = .03;
    let result = this.CorporateTaxRate * (this.ebitForTollingAndmerchant() - interestForIntegrated);
    console.log(result);
    return result;
  }
  patForTollingAndmerchant(): number {
    let interestForIntegrated = .03;
    let result = this.ebitForTollingAndmerchant() - interestForIntegrated - this.taxForTollingAndmerchant();
    console.log(result);
    return result;
  }

  revenueForTolling(): number {
    let result = this.liquifactionCost * this.lngPlantCapacity / 1000;
    console.log(result);
    return result;
  }
  opexForTolling(): number {
    let result = this.TotalLNGprojectcapex() / 1000;
    console.log(result);
    return result;
  }

  ebitdaForTolling(): number {
    let result = this.revenueForTolling() - this.opexForTolling();
    console.log(result);
    return result;
  }


  ebitForTolling(): number {
    let result = this.ebitdaForTolling() - this.dAndA();
    console.log(result);
    return result;
  }

  interestForTolling(): number {
    let result = (this.interestRateofDebtFinancing / 100) * (this.debtFiancing / 100) * this.TotalLNGprojectcapex();
    console.log(result);
    return result;
  }

  taxExpensesForTolling(): number {
    let result = this.CorporateTaxRate * (this.ebitForTolling() - this.interestForTolling());
    console.log(result);
    return result;
  }

  patforTolling(): number {
    let result = this.ebitForTolling() - this.interestForTolling() - this.taxExpensesForTolling();
    console.log(result);
    return result;
  }
}
