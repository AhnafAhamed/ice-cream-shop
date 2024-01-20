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
