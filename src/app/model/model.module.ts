import { NgModule } from "@angular/core";
import { Cart } from "./cart.model";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";

NgModule
ProductRepository
StaticDataSource

@NgModule(
    {
        providers: [ProductRepository, StaticDataSource, Cart]
    }
)
export class ModelModule { }