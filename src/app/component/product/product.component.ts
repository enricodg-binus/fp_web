import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-item',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
