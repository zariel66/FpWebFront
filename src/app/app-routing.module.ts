import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateModule } from './template/template.module'
import { NcguiasComponent } from './ncguias/ncguias/ncguias.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


const routes: Routes = [
  {
    path: '', redirectTo: '/ncguias', pathMatch: 'full'
  },
  {
    path: 'ncguias', component: NcguiasComponent
  }
];

@NgModule({
  declarations: [NcguiasComponent],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    TemplateModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  exports: [RouterModule
    , TemplateModule,
    FormsModule,
    ReactiveFormsModule,
    TemplateModule,
    BrowserAnimationsModule,
    BsDatepickerModule
  ]
})
export class AppRoutingModule { }
