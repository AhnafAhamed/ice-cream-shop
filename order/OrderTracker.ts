class OrderTracker {
  private observers: OrderObserver[];
  private orderStatus: string;

  constructor() {
    this.observers = [];
    this.orderStatus = "Preparing";
  }

  registerObserver(observer: OrderObserver): void {
    this.observers.push(observer);
  }

  removeObserver(observer: OrderObserver): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    for (let observer of this.observers) {
      observer.update(this.orderStatus);
    }
  }

  getOrderStatus(): string {
    return this.orderStatus;
  }

  setOrderStatus(status: string): void {
    this.orderStatus = status;
    this.notifyObservers();
  }
}
