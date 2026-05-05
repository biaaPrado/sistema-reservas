import { Fee } from "../../domain/interfaces/Fee";

export class ServiceFee implements Fee {
  calculate(amount: number): number {
    return amount * 0.1;
  }
}//cria a classe ServiceFee que implementa a interface Fee,
// onde tem um método para calcular o valor da taxa de serviço com base em um valor de entrada, 
// aplicando uma taxa fixa de 10%.