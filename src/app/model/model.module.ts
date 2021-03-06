import { NgModule } from "@angular/core";
import { Cart } from "./cart.model";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import {Order} from "./order.model";
import {OrderRepository} from "./order.repository";

@NgModule(
    {
        providers: [ProductRepository, StaticDataSource, Cart,
                    Order, OrderRepository]
    }
)
export class ModelModule { }
