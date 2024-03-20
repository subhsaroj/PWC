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
  equityShareHolder2: number = 30;
  equityShareHolder1: number = 100 - this.equityShareHolder2;

  interestRateofDebtFinancing: number = 5;//where is the value coming from

  debtFiancing: number = 70;
  equatyFiancing: number = 100 - this.debtFiancing;
  costOfDebt: number = 5;
  costOfEquaty: number = 15;
  lngPrice: number = 12.6 * 52.4;
  naturalGasPrice: number = 6.4 * 52.4;
  naturalGasLiquafactionperunitcost: number = 105;
  CorporateTaxRate: number = 25;
  returnSharingtoShareholders: number = 30;
  OfftakeAgreementofShareholder2: number = 50;
  longTermContractPercent: number = 55;
  percentShortTermContract: number = 100 - this.longTermContractPercent;
  usLNGExportPrice: number = 645;

  percentAdditiontoLNGExportpriceinUS: number = 12;
  JKMLNGprice: number = 35 * 52.4;
  onemtpaprojectcost: number = 1;
  feedGasSuppliedByShareHolder2 = 0;
  feedGasSuppliedBySHareHolder2ForIntegrated: number = 50 / 100;
  dAndACost: number = 0;
  liquifactionCost: number = 208;
  patForIntegratedModel: number = 0;
  patForTollingAndMerchantModel: number = 0;
  patForTollingModel: number = 0;

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
    let result = this.lngPlantCapacity * (this.onemtpaprojectcost);
    console.log('TotalLNGprojectcapex' + result);
    return result;
  }


  equityInvestmentForShareHolder1(): number {
    let result = this.TotalLNGprojectcapex() * ((100 - this.debtFiancing) / 100) * (this.equityShareHolder1 / 100);
    console.log('equityInvestmentForShareHolder1' + result);
    return result;
  }
  equityInvestmentForShareHolder2(): number {
    let result = this.TotalLNGprojectcapex() * ((100 - this.debtFiancing) / 100) * ((100 - this.equityShareHolder1) / 100);
    console.log('equityInvestmentForShareHolder2' + result);
    return result;
  }
  totalRevenueLNGPlant(): number {
    let result = (this.lngPrice) * this.lngPlantCapacity / 1000;
    console.log('totalRevenueLNGPlant' + result);
    return result;
  }
  expenses(): number {
    let result = ((this.naturalGasPrice + this.naturalGasLiquafactionperunitcost) * this.lngPlantCapacity) / 1000;
    console.log('expenses' + result);
    return result;
  }
  otherOpexCost(): number {
    let result = .04 * this.lngPlantCapacity * this.onemtpaprojectcost;
    console.log('otherOpexCost' + result);
    return result;
  }
  totalCost(): number {
    let result = this.expenses() + this.otherOpexCost();
    console.log('totalCost' + result);
    return result;
  }
  ebitda(): number {
    let result = this.totalRevenueLNGPlant() - this.totalCost();
    console.log('ebitda' + result);
    return result;
  }
  dAndA(): number {
    let result = (this.lngPlantCapacity * this.onemtpaprojectcost) / 40;
    console.log('dAndA' + result);
    return result;
  }
  ebit(): number {
    let result = this.ebitda() - this.dAndA();
    console.log('ebit' + result);
    return result;
  }
  interest(): number {
    let result = this.interestRateofDebtFinancing / 100 * (this.debtFiancing / 100) * (this.lngPlantCapacity * this.onemtpaprojectcost);
    console.log('interest' + result);
    return result;
  }
  tax(): number {
    let result = this.CorporateTaxRate / 100 * (this.ebit() - this.interest());
    console.log('tax' + result);
    return result;
  }
  patForLNGTerminal(): number {
    let result = (this.ebitda() - this.dAndA()) - (this.interest()) - this.tax();
    console.log('patForLNGTerminal' + result);
    return result;
  }

  patForOne(): number {
    let result = this.patForLNGTerminal() * this.equityShareHolder1 * this.returnSharingtoShareholders;
    console.log('patForOne' + result);
    return result;
  }
  patForTwo(): number {
    let result = this.patForLNGTerminal() * this.equityShareHolder2 * this.returnSharingtoShareholders;
    console.log('patForTwo' + result);
    return result;
  }
  r1ForTotalFromSalesMarketingOfLng(): number {
    let result = this.lngPlantCapacity * this.OfftakeAgreementofShareholder2 / 100 * this.longTermContractPercent / 100 * this.lngPrice * (this.percentAdditiontoLNGExportpriceinUS / 100) / 1000;
    console.log('r1ForTotalFromSalesMarketingOfLng' + result);
    return result;
  }

  transportationCostFromSalesMarketingOfLng(): number {
    let result = .2 * this.JKMLNGprice;
    console.log('transportationCostFromSalesMarketingOfLng' + result);
    return result;
  }
  r2ForTotalFromSalesMarketingOfLng(): number {
    let result = this.lngPlantCapacity * this.OfftakeAgreementofShareholder2 / 100 * ((100 - this.longTermContractPercent) / 100) * (this.JKMLNGprice - this.transportationCostFromSalesMarketingOfLng() - (this.lngPrice)) / 1000;
    console.log('r2ForTotalFromSalesMarketingOfLng' + result);
    return result
  }

  r3ForTotalFromSalesMarketingOfLng(): number {
    let result = this.patForLNGTerminal() * this.equityShareHolder2 / 100 * this.returnSharingtoShareholders / 100;
    console.log('r3ForTotalFromSalesMarketingOfLng' + result);
    return result;
  }

  totalRevenueFromSalesMarketingOfLng(): number {
    let result = this.r1ForTotalFromSalesMarketingOfLng() + this.r2ForTotalFromSalesMarketingOfLng() + this.r3ForTotalFromSalesMarketingOfLng();
    console.log('totalRevenueFromSalesMarketingOfLng' + result);
    return result;
  }
  revenueForNGSalesForIntegrated(): number {
    let result = this.lngPlantCapacity * (this.naturalGasPrice * this.feedGasSuppliedBySHareHolder2ForIntegrated * (1 + (this.percentAdditiontoLNGExportpriceinUS / 100))) / 1000;
    console.log('revenueForNGSalesForIntegrated' + result);
    return result;
  }
  cogsForIntegrated(): number {
    let result = (3 * 52 * ((1 + (this.percentAdditiontoLNGExportpriceinUS / 100)))) * this.lngPlantCapacity * this.feedGasSuppliedBySHareHolder2ForIntegrated / 1000;
    console.log('cogsForIntegrated' + result);
    return result;
  }
  opexForIntegrated(): number {

    let result = .04 * (this.totalRevenueFromSalesMarketingOfLng() + this.revenueForNGSalesForIntegrated());
    console.log('opexForIntegrated' + result);
    return result;
  }
  ebitdaForIntegrated(): number {
    let result = this.totalRevenueFromSalesMarketingOfLng() + this.revenueForNGSalesForIntegrated() - this.cogsForIntegrated() - this.opexForIntegrated();
    console.log('ebitdaForIntegrated' + result);
    return result;
  }
  ebitForIntegrated(): number {
    let result = this.ebitdaForIntegrated() - this.dAndACost;
    console.log('ebitForIntegrated' + result);
    return result;
  }
  taxForIntegrated(): number {
    let interestForIntegrated = .01;
    let result = this.CorporateTaxRate / 100 * (this.ebitForIntegrated() - interestForIntegrated);
    console.log('taxForIntegrated' + result);
    return result;
  }
  patForIntegrated(): number {
    let interestForIntegrated = .01;
    let result = this.ebitForIntegrated() - interestForIntegrated - this.taxForIntegrated();
    this.patForIntegratedModel = result;
    console.log('patForIntegrated' + result);
    this.calculateIRRForIntegratedModel();
    return result;
  }
  calculateIRRForIntegratedModel(): any {
    let firstcashflow = -1 * (this.TotalLNGprojectcapex() * this.equatyFiancing / 100 * this.equityShareHolder2 / 100 + .12 * 1.2 * this.TotalLNGprojectcapex() * this.OfftakeAgreementofShareholder2 / 100) / 4;
    let pat = this.patForIntegratedModel;
    let cashflows = this.pushInCashflows(firstcashflow, pat);
    console.log(cashflows);
    let irr = this.calculateIRR(cashflows);
    console.log('irr' + (irr * 100).toFixed(2) + "%")
    return (irr * 100).toFixed(2) + "%";
  }

  pushInCashflows(firstCashValue: number, pat: number): any {
    let cashflows = [];
    for (let i = 0; i < 16; i++) {
      if (i < 4) {
        cashflows.push(firstCashValue);
      } else {
        cashflows.push(pat);
      }
    }
    return (cashflows);
  }

  totalRevenueForTollingAndmerchant(): number {
    let result = this.r1ForTotalFromSalesMarketingOfLng() + this.r2ForTotalFromSalesMarketingOfLng() + this.r3ForTotalFromSalesMarketingOfLng();
    console.log('totalRevenueForTollingAndmerchant' + result);
    return result;
  }

  opexForTollingAndMerchant(): number {
    let result = .04 * (this.totalRevenueForTollingAndmerchant());
    console.log('opexForTollingAndMerchant' + result);
    return result;
  }
  ebitdaForTollingAndmerchant(): number {
    let revenueForNGSalesForTollingAndmerchant = 0;
    let cogs = 0;
    let result = this.totalRevenueForTollingAndmerchant() + revenueForNGSalesForTollingAndmerchant - cogs - this.opexForTollingAndMerchant();

    console.log('ebitdaForTollingAndmerchant' + result);
    return result;
  }
  ebitForTollingAndmerchant(): number {
    let result = this.ebitdaForTollingAndmerchant() - this.dAndACost;
    console.log('ebitForTollingAndmerchant' + result);
    return result;
  }
  taxForTollingAndmerchant(): number {
    let interestForIntegrated = .03;
    let result = this.CorporateTaxRate / 100 * (this.ebitForTollingAndmerchant() - interestForIntegrated);
    console.log('taxForTollingAndmerchant' + result);
    return result;
  }
  patForTollingAndmerchant(): number {
    let interestForIntegrated = .03;
    let result = this.ebitForTollingAndmerchant() - interestForIntegrated - this.taxForTollingAndmerchant();
    this.patForTollingAndMerchantModel = result;
    console.log('patForTollingAndmerchant' + result);
    return result;
  }
  calculateIRRForTollingAndMerchant(): any {
    let firstcashflow = -1 * (this.TotalLNGprojectcapex() * this.equatyFiancing / 100 * this.equityShareHolder2 / 100) / 4;
    let pat = this.patForTollingAndMerchantModel;
    let cashflows = this.pushInCashflows(firstcashflow, pat);
    console.log(cashflows);
    let irr = this.calculateIRR(cashflows);
    console.log('irr' + (irr * 100).toFixed(2) + "%")
    return (irr * 100).toFixed(2) + "%";
  }
  revenueForTolling(): number {
    let result = this.liquifactionCost * this.lngPlantCapacity / 1000;
    console.log('revenueForTolling' + result);
    return result;
  }
  opexForTolling(): number {
    let result = .04 * this.TotalLNGprojectcapex() / 1000;
    console.log('opexForTolling' + result);
    return result;
  }

  ebitdaForTolling(): number {
    let result = this.revenueForTolling() - this.opexForTolling();
    console.log('ebitdaForTolling' + result);
    return result;
  }


  ebitForTolling(): number {
    let result = this.ebitdaForTolling() - this.dAndA();
    console.log('ebitForTolling' + result);
    return result;
  }

  interestForTolling(): number {
    let result = (this.interestRateofDebtFinancing / 100) * (this.debtFiancing / 100) * this.TotalLNGprojectcapex();
    console.log('interestForTolling' + result);
    return result;
  }

  taxExpensesForTolling(): number {
    let result = this.CorporateTaxRate / 100 * (this.ebitForTolling() - this.interestForTolling());
    console.log('taxExpensesForTolling' + result);
    return result;
  }

  patforTolling(): number {
    let result = this.ebitForTolling() - this.interestForTolling() - this.taxExpensesForTolling();
    console.log('patforTolling' + result);
    this.patForTollingModel = result;
    return result;
  }

  calculateIRRForTolling(): any {
    let firstcashflow = -1 * (this.TotalLNGprojectcapex() * this.equatyFiancing / 100 * this.equityShareHolder2 / 100) / 4;
    let pat = this.patForTollingModel;
    let cashflows = this.pushInCashflows(firstcashflow, pat);
    console.log(cashflows);
    let irr = this.calculateIRR(cashflows);
    console.log('irr' + (irr * 100).toFixed(2) + "%")
    return (irr * 100).toFixed(2) + "%";
  }
  calculateIRR(cashFlows: any): any {
    // Initial guess for IRR
    console.log('cashflows' + cashFlows)
    let irr = 0.1; // 10% initial guess
    const MAX_ITERATIONS = 100;
    const TOLERANCE = 0.00001;

    for (let i = 0; i < MAX_ITERATIONS; i++) {
      let npv = 0;
      let derivative = 0;

      // Calculate NPV and derivative of NPV
      for (let j = 0; j < cashFlows.length; j++) {
        npv += cashFlows[j] / Math.pow(1 + irr, j);
        derivative -= j * cashFlows[j] / Math.pow(1 + irr, j + 1);
      }

      // Update IRR using Newton-Raphson method
      let newIRR = irr - npv / derivative;

      // Check for convergence
      if (Math.abs(newIRR - irr) < TOLERANCE) {
        return newIRR;
      }

      irr = newIRR;
    }

    // If maximum iterations reached without convergence
    console.log("IRR calculation did not converge within maximum iterations.");
    return null;

    // Example usage:
    // const cashFlows = [-.365,-.365,-.365,-.365, 1.3, 1.3, 1.3, 1.3]; // Example cash flows
    // const irr = calculateIRR(cashFlows);
    // if (irr !== null) {
    //     console.log("Internal Rate of Return (IRR): " + (irr * 100).toFixed(2) + "%");
    // } else {
    //     console.log("Unable to calculate IRR.");
    // }
  }
}
