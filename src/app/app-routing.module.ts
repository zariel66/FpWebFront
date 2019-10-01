import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateModule} from './template/template.module'
import { NcguiasComponent } from './ncguias/ncguias/ncguias.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/ncguias', pathMatch: 'full'
  },
  {
    path:'ncguias',component: NcguiasComponent
  }
];

@NgModule({
  declarations:[NcguiasComponent],
  imports: [
    RouterModule.forRoot(routes),
    TemplateModule
  ],
  exports: [RouterModule
  ,TemplateModule
  ]
})
export class AppRoutingModule { }
