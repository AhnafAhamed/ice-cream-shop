import { PaymentStrategy } from "./IPaymentStrategy ";

export class CashtPaymentStrategy implements PaymentStrategy {
  processPayment(amount: number): string {
    // Logic for processing digital wallet payment
    return `Cash payment of $${amount} processed.`;
  }
}
