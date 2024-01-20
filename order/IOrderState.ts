import { OrderProcess } from "./OrderProcess";

export interface OrderState {
  selectItems(orderProcess: OrderProcess): void;
  reviewOrder(orderProcess: OrderProcess): void;
  confirmOrder(orderProcess: OrderProcess): void;
  cancelOrder(orderProcess: OrderProcess): void;
}
