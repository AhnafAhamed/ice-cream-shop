import { PaymentStrategy } from "./IPaymentStrategy ";

export class LoyaltyPointsPaymentStrategy implements PaymentStrategy {
  processPayment(amount: number): string {
    return `Payment of $${amount} processed using loyalty points.`;
  }
}
