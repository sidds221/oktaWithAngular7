import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/orders/orders.service';

@Component({
  selector: 'app-summary-list',
  templateUrl: './summary-list.component.html',
  styleUrls: ['./summary-list.component.css']
})
export class SummaryListComponent implements OnInit {
  summary;

  constructor(private sumServ: OrdersService) { }

  ngOnInit() {
    this.sumServ.getSummary().subscribe(data =>{
      this.summary = data;
    })
  }

}
