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
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {



    constructor(private tutorialService: TutorialService, private formBuilder: FormBuilder) { }
    ngOnInit(): void {

    }

}
