import { Component, OnInit } from '@angular/core';
import { ConstantHelper } from 'src/app/core/helpers/constant-helper';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-cases-create',
  templateUrl: './cases-create.component.html',
  styleUrls: ['./cases-create.component.scss'],
})
export class CasesCreateComponent implements OnInit {
  consts = ConstantHelper;
  CreateCaseForm: any;
  nich: Array<Nich> = [
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 3, name: 'Pavilnys' },
    { id: 4, name: 'Pabradė' },
    { id: 5, name: 'Klaipėda' },
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.CreateCaseForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      aim: new FormControl('', [Validators.required]),
      cpc: new FormControl('', [Validators.required]),
      ctr: new FormControl('', [Validators.required]),
      romi: new FormControl('', [Validators.required]),
      nichaCategoryId: new FormControl([Validators.required]),
      userId: new FormControl([Validators.required]),
      indicatorEnd: this.indicatorEnd(),
      steps: new FormArray([this.steps()]),
      indicatorStart: this.indicatorEnd(),
      creatives: new FormArray([this.creatives()]),
      instagramCompanies: new FormArray([this.instagramCompanies()]),
    });
  }

  indicatorStart() {
    return new FormGroup({
      dailyBid: new FormControl('', Validators.required),
      subscribers: new FormControl('', Validators.required),
      dailyEarnings: new FormControl('', Validators.required),
    });
  }
  indicatorEnd() {
    return new FormGroup({
      dailyBid: new FormControl('', Validators.required),
      subscribers: new FormControl('', Validators.required),
      dailyEarnings: new FormControl('', Validators.required),
    });
  }

  steps() {
    return new FormGroup({
      title: new FormControl('', Validators.required),
      num: new FormControl('', Validators.required),
      description: new FormControl(null, Validators.required),
      substeps: new FormArray([this.substeps()]),
    });
  }
  substeps() {
    return new FormGroup({
      title: new FormControl('', Validators.required),
      actions: new FormControl('', Validators.required),
    });
  }

  creatives() {
    return new FormGroup({
      picture: new FormControl('', Validators.required),
    });
  }

  instagramCompanies() {
    return new FormGroup({
      name: new FormControl('', Validators.required),
      link: new FormControl('', Validators.required),
    });
  }

  addinstagram() {
    const control = this.CreateCaseForm.get('instagramCompanies') as FormArray;
    control.push(this.steps());
  }

  addsteps() {
    const control = this.CreateCaseForm.get('steps') as FormArray;
    control.push(this.steps());
  }
  addsubsteps(step: any) {
    const control = step.get('substeps') as FormArray;
    control.push(this.substeps());
  }
  deletesteps() {
    const control = this.CreateCaseForm.get('steps') as FormArray;

    if (control.length > 0) {
      control.removeAt(control.length - 1);
    }
  }
  removestepat(index: any) {
    const control = this.CreateCaseForm.get('steps') as FormArray;

    control.removeAt(index);
  }
  deletesubsteps(step: any) {
    const control = step.get('substeps') as FormArray;

    if (control.length > 0) {
      control.removeAt(control.length - 1);
    }
  }
  removesubstepat(index: any) {
    const control = this.CreateCaseForm.get('substeps') as FormArray;

    control.removeAt(index);
  }

  //this for the creative images examples
  exampleImge = [
    this.consts.clothes1,
    this.consts.clothes2,
    this.consts.clothes3,
  ];
  removeExampleImg(index: any) {
    const indexof = this.exampleImge.indexOf(index);
    if (index > -1) {
      this.exampleImge.splice(index, 1);
    }
  }
}

export interface Nich {
  id: Number;
  name: String;
}
