import { Accommodation } from "../interfaces/Accommodation";

export class Apartment implements Accommodation {
  constructor(public id: string, private pricePerDay: number) {}

  calculatePrice(days: number): number {
    const condoFee = 50;
    return this.pricePerDay * days + condoFee;
  }
}//cria a classe Apartment que implementa a interface Accommodation, onde tem um id,
// um preço por dia e um método para calcular o preço total de acordo com os dias de estadia, 
// incluindo uma taxa de condomínio fixa.