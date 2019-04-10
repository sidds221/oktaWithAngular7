import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/orders/orders.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css']
})
export class FundComponent implements OnInit {
  funds;
  name = 'CANA';

  constructor(private fundServ: OrdersService) { }

  onClick(){
    this.fundServ.getFund(this.name).subscribe(data =>{
      this.funds = data;
    })
  }

  ngOnInit() {
    this.fundServ.getFund(this.name).subscribe(data =>{
      this.funds = data;
    })
  }

}
