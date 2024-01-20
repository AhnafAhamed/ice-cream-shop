import { PaymentStrategy } from "./IPaymentStrategy ";

export class DigitalWalletPaymentStrategy implements PaymentStrategy {
  processPayment(amount: number): string {
    return `Digital wallet payment of $${amount} processed.`;
  }
}
