import { OrderProcess } from "../order/OrderProcess";

export class PlaceOrderCommand implements Command {
  private orderProcess: OrderProcess; // Assuming OrderProcess class is already defined

  constructor(orderProcess: OrderProcess) {
    this.orderProcess = orderProcess;
  }

  execute(): void {
    this.orderProcess.confirmOrder(); // Method to place an order
  }

  undo(): void {
    this.orderProcess.cancelOrder(); // Method to cancel the order
  }
}
