import * as readline from "readline";
import { InMemoryAccommodationRepository } from "./infra/repositories/InMemoryAccommodationRepository";
import { PricingService } from "./application/services/PricingService";
import { PlatformFee } from "./infra/fees/PlatformFee";
import { CleaningFee } from "./infra/fees/CleaningFee";
import { ServiceFee } from "./infra/fees/ServiceFee";
import { CreateBooking } from "./application/usecases/CreateBooking";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const repository = new InMemoryAccommodationRepository();

const pricingService = new PricingService([
  new PlatformFee(),
  new CleaningFee(),
  new ServiceFee(),
]);

const createBooking = new CreateBooking(repository, pricingService);

console.log("=== SISTEMA DE RESERVAS ===");
console.log("1 - House");
console.log("2 - Apartment");
console.log("3 - Shared Room");

// TIPAGEM CORRIGIDA AQUI
rl.question("Escolha o tipo de acomodação (1, 2 ou 3): ", (accId: string) => {
  rl.question("Quantos dias deseja reservar? ", (daysInput: string) => {

    const days = Number(daysInput);

    if (isNaN(days) || days <= 0) {
      console.log("Erro: número de dias inválido.");
      rl.close();
      return;
    }

    try {
      const booking = createBooking.execute({
        accommodationId: accId,
        days: days,
      });

      console.log("\n=== RESULTADO ===");
      console.log("Acomodação:", booking.accommodation.id);
      console.log("Dias:", booking.days);
      console.log("Preço base:", booking.basePrice);
      console.log("Preço total:", booking.totalPrice);

    } catch (error) {
      console.log("Erro:", (error as Error).message);
    }

    rl.close();
  });
});

//cria a interface de linha de comando para o sistema de reservas, 
// onde o usuário pode escolher o tipo de acomodação e o número de dias, 
// e o sistema calcula e exibe o preço base e total da reserva.