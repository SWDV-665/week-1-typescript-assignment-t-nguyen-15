class Grocery {
  name: string;
  quantity: number;

  constructor(name: string, quantity: number) {
    this.name = name;
    this.quantity = quantity;
  }
}
const groceries = [];
groceries.push(new Grocery("milk", 3));
groceries.push(new Grocery("bread", 6));
groceries.push(new Grocery("eggs", 11));
