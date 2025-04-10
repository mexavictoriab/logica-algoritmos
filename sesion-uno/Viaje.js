class Viaje {
    constructor(destino, lugar, origen, duracion, transporte, fecha) {
        this.destino = destino;
        this.lugar = lugar;
        this.origen = origen;
        this.duracion = duracion;
        this.transporte = transporte;
        this.fecha = fecha;
    }
    calcularCosto() {
        let precio = 500
        if (this.trasporte === "camion" && this.destino === "internacional") {
            return precio = precio + this.duracion * 55
        } else if (this.transporte === "avion" && this.destino === "internacional") {
            return precio = precio + this.duracion * 65
        } else if (this.transporte === "avion" && this.destino === "nacional") {
            return precio = precio + this.duracion * 45
        } else {
            return precio = precio + this.duracion * 35
        }
    }

    capitalizar(texto) {
        return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
    }

    mostrarItinerario() {
        return `
    Itinerario
Viaje Nacional o Internacional: ${this.capitalizar(this.destino)}
Origen: ${this.capitalizar(this.origen)}
Destino: ${this.capitalizar(this.lugar)}
Duración: ${this.duracion} min
Transporte: ${this.transporte}
Fecha: ${this.fecha}
Costo estimado: $${this.calcularCosto()} MXN

`
    }
}

const viaje1 = new Viaje("nacional", "Guadalajara", "CDMX", 60, "camion", "25-08-2025")
console.log(viaje1.mostrarItinerario());


const viaje2 = new Viaje("internacional", "Texas", "Saltillo", 120, "camion", "30-09-2025")
console.log(viaje2.mostrarItinerario());


const viaje3 = new Viaje("nacional", "Monterrey", "CDMX", 60, "avion", "05-08-2025")
console.log(viaje3.mostrarItinerario());


const viaje4 = new Viaje("internacional", "Tokio", "CDMX", 180, "avion", "10-09-2025")
console.log(viaje4.mostrarItinerario());