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
    selector: 'app-subscrition',
    templateUrl: './subscrition.component.html',
    styleUrls: ['./subscrition.component.css'],
})
export class SubscriptionComponent {



    constructor(private tutorialService: TutorialService, private formBuilder: FormBuilder) { }
    ngOnInit(): void {

    }

}
