import { Component } from '@angular/core';
import {Observable, tap} from "rxjs";
import {IProduct} from "../../models/product";
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent {
  title = 'angular-start';
  products$: Observable<IProduct[]>;
  loading: boolean = false;
  term = ''

  constructor(
    private productsService: ProductsService,
    public modalService: ModalService
  ) {}

  ngOnInit(){
    this.loading = true;
    this.products$ = this.productsService.getAll().pipe(
      tap(() => this.loading = false)
    )
  }
}
