import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { from, VirtualTimeScheduler } from 'rxjs';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute) { }
  title = 'Ürün Listesi';
  filterText = '';
  products: Product[];
  ngOnInit() {
   
   
   

   this.activatedRoute.params.subscribe(params => {
     console.log("aaaaa");
      this.productService.getProducts(params['categoryId']).subscribe(data => { this.products = data });
    });
 
  /*    this.productService.getSpringMyServis().subscribe(resp=>{
        console.log("olduuuu..");
        this.s=resp;
        // console.log('resp:'+resp);
      });*/

  }
  addToCard() {
    this.alertifyService.success('Added');
  }

}
