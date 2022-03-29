import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../../shared/services/converter.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { validInput } from '../../shared/validators/max/max.validator';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  calulatedScore = '';

  form: FormGroup = new FormGroup({
    playerOne: new FormControl(0),
    playerTwo: new FormControl(0),
  });
  submitted = false;

  constructor(private _converterService: ConverterService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      playerOne: [0, [Validators.required, validInput, Validators.min(0)]],
      playerTwo: [0, [Validators.required, validInput, Validators.min(0)]],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  calculate(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.calulatedScore = this._converterService.calculateTennisScore(this.form.value.playerOne, this.form.value.playerTwo);
  }
}
