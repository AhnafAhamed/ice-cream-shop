import { CustomIceCream } from "../ice-cream/CustomIceCream";

export class SeasonalSpecial {
  private name: string;
  private description: string;
  private includedItems: CustomIceCream[];
  private specialPrice: number;
  private validFrom: Date;
  private validUntil: Date;

  constructor(
    name: string,
    description: string,
    includedItems: CustomIceCream[],
    specialPrice: number,
    validFrom: Date,
    validUntil: Date
  ) {
    this.name = name;
    this.description = description;
    this.includedItems = includedItems;
    this.specialPrice = specialPrice;
    this.validFrom = validFrom;
    this.validUntil = validUntil;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getIncludedItems(): CustomIceCream[] {
    return this.includedItems;
  }

  getSpecialPrice(): number {
    return this.specialPrice;
  }

  getValidityPeriod(): string {
    return `Valid from ${this.validFrom.toLocaleDateString()} to ${this.validUntil.toLocaleDateString()}`;
  }

  isCurrentlyValid(): boolean {
    const currentDate = new Date();
    return currentDate >= this.validFrom && currentDate <= this.validUntil;
  }
}
