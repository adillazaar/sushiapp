import { Component, Input } from '@angular/core';
import { Box } from '../../models/Box';
import { ShoppingCart } from './panier.component.spec';

@Component({
  selector: 'app-card-sushi-box',
  templateUrl: './panier.component.html',
  styleUrls: ['././panier.component.css']
})
export class CardSushiBoxComponent {
  public shoppingCart: ShoppingCart = new ShoppingCart();

  constructor() {
    this.shoppingCart = new ShoppingCart();
  }

  @Input() box: Box = new Box();
  number1 = this.box.quantiteCommande;

  ajouterUnite() {
    this.box.quantiteCommande++;
    this.number1 = this.box.quantiteCommande;
    this.shoppingCart.addBox(this.box, this.number1);
  }

  retirerUnite() {
    this.box.quantiteCommande--;
    this.number1 = this.box.quantiteCommande;
    if (this.number1 <= 0) {
      this.shoppingCart.removeBox(this.box);
    }
  }
}