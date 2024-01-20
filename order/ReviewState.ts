import { OrderState } from "./IOrderState";
import { OrderProcess } from "./OrderProcess";

export class ReviewState implements OrderState {
  selectItems(orderProcess: OrderProcess): void {
    console.log("Order already in review stage.");
  }

  reviewOrder(orderProcess: OrderProcess): void {
    console.log("Order reviewed");
    orderProcess.setState(orderProcess.getConfirmationState());
  }

  confirmOrder(orderProcess: OrderProcess): void {
    console.log("Review order before confirming.");
  }

  cancelOrder(orderProcess: OrderProcess): void {
    console.log("Order canceled.");
  }
}
