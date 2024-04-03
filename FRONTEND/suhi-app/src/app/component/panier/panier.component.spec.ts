import { Box } from "../../models/Box";

export class ShoppingCart {
  private _items: Array<{box: Box, quantiteCommande: number}> = [];

  public get totalPrice(): number {
    return this._items.reduce((totalPrice, item) => {
      return totalPrice + (item.box.prix * item.quantiteCommande);
    }, 0);
  }

  public get totalItems(): number {
    return this._items.reduce((totalItems, item) => {
      return totalItems + item.quantiteCommande;
    }, 0);
  }

  public get items(): Array<{box: Box, quantiteCommande: number}> {
    return this._items;
  }

  public addBox(box: Box, quantiteCommande: number): void {
    const index = this._items.findIndex(item => item.box.id === box.id);
    if (index >= 0) {
      this._items[index].quantiteCommande = this._items[index].quantiteCommande + quantiteCommande;
      if (this._items[index].quantiteCommande === 0) {
        this._items.splice(index, 1);
      }
    } else {
      this._items.push({box: box, quantiteCommande: quantiteCommande});
    }
  }

  public removeBox(box: Box): void {
    this._items = this._items.filter(item => item.box.id !== box.id);
  }
}