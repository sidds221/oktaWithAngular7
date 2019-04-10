 import { NgModule } from '@angular/core';
 import {Routes, RouterModule} from '@angular/router';
import { SummaryListComponent } from './summary-list/summary-list.component';
import { FundComponent } from './fund/fund.component';
import { SecurityComponent } from './security/security.component';

 const routes: Routes = [
     {path: 'summary', component: SummaryListComponent},
     {path: 'fund', component: FundComponent},
     {path: 'security', component: SecurityComponent }
    ];

 @NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
 })
 export class AppRoutingModule{ }

//  export const routingComponents = {SummaryListComponent, FundComponent}