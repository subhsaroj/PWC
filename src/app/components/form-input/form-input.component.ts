import { Component } from '@angular/core';
import { Tutorial } from '../../models/tutorial.model';
import { TutorialService } from '../../services/tutorial.service';
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    FormControl,
    Validators,
} from '@angular/forms';

@Component({
    selector: 'app-form-input',
    templateUrl: './form-input.component.html',
    styleUrls: ['./form-input.component.css'],
})
export class FormInputComponent {
    form: FormGroup = new FormGroup({
        lngPlantCapacity: new FormControl(''),
        capacityUtilization: new FormControl(''),
        offtakeLongtermCOntracts: new FormControl(''),
        equityShareHolder1: new FormControl(''),
        equityShareHolder2: new FormControl(''),
        feedGasSuppliedByShareHolder2: new FormControl(''),
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
    inputFormValues: any;
    submitted = false;


    constructor(private tutorialService: TutorialService, private formBuilder: FormBuilder) { }
    ngOnInit(): void {
        this.form = this.formBuilder.group(
            {
                lngPlantCapacity: [0, Validators.required],
                capacityUtilization: [0, Validators.required,],
                offtakeLongtermCOntracts: [0, Validators.required],
                equityShareHolder1: [0, Validators.required],
                equityShareHolder2: [0, Validators.required],
                feedGasSuppliedByShareHolder2: [0, Validators.required],
                interestRateofDebtFinancing: [0, Validators.required],
                debtFiancing: [0, Validators.required],
                equatyFiancing: [0, Validators.required],
                costOfDebt: [0, Validators.required],
                costOfEquaty: [0, Validators.required],
                lngPrice: [0, Validators.required],
                naturalGasPrice: [0, Validators.required],
                naturalGasLiquafactionperunitcost: [0, Validators.required],
                CorporateTaxRate: [0, Validators.required],
                returnSharingtoShareholders: [0, Validators.required],
                OfftakeAgreementofShareholder2: [0, Validators.required],
                longTermContract: [0, Validators.required],
                percentAdditiontoLNGExportpriceinUS: [0, Validators.required],
                JKMLNGprice: [0, Validators.required],
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
        this.inputFormValues = this.form.value;
    }

    onReset(): void {
        this.submitted = false;
        this.form.reset();
    }
}
