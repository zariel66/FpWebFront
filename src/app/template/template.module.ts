import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule
  ],
  exports:
  [
    SidebarComponent,
    MatMenuModule,
    MatIconModule
  ]
})
export class TemplateModule { }
