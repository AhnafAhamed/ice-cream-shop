export class Favorite {
  private customerId: string;
  private combinationName: string;
  private combinationDetails: string;

  constructor(
    customerId: string,
    combinationName: string,
    combinationDetails: string
  ) {
    this.customerId = customerId;
    this.combinationName = combinationName;
    this.combinationDetails = combinationDetails;
  }

  getCustomerId(): string {
    return this.customerId;
  }

  getCombinationName(): string {
    return this.combinationName;
  }

  getCombinationDetails(): string {
    return this.combinationDetails;
  }
}
