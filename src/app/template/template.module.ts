import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    BsDropdownModule.forRoot()
  ],
  exports:
  [
    SidebarComponent,
    MatMenuModule,
    MatIconModule,
    BsDropdownModule
  ]
})
export class TemplateModule { }
