export class Topping {
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  getTopping(): string {
    return `${this.name} Topping`;
  }
}

// Example usage:
let chocolateChips = new Topping("Chocolate Chips", 0.5);
console.log(chocolateChips.toString());
console.log("Price:", chocolateChips.getPrice());
