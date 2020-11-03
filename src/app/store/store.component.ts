import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
import { Product } from "../model/product.module";
import { ProductRepository } from "../model/product.repository";
import {Router} from "@angular/router";

Component
Product
ProductRepository

@Component(
    {
        selector: "store",
        templateUrl: "store.component.html"
    }
)
export class StoreComponent {

    public selectedCategory =null;
    public productsRerpage = 4;
    public selectedPage = 1;

    constructor(private repository: ProductRepository,
        private cart: Cart,
        private router: Router) { }

    get products(): Product[] {
        let pageIndex = (this.selectedPage -1) * this.productsRerpage;
        return this.repository.getProducts(this.selectedCategory).slice(pageIndex, pageIndex + this.productsRerpage);
    }

    get categories(): string[] {
        return this.repository.getCategories();
    }

    // get pageNumbers(): number[] {
    //     return Array(Math.ceil(this.repository
    //         .getProducts(this.selectedCategory).length / this.productsRerpage)).fill(0).map((x,i) => i + 1);
    // }

    get pageCount(): number {
        return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsRerpage);
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    changePageSize(newSize: number){
        this.productsRerpage = Number(newSize);
        this.changePage(1);
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }

    addProductToCart(product: Product){
        this.cart.addLine(product);
        this.router.navigateByUrl("/cart");
    }
}
