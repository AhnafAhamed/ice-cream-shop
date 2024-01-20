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
