import { Order } from "../order/Order";
import { OrderDecorator } from "./OrderDecorator";

export class SpecialPackagingDecorator extends OrderDecorator {
  private additionalCost = 3; // Fixed cost for special packaging

  constructor(order: Order) {
    super(order);
  }

  getOrderDetails(): string {
    return `${this.order.getOrderDetails()} + Special Packaging`;
  }

  getTotalPrice(): number {
    return this.order.getTotalPrice() + this.additionalCost;
  }
}
