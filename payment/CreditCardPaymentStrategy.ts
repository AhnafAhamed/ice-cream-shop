class CreditCardPaymentStrategy implements PaymentStrategy {
  processPayment(amount: number): string {
    // Logic for processing credit card payment
    return `Credit card payment of $${amount} processed.`;
  }
}
