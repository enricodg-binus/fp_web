import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-select-address',
  templateUrl: './select-address.component.html',
  styleUrls: ['./select-address.component.css']
})
export class SelectAddressComponent implements OnInit {

    @Input() address_data: any;
  constructor() { }

  ngOnInit() {
  }

}
