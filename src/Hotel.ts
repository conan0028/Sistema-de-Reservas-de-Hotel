import { Reserva } from './Reserva';

export class Hotel {
    private reservas: Reserva[];

    constructor() {
        this.reservas = [];
    }

    registrarReserva(reserva: Reserva): void {
        const existeReserva = this.reservas.find(r => r.numeroQuarto === reserva.numeroQuarto);
        if (existeReserva) {
            console.error(`O quarto ${reserva.numeroQuarto} já está reservado.`);
        } else {
            this.reservas.push(reserva);
            console.log(`Reserva registrada para o quarto ${reserva.numeroQuarto}.`);
        }
    }

    cancelarReserva(numeroQuarto: number): void {
        const index = this.reservas.findIndex(r => r.numeroQuarto === numeroQuarto);
        if (index > -1) {
            this.reservas.splice(index, 1);
            console.log(`Reserva do quarto ${numeroQuarto} cancelada.`);
        } else {
            console.error(`Nenhuma reserva encontrada para o quarto ${numeroQuarto}.`);
        }
    }

    consultarStatusQuarto(numeroQuarto: number): string {
        const existeReserva = this.reservas.find(r => r.numeroQuarto === numeroQuarto);
        return existeReserva ? "Reservado" : "Disponível";
    }
}

