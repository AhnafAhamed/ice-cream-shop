export class Feedback {
  private orderId: string;
  private customerId: string;
  private rating: number;
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
