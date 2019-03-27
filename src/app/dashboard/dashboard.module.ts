import {NgModule} from '@angular/core'
import { DashboardComponent } from './dashboard.component';
import { ShowcaseProductsComponent } from "./showcase/showcase-products.component";

@NgModule({
    declarations: [
        DashboardComponent,
        ShowcaseProductsComponent
    ],
    exports: [
        DashboardComponent
    ]
})
export class DashboardModule{

}