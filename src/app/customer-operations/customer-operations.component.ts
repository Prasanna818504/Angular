import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-customer-operations',
  templateUrl: './customer-operations.component.html',
  styleUrls: ['./customer-operations.component.css'],
  imports: [CommonModule]
})
export class CustomerOperationsComponent {
  customerOperations = [
    { name: 'Kyc', icon: 'fas fa-id-card' },
    { name: 'Customer Onboarding', icon: 'fas fa-user-plus' },
    { name: 'KYC Tasks', icon: 'fas fa-tasks' },
    { name: 'Customer Onboarding Tasks', icon: 'fas fa-clipboard-list' },
    { name: 'Create Account Tasks', icon: 'fas fa-user-circle' },
    { name: 'Business Suite', icon: 'fas fa-briefcase' },
    { name: 'Teller Operation', icon: 'fas fa-wallet' },
    { name: 'Loan Task Summary', icon: 'fas fa-hand-holding-usd' },
    { name: 'Account Monitoring', icon: 'fas fa-chart-line' }
  ];

  isPopupOpen = false;  
  selectedOperation: any = null; 

  openPopup(operation: any): void {
    this.selectedOperation = operation;
    this.isPopupOpen = true;
  }

  closePopup(): void {
    this.isPopupOpen = false;
    this.selectedOperation = null;
  }
  
 
}
