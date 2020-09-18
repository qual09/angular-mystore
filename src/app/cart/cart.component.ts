import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({ name: '', address: '' });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  clearMyCart() {
    this.items = this.cartService.clearCart();
  }

  onSubmit(customerData) {
    if (this.items[0]) { // Cart is not empty
      // Process checkout data here
      this.items = this.cartService.clearCart();
      this.checkoutForm.reset();
      console.warn('Your order has been submitted', customerData);
    } else { // Cart is empty
      console.log('NOT HERE' + this.items);
      alert('Cart is empty!');
    }
  }

}