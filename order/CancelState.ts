import { OrderState } from "./IOrderState";
import { OrderProcess } from "./OrderProcess";

export class CancelState implements OrderState {
  selectItems(orderProcess: OrderProcess): void {
    console.log("Order already in confirmation stage.");
  }

  reviewOrder(orderProcess: OrderProcess): void {
    console.log("Order already reviewed.");
  }

  confirmOrder(orderProcess: OrderProcess): void {
    orderProcess.setState(orderProcess.getConfirmationState());
    console.log("Order confirmed");
  }

  payOrder(orderProcess: OrderProcess): void {
    console.log("Order  paid.");
  }

  cancelOrder(orderProcess: OrderProcess): void {
    orderProcess.setState(orderProcess.getCancelState());
  }
}
