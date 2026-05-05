import { AccommodationRepository } from "../../domain/interfaces/AccommodationRepository";
import { PricingService } from "../services/PricingService";
import { Booking } from "../../domain/entities/Booking";

export class CreateBooking {
  constructor(
    private repository: AccommodationRepository,
    private pricingService: PricingService
  ) {}

  execute(input: { accommodationId: string; days: number }): Booking {
    const accommodation = this.repository.findById(input.accommodationId);

    if (!accommodation) {
      throw new Error("Accommodation not found");
    }

    return new Booking(accommodation, input.days, this.pricingService);
  }
}//cria a classe CreateBooking que tem um construtor que recebe um repositório de acomodação 
// e um serviço de precificação, e um método execute que recebe um objeto de entrada com o id da acomodação
// e o número de dias, encontra a acomodação usando o repositório, e retorna uma nova reserva (Booking) 
// com a acomodação, os dias e o serviço de precificação. Se a acomodação não for encontrada, lança um erro.