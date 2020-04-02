import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/interfaces/order';
import { orders } from 'src/data/account-orders';

@Component({
  selector: 'app-page-trade',
  templateUrl: './page-trade.component.html',
  styleUrls: ['./page-trade.component.css']
})
export class PageTradeComponent implements OnInit {
  orders: Order[] = orders;
  constructor() { }

  ngOnInit() {
  }

}
