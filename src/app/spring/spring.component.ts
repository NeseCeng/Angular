import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-spring',
  templateUrl: './spring.component.html',
  styleUrls: ['./spring.component.css'],
  providers: [ProductService]

})
export class SpringComponent implements OnInit {

  constructor(private productService: ProductService) { }
  s:string;
  ngOnInit() {
    
  }

}
