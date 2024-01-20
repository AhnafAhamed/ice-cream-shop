import { Order } from "../order/Order";

export abstract class OrderDecorator {
  protected order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  abstract getOrderDetails(): string;
  abstract getTotalPrice(): number;
}
