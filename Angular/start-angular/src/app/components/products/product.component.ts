import { Component, Input } from "@angular/core";
import { IProduct } from "src/app/models/product";

@Component({
   selector: 'app-person',
   templateUrl: './product.component.html'
})
export class ProductComponent{
   title: "Example"
   @Input() product: IProduct
}