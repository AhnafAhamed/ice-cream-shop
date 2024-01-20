import { OrderProcess } from "../order/OrderProcess";

export class PlaceOrderCommand implements Command {
  private orderProcess: OrderProcess;

  constructor(orderProcess: OrderProcess) {
    this.orderProcess = orderProcess;
  }

  execute(): void {
    this.orderProcess.confirmOrder();
  }

  undo(): void {
    this.orderProcess.cancelOrder();
  }
}
