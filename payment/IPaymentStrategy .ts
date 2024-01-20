interface PaymentStrategy {
  processPayment(amount: number): string;
}
