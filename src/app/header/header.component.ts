import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl:'../app.component.css'
})
export class HeaderComponent {
  @Input() budget:number;
  @Input() incomesTotal:number;
  @Input() expensesTotal:number;
  @Input() porcentageTotal:string;


}
