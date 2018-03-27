import { Component, OnInit } from '@angular/core';

import { AlertProviderService } from '../../services/alert-provider.service';

@Component({
    moduleId: module.id,
    selector: 'app-alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit {
    message: any = {};

    constructor(private alertService: AlertProviderService) { }

    ngOnInit() {
        this.getMessage();
    }

    getMessage() {
      this.alertService.getMessage().subscribe(message => {

        // if (this.id == this.message.id) {
        //     this.message = message;
        // }

        setTimeout(() => {
            this.message = {};
        }, 2000);
      });
    }
}
