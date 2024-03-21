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
    selector: 'app-valuedServices',
    templateUrl: './valuedServices.component.html',
    styleUrls: ['./valuedServices.component.css'],
})
export class valuedServicesComponent {



    constructor(private tutorialService: TutorialService, private formBuilder: FormBuilder) { }
    ngOnInit(): void {

    }

}
