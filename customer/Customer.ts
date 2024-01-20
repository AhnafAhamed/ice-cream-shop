import { Favorite } from "../favorite/Favorite";
import { OrderObserver } from "../order/IOrderObserver";
import { Order } from "../order/Order";

export class Customer implements OrderObserver {
  private id: string;
  private name: string;
  private email: string;
  private phone: string;
  private address: string;
  private orders: Order[];
  private favoriteIceCreams: Favorite[];
  private loyaltyPoints: number;

  constructor(name: string) {
    this.name = name;
    this.loyaltyPoints = 0;
  }

  getId(): string {
    return this.id;
  }

  setId(id: string): void {
    this.id = id;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getPhone(): string {
    return this.phone;
  }

  setPhone(phone: string): void {
    this.phone = phone;
  }

  getAddress(): string {
    return this.address;
  }

  setAddress(address: string): void {
    this.address = address;
  }

  getOrders(): Order[] {
    return this.orders;
  }

  addOrder(order: Order): void {
    this.orders.push(order);
  }

  getFavoriteIceCreams(): Favorite[] {
    return this.favoriteIceCreams;
  }

  addFavoriteIceCream(favorite: Favorite): void {
    this.favoriteIceCreams.push(favorite);
  }

  update(orderStatus: string): void {
    console.log(`${this.name}, your order status is now: ${orderStatus}`);
  }

  getLoyaltyPoints(): number {
    return this.loyaltyPoints;
  }

  addLoyaltyPoints(points: number): void {
    this.loyaltyPoints += points;
  }

  redeemLoyaltyPoints(points: number): boolean {
    if (this.loyaltyPoints >= points) {
      this.loyaltyPoints -= points;
      return true;
    }
    return false;
  }
}
