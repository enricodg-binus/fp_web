import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AlertComponent} from './alert.component';
import {MapToIterable} from '../../libraries/map-to-iterable.pipe';


@NgModule({
    declarations: [
        AlertComponent,
        MapToIterable
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AlertComponent
    ]
})
export class AlertModule { }
