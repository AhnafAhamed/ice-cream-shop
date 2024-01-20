class Feedback {
  private orderId: string;
  private customerId: string;
  private rating: number; // Assuming a rating scale of 1 to 5
  private comments: string;

  constructor(
    orderId: string,
    customerId: string,
    rating: number,
    comments: string
  ) {
    this.orderId = orderId;
    this.customerId = customerId;
    this.rating = rating;
    this.comments = comments;
  }

  getOrderId(): string {
    return this.orderId;
  }

  getCustomerId(): string {
    return this.customerId;
  }

  getRating(): number {
    return this.rating;
  }

  getComments(): string {
    return this.comments;
  }
}

// Example usage:
let customerFeedback = new Feedback(
  "order123",
  "customer456",
  4,
  "Great flavors and fast service!"
);
console.log(`Feedback for Order ID ${customerFeedback.getOrderId()}:`);
console.log(`Rating: ${customerFeedback.getRating()}/5`);
console.log(`Comments: ${customerFeedback.getComments()}`);
