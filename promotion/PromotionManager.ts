import { SeasonalSpecial } from "./SeasonalSpecial";

export class PromotionManager {
  private promotions: SeasonalSpecial[];

  constructor() {
    this.promotions = [];
  }

  addPromotion(promotion: SeasonalSpecial): void {
    this.promotions.push(promotion);
  }

  removePromotion(promotionName: string): void {
    this.promotions = this.promotions.filter(
      (promo) => promo.getName() !== promotionName
    );
  }

  getCurrentPromotions(): SeasonalSpecial[] {
    const currentDate = new Date();
    return this.promotions.filter((promo) => promo.isCurrentlyValid());
  }

  getPromotionDetails(promotionName: string): string | null {
    const promotion = this.promotions.find(
      (promo) => promo.getName() === promotionName
    );
    return promotion
      ? `${promotion.getName()}: ${promotion.getDescription()} - ${promotion.getSpecialPrice()} (Valid until ${promotion.getValidityPeriod()})`
      : null;
  }
}
