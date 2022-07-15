import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Models/order';

import { Seller } from 'src/app/Models/seller';
import { OrdersService } from 'src/app/Services/orders.service';
import { SellerService } from 'src/app/Services/seller.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  sellersList: Seller[] | any;
  orderList:Order[]| any
  constructor(private _SellerService: SellerService,private _order:OrdersService) {}

  ngOnInit(): void {
    this.getAllSeller();
    this.getAllOrders()
  }
  getAllSeller() {
    this._SellerService.getAllSellers().subscribe((data) => {
      this.sellersList = data.map((s) => {
        return {
          id: s.payload.doc.id,
          ...s.payload.doc.data(),
        };
      });
    });
  }
  getAllOrders() {
    this._order.getAllOrders().subscribe((data) => {
      this.orderList = data.map((s) => {
        return {
          id: s.payload.doc.id,
          ...s.payload.doc.data(),
        };
      });
    });
  }
}
