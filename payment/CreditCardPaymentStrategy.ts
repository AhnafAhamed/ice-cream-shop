import { PaymentStrategy } from "./IPaymentStrategy ";

export class CreditCardPaymentStrategy implements PaymentStrategy {
  processPayment(amount: number): string {
    return `Credit card payment of $${amount} processed.`;
  }
}
