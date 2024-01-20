class LoyaltyPointsPaymentStrategy implements PaymentStrategy {
  processPayment(amount: number): string {
    // Logic for processing payment with loyalty points
    return `Payment of $${amount} processed using loyalty points.`;
  }
}
