import { PaymentStrategy } from "./IPaymentStrategy ";

export class CashtPaymentStrategy implements PaymentStrategy {
  processPayment(amount: number): string {
    return `Cash payment of $${amount} processed.`;
  }
}
