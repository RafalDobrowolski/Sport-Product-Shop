import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  constructor( private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
  }
  
  onBack(): void {
    this._router.navigate(['/products']);
  }
}
