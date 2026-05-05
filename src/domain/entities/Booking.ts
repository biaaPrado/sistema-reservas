import { Accommodation } from "../interfaces/Accommodation";
import { PricingService } from "../../application/services/PricingService";

export class Booking {
  public basePrice: number;
  public totalPrice: number;

  constructor(
    public accommodation: Accommodation,
    public days: number,
    pricingService: PricingService
  ) {
    this.basePrice = accommodation.calculatePrice(days);
    this.totalPrice = pricingService.applyFees(this.basePrice);
  }
}//cria a classe Booking que representa uma reserva, onde tem um acomodação, 
// um número de dias, um preço base calculado pela acomodação e um preço total 
// calculado aplicando as taxas usando o PricingService.