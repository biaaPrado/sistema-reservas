import { Fee } from "../../domain/interfaces/Fee";

export class PricingService {
  constructor(private fees: Fee[]) {}

  applyFees(basePrice: number): number {
    let total = basePrice;

    for (const fee of this.fees) {
      total += fee.calculate(basePrice);
    }

    return total;
  }
}//cria a classe PricingService que tem um construtor que recebe um array de taxas (fees) 
// e um método applyFees que calcula o preço total aplicando todas as taxas ao preço base.