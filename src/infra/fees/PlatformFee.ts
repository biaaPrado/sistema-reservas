import { Fee } from "../../domain/interfaces/Fee";

export class PlatformFee implements Fee {
  calculate(amount: number): number {
    return amount * 0.0585;
  }
}//cria a classe PlatformFee que implementa a interface Fee, 
// onde tem um método para calcular o valor da taxa com base em um valor de entrada, 
// aplicando uma taxa fixa de 5.85%.