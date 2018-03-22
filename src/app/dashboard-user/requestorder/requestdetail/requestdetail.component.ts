import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../../../services/order.service';

@Component({
  selector: 'app-requestdetail',
  templateUrl: './requestdetail.component.html',
  styleUrls: ['../../dashboard-sidebar.component.css']
})
export class RequestdetailComponent implements OnInit {

  id: string;

  constructor(private router: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit() {
      this.router.params.subscribe(result => {
          this.id = result['id'];
      });

      this.getOrderDetails(this.id);
  }

  getOrderDetails(id: any) {
      this.orderService.getOrderDetails(id).subscribe(
          res => {
            console.log(res);
            return res;
          },
          err => {
            return err;
          }
      );
  }

}
