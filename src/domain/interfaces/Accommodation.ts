export interface Accommodation {
  id: string;
  calculatePrice(days: number): number;
} //cria a interface para acomodação, onde tem um id e um método para calcular o preço
// de acordo com os dias de estadia