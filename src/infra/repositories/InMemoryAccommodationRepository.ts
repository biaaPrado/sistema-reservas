import { AccommodationRepository } from "../../domain/interfaces/AccommodationRepository";
import { Accommodation } from "../../domain/interfaces/Accommodation";
import { House } from "../../domain/entities/House";
import { Apartment } from "../../domain/entities/Apartment";
import { SharedRoom } from "../../domain/entities/SharedRoom";

export class InMemoryAccommodationRepository
  implements AccommodationRepository
{
  private accommodations: Accommodation[] = [
    new House("1", 200),
    new Apartment("2", 150),
    new SharedRoom("3", 80),
  ];

  findById(id: string): Accommodation | undefined {
    return this.accommodations.find((a) => a.id === id);
  }
}//cria a classe InMemoryAccommodationRepository que implementa a interface AccommodationRepository,
// onde tem um array de acomodações pré-definidas (House, Apartment e SharedRoom)
// e um método findById para encontrar uma acomodação por id.