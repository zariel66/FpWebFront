import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
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

  buscadorCXP = new FormControl();
  optionsCXP: string[] = ['ADM-GYE-01', 'ADM-GYE-02', 'ADM-GYE-03'];
  filteredOptionsCXP: Observable<string[]>;

  buscadorCXC = new FormControl();
  optionsCXC: string[] = ['CAS-001003-01'];
  filteredOptionsCXC: Observable<string[]>;


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
    this.filteredOptionsCXP = this.buscadorCXP.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterCXP(value))
      );
      this.filteredOptionsCXC = this.buscadorCXC.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterCXC(value))
      );
  }

  private _filterCXP(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.optionsCXP.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterCXC(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.optionsCXC.filter(option => option.toLowerCase().includes(filterValue));
  }

}
