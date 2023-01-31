import { Component } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
    products: Product[] = [
        {name:"chaise", price:10, stock: 4},
        {name: "table", price: 100, stock:1},
        {name: "yacht", price: 1, stock:0},
];
}
