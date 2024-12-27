import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerOperationsComponent } from './customer-operations/customer-operations.component';


@Component({
  selector: 'app-root',
  imports: [DashboardComponent, CustomerOperationsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard Application';
}
