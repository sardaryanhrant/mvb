import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  navLinks;
  constructor() { }

  ngOnInit() {
    this.navLinks = [
      {path: '/patienta', label: 'Patient A'},
      {path: '/patientb', label: 'Patient B'},
      {path: '/neuroa', label: 'Neuro A'},
      {path: '/new', label: '+'},
    ];
  }

}
