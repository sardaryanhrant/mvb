import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  patientForm: FormGroup;

  constructor(
      private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.patientForm = this._fb.group({
      patientStatus: ['', Validators.required],
      rejection: [''],
      insuranceNumber: ['', Validators.required],
      gender: ['', Validators.required],
      title: [''],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', Validators.required],
      plz: ['', Validators.required],
      ort: ['', Validators.required],
      neurolog: ['', Validators.required],
      privacy: ['', Validators.required],
      insurance: ['', Validators.required],
      phone: [''],
      mobile: [''],
      fax: [''],
      notes: ['']
    });
  }

}
