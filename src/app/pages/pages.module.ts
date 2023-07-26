
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { RoutingModule } from './routing.module';


//pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        HomeComponent,
        DetailsComponent
    ],
    imports: [
        CommonModule,
        RoutingModule,
        SharedModule,
        HttpClientModule
    ]
})
export class PagesModule { }
