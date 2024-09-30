import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Cart } from '../cart';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrl: './view-cart.component.css'
})
export class ViewCartComponent {
  id:number;
  in_id:string;
  carts:Cart[] = []
  constructor(private cartService:CartService, private route:ActivatedRoute){}

  public getId(){
    return this.route.snapshot.params['id'];
  }

  public getFinCart(){
    this.cartService.finCart(this.id).subscribe(data=>{
      console.log("data",data);
      this.carts=data;
    })
  }

  ngOnInit():void{
    this.id = this.getId();
    console.log(this.id,"yooo");
    this.getFinCart();
    console.log(this.carts);
  }
}
