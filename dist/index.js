"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Reserva_1 = require("./Reserva");
const Hotel_1 = require("./Hotel");
const hotel = new Hotel_1.Hotel();
// Função para registrar reservas
function registrarReservas() {
    const reserva1 = new Reserva_1.Reserva(101, 'Alice', new Date('2024-11-20'), new Date('2024-11-25'));
    const reserva2 = new Reserva_1.Reserva(102, 'Bob', new Date('2024-11-21'), new Date('2024-11-26'));
    hotel.registrarReserva(reserva1);
    hotel.registrarReserva(reserva2);
}
// Função para cancelar uma reserva
function cancelarReserva() {
    console.log('Cancelando reserva do quarto 101...');
    hotel.cancelarReserva(101);
}
// Função para consultar o status de um quarto
function consultarStatusQuarto() {
    console.log('Consultando status do quarto 101...');
    console.log(`Status do quarto 101: ${hotel.consultarStatusQuarto(101)}`);
    console.log('Consultando status do quarto 102...');
    console.log(`Status do quarto 102: ${hotel.consultarStatusQuarto(102)}`);
}
// Executar os testes
registrarReservas();
cancelarReserva();
consultarStatusQuarto();
