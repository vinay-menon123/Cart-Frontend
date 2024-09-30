import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from '../cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css'
})
export class CartListComponent {
  @ViewChild('item-value') divElementRef:ElementRef;
  divElement:HTMLElement;
  id:number = 0;
  cart_id:number = 0;
  value:number;
  carts:Cart[] = [];
  cart:Cart;
  inner_id:string=""
  constructor(private route:ActivatedRoute, private cartService:CartService){}
  
  getId(){
    this.id = this.route.snapshot.params['id'];
  }

  getCart(){
    this.cartService.getCartId(this.id).subscribe(data=>{
      this.carts = data;
    })
  }
  ngOnInit():void{
    this.getId();
    this.getCart();
    console.log(this.id);
    console.log("Helloooooo!!!");
  }

  Add(cart_id:number){
    this.cartService.updateCartAdd(this.id,cart_id).subscribe(data=>{
      console.log(data,cart_id);
      this.cart = data;
      this.inner_id = `item-value-${cart_id}`
      const element: HTMLElement = document.getElementById(this.inner_id) as HTMLElement
      element.innerHTML = this.cart.val.toString();
    })
  }

  Subtract(cart_id:number){
    this.cartService.updateCartSubtract(this.id,cart_id).subscribe(data=>{
      console.log(data,cart_id);
      this.cart = data;
      this.inner_id = `item-value-${cart_id}`
      const element: HTMLElement = document.getElementById(this.inner_id) as HTMLElement
      element.innerHTML = this.cart.val.toString();
    })
  }
}

