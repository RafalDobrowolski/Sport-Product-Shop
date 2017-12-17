import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor( private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.product = {
      "productId": id,
      "productName": "Football Boots",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2009",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/kids-boots.jpg"

    }
  }
  
  onBack(): void {
    this._router.navigate(['/products']);
  }
}
