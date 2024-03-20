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
    selector: 'app-us-calculation',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.css'],
})
export class AboutUSComponent {



    constructor(private tutorialService: TutorialService, private formBuilder: FormBuilder) { }
    ngOnInit(): void {

    }

}
