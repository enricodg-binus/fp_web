import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../../../services/order.service';
import {AuthServiceProviderService} from '../../../services/auth-service-provider.service';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-requestdetail',
  templateUrl: './requestdetail.component.html',
  styleUrls: ['../../dashboard-sidebar.component.css']
})
export class RequestdetailComponent implements OnInit {

  id: string;
  request_order_details: any = {};
  shipment_data: any = {};
  user_data: any =  {};
  order_items: any = [];
  test: any = [];
  res: any = [];

  constructor(private router: ActivatedRoute, private orderService: OrderService, private authService: AuthServiceProviderService,
              private productService: ProductService) { }

  ngOnInit() {
      this.router.params.subscribe(result => {
          this.id = result['id'];
      });

      this.getOrderDetails(this.id);
      this.getUserData();
  }

  getOrderDetails(id: any) {
      this.orderService.getOrderDetails(id).subscribe(
          res => {
            this.request_order_details = res;
            // console.log(res);
            this.getShipmentData(this.request_order_details.shipment_address_id);
            this.getOrderItems(this.request_order_details.orderitems);
          },
          err => {
            return err;
          }
      );
  }

  getUserData() {
      this.authService.validateToken().subscribe(
          res => {
              this.user_data = res;
          }
      );
  }

  getShipmentData(id: any) {
      this.orderService.getShipmentAddress(id).subscribe(
          res => {
              this.shipment_data = res;
          }
      );
  }

  getOrderItems(order_items: any) {
      for (let i of order_items) {
          this.order_items.push(i);
      }
  }

}
