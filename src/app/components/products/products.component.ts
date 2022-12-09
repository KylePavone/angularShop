import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProducts } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products!: IProducts[];
  productSubscription!: Subscription;
  limit: number = 3;
  canEdit: boolean = false;


  constructor(private productsService: ProductsService) {}


  ngOnInit():void {
    this.canEdit = true;
    this.productSubscription = this.productsService.getProducts(this.limit).subscribe((data) => {
      this.products = data;
    });
    
  }

  ngOnDestroy():void {
    if(this.productSubscription) {
      this.productSubscription.unsubscribe();
    }
  }


  showMore() {
    this.limit += 3;
    this.productSubscription = this.productsService.getProducts(this.limit).subscribe((data) => {
      this.products = data;
    });
  }

}
