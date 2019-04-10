import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SummaryListComponent } from './summary-list/summary-list.component';
import { FundComponent } from './fund/fund.component';
import { FormsModule } from '@angular/forms';
import { SecurityComponent } from './security/security.component';
import { AppRoutingModule, /*routingComponents*/ } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SummaryListComponent,
    FundComponent,
    SecurityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
