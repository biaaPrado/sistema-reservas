import { Accommodation } from "./Accommodation";

export interface AccommodationRepository {
  findById(id: string): Accommodation | undefined;
} //cria a interface para o repositório de acomodação, 
// onde tem um método para encontrar uma acomodação por id, 
// retornando a acomodação ou undefined se não for encontrada.