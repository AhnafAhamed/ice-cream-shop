import { IceCreamBase } from "./IceCreamBase";
import { Topping } from "./Topping";
import { CustomIceCream } from "./CustomIceCream";

export class CustomIceCreamBuilder {
  private base: IceCreamBase;
  private toppings: Topping[] = [];

  setBase(base: IceCreamBase): CustomIceCreamBuilder {
    this.base = base;
    return this;
  }

  addTopping(topping: Topping): CustomIceCreamBuilder {
    this.toppings.push(topping);
    return this;
  }

  getBase(): IceCreamBase {
    return this.base;
  }

  getToppings(): Topping[] {
    return this.toppings;
  }

  build(): CustomIceCream {
    return new CustomIceCream(this);
  }
}
