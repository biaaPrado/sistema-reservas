import { Accommodation } from "../interfaces/Accommodation";

export class House implements Accommodation {
  constructor(public id: string, private pricePerDay: number) {}

  calculatePrice(days: number): number {
    const cleaningFee = 100;
    return this.pricePerDay * days + cleaningFee;
  }
}//cria a classe House que implementa a interface Accommodation, onde tem um id, 
// um preço por dia e um método para calcular o preço total de acordo com os dias de estadia, 
// incluindo uma taxa de limpeza fixa.