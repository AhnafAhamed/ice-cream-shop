type OrderType = "pickup" | "delivery";

class Order {
  private customIceCreams: CustomIceCream[];
  private orderType: OrderType;
  private quantity: number;

  constructor(orderType: OrderType) {
    this.customIceCreams = [];
    this.orderType = orderType;
    this.quantity = 0;
  }

  addIceCream(customIceCream: CustomIceCream, quantity: number): void {
    this.customIceCreams.push(customIceCream);
    this.quantity += quantity;
  }

  getOrderDetails(): string {
    let details = `Order Type: ${this.orderType}\n`;
    details += `Items:\n`;

    this.customIceCreams.forEach((iceCream, index) => {
      details += `  ${index + 1}. ${iceCream.getDescription()} - Quantity: ${
        this.quantity
      }\n`;
    });

    return details;
  }

  getTotalPrice(): number {
    return this.customIceCreams.reduce(
      (total, iceCream) => total + iceCream.getTotalPrice(),
      0
    );
  }
}
