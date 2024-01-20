import { OrderState } from "./IOrderState";
import { OrderProcess } from "./OrderProcess";

export class SelectionState implements OrderState {
  selectItems(orderProcess: OrderProcess): void {
    console.log("Items selected");
    orderProcess.setState(orderProcess.getSelectionState());
  }

  reviewOrder(orderProcess: OrderProcess): void {
    console.log("Select items before reviewing.");
  }

  confirmOrder(orderProcess: OrderProcess): void {
    console.log("Select and review items before confirming.");
  }

  cancelOrder(orderProcess: OrderProcess): void {
    console.log("Order canceled.");
  }
}
