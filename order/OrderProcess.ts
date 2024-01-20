import { ConfirmationState } from "./ConfirmationState";
import { OrderState } from "./IOrderState";
import { ReviewState } from "./ReviewState";
import { SelectionState } from "./SelectionState";

export class OrderProcess {
  private selectionState: OrderState;
  private reviewState: OrderState;
  private confirmationState: OrderState;
  private cancelState: OrderState;

  private currentState: OrderState;

  constructor() {
    this.selectionState = new SelectionState();
    this.reviewState = new ReviewState();
    this.confirmationState = new ConfirmationState();
    this.cancelState = new ConfirmationState();

    this.currentState = this.selectionState; // Initial state
  }

  setState(state: OrderState) {
    this.currentState = state;
  }

  getSelectionState(): OrderState {
    return this.selectionState;
  }

  getReviewState(): OrderState {
    return this.reviewState;
  }

  getConfirmationState(): OrderState {
    return this.confirmationState;
  }

  getCancelState(): OrderState {
    return this.cancelState;
  }

  selectItems(): void {
    this.currentState.selectItems(this);
  }

  reviewOrder(): void {
    this.currentState.reviewOrder(this);
  }

  confirmOrder(): void {
    this.currentState.confirmOrder(this);
  }

  cancelOrder(): void {
    this.currentState.cancelOrder(this);
  }
}

// Example usage:
let orderProcess = new OrderProcess();
orderProcess.selectItems(); // Moves to review state
orderProcess.reviewOrder(); // Moves to confirmation state
orderProcess.confirmOrder(); // Order confirmed
