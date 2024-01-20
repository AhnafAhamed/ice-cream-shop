import { Feedback } from "./Feedback";

export class RatingSystem {
  private feedbackList: Feedback[];

  constructor() {
    this.feedbackList = [];
  }

  addFeedback(feedback: Feedback): void {
    this.feedbackList.push(feedback);
  }

  getAverageRating(): number {
    if (this.feedbackList.length === 0) {
      return 0;
    }
    const totalRating = this.feedbackList.reduce(
      (sum, feedback) => sum + feedback.getRating(),
      0
    );
    return totalRating / this.feedbackList.length;
  }

  getFeedbackForOrder(orderId: string): Feedback | undefined {
    return this.feedbackList.find(
      (feedback) => feedback.getOrderId() === orderId
    );
  }
}

// Example usage:
let ratingSystem = new RatingSystem();
ratingSystem.addFeedback(
  new Feedback("order123", "customer456", 4, "Great flavors!")
);
ratingSystem.addFeedback(
  new Feedback("order124", "customer457", 5, "Loved the ice cream!")
);

console.log(`Average Rating: ${ratingSystem.getAverageRating()}`);
let specificFeedback = ratingSystem.getFeedbackForOrder("order123");
if (specificFeedback) {
  console.log(
    `Feedback for Order ID ${specificFeedback.getOrderId()}: Rating - ${specificFeedback.getRating()}`
  );
}
