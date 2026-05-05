# Sistema de Reservas (TypeScript + POO + Clean Architecture)

Este projeto implementa um sistema simples de reservas utilizando TypeScript e conceitos de Programação Orientada a Objetos, aplicando separação em camadas inspirada em Clean Architecture.
---

# Arquitetura geral

O projeto foi dividido em camadas com responsabilidades bem definidas:
```
src/
 ├── application
 ├── domain
 ├── infra
 ├── main.ts
```
Essa separação garante um baixo acoplamento entre regras de negócio e infraestrutura, além da facilidade de manutenção e testes, e também a escalabilidade do sistema. 
---

# Estrutura do Projeto

## 📌 1. Domain (Regras de negócio)

Local: `src/domain`- Contém o núcleo do sistema, sem dependências externas.

### 📁 entities
* Apartment.ts
* House.ts
* SharedRoom.ts
* Booking.ts

Responsável por representar as entidades do domínio e definir regras essenciais do negócio. 
---

### 📁 interfaces
* Accommodation.ts
* AccommodationRepository.ts
* Fee.ts

Responsável por definir os contratos, garantindo desacoplamento entre domínio e infraestrutura.
---

## 📌 2. Application (Casos de uso)

Local: `src/application`- Responsável por orquestrar regras do sistema.

### 📁 services

* PricingService.ts

Responsável por calcular o preço total da reserva e aplicar as regras de taxas. 
---

### 📁 usecases

* CreateBooking.ts

Responsável por centralizar o fluxo de criação de uma reserva, validando a entrada, busca de acomodação e cálculo do preço final, para retorno do booking criado. 
---

## 📌 3. Infra (Implementações concretas)

Local: `src/infra`- Responsável por implementar dependências externas.

### 📁 fees

* PlatformFee.ts
* CleaningFee.ts
* ServiceFee.ts

Responsável por implementar regras de taxas, onde cada classe representa uma estratégia de cobrança
---

### 📁 repositories

* InMemoryAccommodationRepository.ts

Responsável por simular persistência de dados e fornecer acesso às acomodações cadastradas
---

## 📌 4. Main (Ponto de entrada)

Arquivo: `src/main.ts`

Responsável por realizar a interface com usuário (CLI), capturando os Inputs, executar o caso de uso de acordo com a entrada, e exibir o resultado. 
---

# Fluxo do sistema

1. Usuário escolhe tipo de acomodação
2. Usuário informa número de dias
3. `main.ts` chama `CreateBooking`
4. Caso de uso busca acomodação no repositório
5. PricingService aplica taxas
6. Retorna booking final
---

# ⚙️ Decisões de Modelagem

## 1. Arquitetura em camadas

Separação entre domínio, aplicação e infraestrutura para reduzir acoplamento.

## 2. Uso de interfaces

Permite substituição de implementações sem afetar o domínio.

## 3. Strategy Pattern para taxas

Cada taxa é uma classe independente e extensível.

## 4. Caso de uso centralizado

Toda regra de criação de reserva está em `CreateBooking`.

## 5. Repositório em memória

Usado para simplicidade e foco na lógica de negócio.
---

# Como rodar o projeto

## 1. Instalar dependências

```bash
npm install
```

## 2. Instalar tipos do Node

```bash
npm install --save-dev @types/node
```

## 3. Rodar com ts-node

```bash
npx ts-node src/main.ts
```

## 4. Ou compilar

```bash
npx tsc
node dist/main.js
```