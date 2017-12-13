import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from "./product.service";

@Component({
    //selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number= 5;
    showImage: boolean = false;
    _listFiltered: string;
    filteredProducts: IProduct[];
    errorMessage: string;

    get listFilter() :string {
        return this._listFiltered;
    }

    set listFilter(value:string) {
        this._listFiltered = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    onRatingClicked(message:string):void {
        this.pageTitle = 'Product List ' + message;
    }

    products: IProduct[] = [];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('oninit');
        this._productService.getProduct()
                            .subscribe(products => { 
                                this.products = products;
                                this.filteredProducts = this.products;
                            },
                            error => this.errorMessage = <any>error);       
    }

    constructor(private _productService: ProductService) {
        //this.listFilter = 'cart';
    }
    performFilter(filterBy:string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct) => 
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}