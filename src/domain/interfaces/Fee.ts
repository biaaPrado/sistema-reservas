export interface Fee {
  calculate(amount: number): number;
} //cria a interface para taxas, onde tem um método para calcular o valor da taxa com base em um valor de entrada.