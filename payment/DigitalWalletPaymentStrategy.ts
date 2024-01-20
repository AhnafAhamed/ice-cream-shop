class DigitalWalletPaymentStrategy implements PaymentStrategy {
  processPayment(amount: number): string {
    // Logic for processing digital wallet payment
    return `Digital wallet payment of $${amount} processed.`;
  }
}
