import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateModule } from './template/template.module'
import { NcguiasComponent } from './ncguias/ncguias/ncguias.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

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
    BsDatepickerModule.forRoot(),
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  exports: [RouterModule
    , TemplateModule,
    FormsModule,
    ReactiveFormsModule,
    TemplateModule,
    BrowserAnimationsModule,
    BsDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule
  ]
})
export class AppRoutingModule { }
