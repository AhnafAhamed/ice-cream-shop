import { Order } from "../order/Order";
import { OrderDecorator } from "./OrderDecorator";

export class GiftWrappingDecorator extends OrderDecorator {
  private additionalCost = 20;

  constructor(order: Order) {
    super(order);
  }

  getOrderDetails(): string {
    return `${this.order.getOrderDetails()} + Gift Wrapping`;
  }

  getTotalPrice(): number {
    return this.order.getTotalPrice() + this.additionalCost;
  }
}
