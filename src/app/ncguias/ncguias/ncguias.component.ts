import { Component, OnInit } from '@angular/core';

export interface CxP {
  value: string;
  viewValue: string;
}

export interface CxC {
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
    {value: '41101', viewValue: '41101 - Flete Prepagado'},
    {value: '41102', viewValue: '41102 - Flete por Cobrar'},
    {value: '41201', viewValue: '41201 - Flete Prepagado - Cass'},
    {value: '41202', viewValue: '41202 - Flete por Cobrar - Cass'}
  ];

  cxcs: CxC[] = [
    {value: '11213', viewValue: '11213 - Cuentas por Cobrar Agencias de Carga'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
