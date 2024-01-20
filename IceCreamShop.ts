import { Customer } from "./customer/Customer";
import { Feedback } from "./feedback/Feedback";
import { RatingSystem } from "./feedback/RatingSystem";
import { Order } from "./order/Order";
import { PromotionManager } from "./promotion/PromotionManager";
import { SeasonalSpecial } from "./promotion/SeasonalSpecial";

export class IceCreamShop {
  private customers: Customer[];
  private orders: Order[];
  private promotionManager: PromotionManager;
  private ratingSystem: RatingSystem;

  constructor() {
    this.customers = [];
    this.orders = [];
    this.promotionManager = new PromotionManager();
    this.ratingSystem = new RatingSystem();
  }

  addCustomer(customer: Customer): void {
    this.customers.push(customer);
  }

  placeOrder(order: Order): void {
    this.orders.push(order);
  }

  addFeedback(feedback: Feedback): void {
    this.ratingSystem.addFeedback(feedback);
  }

  addSeasonalSpecial(special: SeasonalSpecial): void {
    this.promotionManager.addPromotion(special);
  }

  getCurrentPromotions(): SeasonalSpecial[] {
    return this.promotionManager.getCurrentPromotions();
  }

  getAverageRating(): number {
    return this.ratingSystem.getAverageRating();
  }
}
