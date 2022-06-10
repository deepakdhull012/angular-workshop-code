import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() products: Array<IProduct> = [];
  constructor() {
    console.log("Product List ---> Constructor")
   }

   ngOnChanges(changes: SimpleChanges): void {
    console.log("Product List ---> ngOnChanges")
   }


  ngOnInit(): void {
    console.log("Product List ---> ngOnInit");
    this.products = [
      {
        id: 1,
        name: "Sample Product",
        description: "Amazing product",
        price: 20,
        quantity: 3,
        rating: 4.5
      },
      {
        id: 2,
        name: "Sample Product 2",
        description: "Amazing product",
        price: 200,
        quantity: 31,
        rating: 4.5
      },
      {
        id: 3,
        name: "Sample Product",
        description: "Amazing product",
        price: 20,
        quantity: 3,
        rating: 4.5
      },
      {
        id: 4,
        name: "Sample Product 2",
        description: "Amazing product",
        price: 200,
        quantity: 31,
        rating: 4.5
      },
      {
        id: 5,
        name: "Sample Product",
        description: "Amazing product",
        price: 20,
        quantity: 3,
        rating: 4.5
    },
    {
      id: 6,
      name: "Sample Product 2",
      description: "Amazing product",
      price: 200,
      quantity: 31,
      rating: 4.5
    }
    ];
  }

  ngDoCheck(): void {
    console.log("Product List ---> ngDoCheck")
  }

  ngAfterContentInit(): void {
    console.log("Product List ---> ngAfterContentInit")
  }

  ngAfterContentChecked(): void {
    console.log("Product List ---> ngAfterContentChecked")
  }

  ngAfterViewInit(): void {
    console.log("Product List ---> ngAfterViewInit")
  }

  ngAfterViewChecked(): void {
    console.log("Product List ---> ngAfterViewChecked")
  }

  ngOnDestroy(): void {
    console.log("Product List ---> ngOnDestroy")
  }

  
  

}
