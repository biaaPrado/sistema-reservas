import { Fee } from "../../domain/interfaces/Fee";

export class CleaningFee implements Fee {
  calculate(): number {
    return 80;
  }
}//cria a classe CleaningFee que implementa a interface Fee, 
// onde tem um método para calcular o valor da taxa de limpeza, 
// aplicando uma taxa fixa de 80.