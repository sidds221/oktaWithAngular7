import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/orders/orders.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  security = 'APPL';
  saveSecurity;

  constructor(private securityServ: OrdersService) { }

  onClick(){
    this.securityServ.getSecurity(this.security).subscribe(data =>{
      this.saveSecurity = data;
    })
  }

  ngOnInit() {
    this.securityServ.getSecurity(this.security).subscribe(data =>{
      this.saveSecurity = data;
    })
  }

}
