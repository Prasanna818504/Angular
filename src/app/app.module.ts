import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerOperationsComponent } from './customer-operations/customer-operations.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
      
  ],
  imports: [
    BrowserModule,
    AppComponent,
    DashboardComponent,
    CustomerOperationsComponent,
    CommonModule,
  ],
  
  providers: []
})
export class AppModule {}
