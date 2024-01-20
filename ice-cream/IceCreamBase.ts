export class IceCreamBase {
  private flavor: string;
  private basePrice: number;

  constructor(flavor: string, basePrice: number) {
    this.flavor = flavor;
    this.basePrice = basePrice;
  }

  getFlavor(): string {
    return this.flavor;
  }

  getBasePrice(): number {
    return this.basePrice;
  }

  getBaseIceCream(): string {
    return `${this.flavor} Ice Cream`;
  }
}

// Example usage:
let vanilla = new IceCreamBase("Vanilla", 2.5);
console.log(vanilla.toString());
console.log("Price:", vanilla.getBasePrice());
