import { Component, OnInit } from '@angular/core';

export interface CxP {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'ncguias',
  templateUrl: './ncguias.component.html',
  styleUrls: ['./ncguias.component.css']
})
export class NcguiasComponent implements OnInit {


  cxps: CxP[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
