class LoyaltyProgram {
  private customers: Customer[];

  constructor() {
    this.customers = [];
  }

  addCustomer(customer: Customer): void {
    this.customers.push(customer);
  }

  awardPoints(customerId: string, points: number): void {
    const customer = this.customers.find((c) => c.getId() === customerId);
    if (customer) {
      customer.addLoyaltyPoints(points);
    }
  }

  redeemPoints(customerId: string, points: number): boolean {
    const customer = this.customers.find((c) => c.getId() === customerId);
    if (customer) {
      return customer.redeemLoyaltyPoints(points);
    }
    return false;
  }

  getCustomerPoints(customerId: string): number {
    const customer = this.customers.find((c) => c.getId() === customerId);
    if (customer) {
      return customer.getLoyaltyPoints();
    }
    return 0;
  }
}
