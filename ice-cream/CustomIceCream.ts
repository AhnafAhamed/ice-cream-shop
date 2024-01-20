import { IceCreamBase } from "./IceCreamBase";
import { Topping } from "./Topping";
import { CustomIceCreamBuilder } from "./CustomIceCreamBuilder";
export class CustomIceCream {
  private base: IceCreamBase;
  private toppings: Topping[];

  constructor(builder: CustomIceCreamBuilder) {
    this.base = builder.getBase();
    this.toppings = builder.getToppings();
  }

  getDescription(): string {
    let description = `Custom Ice Cream: ${this.base.toString()}`;
    if (this.toppings.length) {
      description += ` with ${this.toppings
        .map((topping) => topping.toString())
        .join(", ")}`;
    }
    return description;
  }

  getTotalPrice(): number {
    let totalPrice = this.base.getBasePrice();
    this.toppings.forEach((topping) => {
      totalPrice += topping.getPrice();
    });
    return totalPrice;
  }
}
