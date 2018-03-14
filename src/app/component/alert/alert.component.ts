import { Component, OnInit } from '@angular/core';

import { AlertProviderService } from '../../services/alert-provider.service';

@Component({
    moduleId: module.id,
    selector: 'app-alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent {
    message: any;

    constructor(private alertService: AlertProviderService) { }

    OnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }
}
