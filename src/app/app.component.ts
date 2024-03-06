import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import Validation from './utils/validations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form: FormGroup = new FormGroup({
    lngPlantCapacity: new FormControl(''),
    capacityUtilization: new FormControl(''),
    offtakeLongtermCOntracts: new FormControl(''),
    equityShareHolder1: new FormControl(''),
    equityShareHolder2: new FormControl(''),
    feedGasSuppliedByShareHolder2:new FormControl(''),
    interestRateofDebtFinancing: new FormControl(''),
    debtFiancing: new FormControl(''),
    equatyFiancing: new FormControl(''),
    costOfDebt: new FormControl(''),
    costOfEquaty: new FormControl(''),
    lngPrice: new FormControl(''),
    naturalGasPrice: new FormControl(''),
    naturalGasLiquafactionperunitcost: new FormControl(''),
    CorporateTaxRate: new FormControl(''),
    returnSharingtoShareholders: new FormControl(''),
    OfftakeAgreementofShareholder2: new FormControl(''),
    longTermContract: new FormControl(''),
    percentAdditiontoLNGExportpriceinUS: new FormControl(''),
    JKMLNGprice: new FormControl(''),

  });
  inputFormValues:any;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        lngPlantCapacity: ['', Validators.required],
        capacityUtilization: ['', Validators.required, Validators.maxLength(2), Validators.max(100), Validators.min(0)],
        offtakeLongtermCOntracts: ['', Validators.required, Validators.maxLength(2), Validators.max(100), Validators.min(0)],
        equityShareHolder1: ['', Validators.required, Validators.maxLength(2), Validators.max(100), Validators.min(0)],
        equityShareHolder2: ['', Validators.required, Validators.maxLength(2), Validators.max(100), Validators.min(0)],
        feedGasSuppliedByShareHolder2:['', Validators.required],
        interestRateofDebtFinancing: ['', Validators.required],
        debtFiancing: ['', Validators.required, Validators.maxLength(2), Validators.max(100), Validators.min(0)],
        equatyFiancing: ['', Validators.required, Validators.maxLength(2), Validators.max(100), Validators.min(0)],
        costOfDebt: ['', Validators.required, Validators.maxLength(2), Validators.max(100), Validators.min(0)],
        costOfEquaty: ['', Validators.required, Validators.maxLength(2), Validators.max(100), Validators.min(0)],
        lngPrice: ['', Validators.required],
        naturalGasPrice: ['', Validators.required],
        CorporateTaxRate: ['', Validators.required],
        returnSharingtoShareholders: ['', Validators.required],
        OfftakeAgreementofShareholder2: ['', Validators.required],
        longTermContract: ['', Validators.required],
        percentAdditiontoLNGExportpriceinUS: ['', Validators.required],
        JKMLNGprice: ['', Validators.required],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.inputFormValues = JSON.stringify(this.form.value, null, 2)
    //console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }


}
