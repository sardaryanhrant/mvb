import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';


export interface PeriodicElement {
  name: string;
  weight: number;
  symbol: string;
  status: string;
  angemeldet: string;
  strabe:string;
  plz:number;
  ort: string;
  sonstiges: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', weight: 1.0079, symbol: 'H', status:'status', angemeldet:'07.06.2018',
  strabe: 'Am Testberg 10', plz:1234, ort:'Teststadt', sonstiges:'Sonstige Daten and Information'},
  {name: 'Hydrogen', weight: 1.0079, symbol: 'H', status:'status', angemeldet:'07.06.2018',
  strabe: 'Am Testberg 10', plz:12345, ort:'Teststadt', sonstiges:'Sonstige Daten and Information'},
  {name: 'Hydrogen', weight: 1.0079, symbol: 'H', status:'status', angemeldet:'07.06.2018',
  strabe: 'Am Testberg 10', plz:12345, ort:'Teststadt', sonstiges:'Sonstige Daten and Information'},
  {name: 'Hydrogen', weight: 1.0079, symbol: 'H', status:'status', angemeldet:'07.06.2018',
  strabe: 'Am Testberg 10', plz:12345, ort:'Teststadt', sonstiges:'Sonstige Daten and Information'},
  {name: 'Hydrogen', weight: 1.0079, symbol: 'H', status:'status', angemeldet:'07.06.2018',
  strabe: 'Am Testberg 10', plz:12345, ort:'Teststadt', sonstiges:'Sonstige Daten and Information'},

  ];

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})

export class PatientComponent implements OnInit {
  patientForm: FormGroup;
  displayedColumns: string[] = ['name', 'weight', 'symbol', 'status', 'angemeldet','strabe','plz','ort', 'sonstiges'];
  dataSource = ELEMENT_DATA;
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
