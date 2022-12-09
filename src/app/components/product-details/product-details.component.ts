import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProducts } from 'src/app/models/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  product!: IProducts;
  prouductSubscription!: Subscription;


  constructor(private route: ActivatedRoute) {}


  ngOnInit() {
    this.prouductSubscription = this.route.data.subscribe((data) => {
      this.product = data['data'];
    })
  }
}
