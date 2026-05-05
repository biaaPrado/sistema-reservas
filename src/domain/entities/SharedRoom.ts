import { Accommodation } from "../interfaces/Accommodation";

export class SharedRoom implements Accommodation {
  constructor(public id: string, private pricePerDay: number) {}

  calculatePrice(days: number): number {
    return this.pricePerDay * days;
  }
}//cria a classe SharedRoom que implementa a interface Accommodation, onde tem um id,
// um preço por dia e um método para calcular o preço total de acordo com os dias de estadia, 
// sem incluir taxas adicionais.