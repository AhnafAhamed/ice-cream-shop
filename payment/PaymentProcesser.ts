import { PaymentStrategy } from "./IPaymentStrategy ";
import { Order } from "../order/Order";
export class PaymentProcessor {
  private strategy: PaymentStrategy;

  constructor(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  processPayment(order: Order): string {
    const amount = order.getTotalPrice();
    return this.strategy.processPayment(amount);
  }
}
