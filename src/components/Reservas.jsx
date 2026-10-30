import { useState } from "react";

const habitaciones = [
  {
    id: 1,
    nombre: "Habitación Clásica",
    descripcion: "Un espacio cómodo y acogedor para descansar.",
    precio: 45000,
    capacidad: "2 personas"
  },
  {
    id: 2,
    nombre: "Habitación Superior",
    descripcion: "Más espacio y comodidad para disfrutar tu estadía.",
    precio: 60000,
    capacidad: "2 personas"
  },
  {
    id: 3,
    nombre: "Habitación Deluxe",
    descripcion: "Un ambiente amplio con detalles especiales.",
    precio: 80000,
    capacidad: "2 personas"
  },
  {
    id: 4,
    nombre: "Habitación Familiar",
    descripcion: "Ideal para compartir el viaje con toda la familia.",
    precio: 100000,
    capacidad: "4 personas"
  },
];

function Reservas() {
  const [habitacionElegida, setHabitacionElegida] = useState(null);
  const [fechaEntrada, setFechaEntrada] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");

  const fechaMinima = new Date().toLocaleDateString("en-CA");

  function calcularNoches() {
    if (!fechaEntrada || !fechaSalida) {
      return 0;
    }

    const entrada = new Date(fechaEntrada + "T00:00:00");
    const salida = new Date(fechaSalida + "T00:00:00");

    const diferencia = salida - entrada;

    return diferencia / (1000 * 60 * 60 * 24);
  }

  function confirmarReserva() {
    if (habitacionElegida === null) {
      prompt("Por favor, seleccioná una habitación.");
      return;
    }

    if (!fechaEntrada || !fechaSalida) {
      alert("Por favor, seleccioná las fechas de entrada y salida.");
      return;
    }

    if (fechaSalida <= fechaEntrada) {
      alert("La fecha de salida debe ser posterior a la de entrada.");
      return;
    }

    const habitacion = habitaciones.find(
      (item) => item.id === Number(habitacionElegida)
    );

    const noches = calcularNoches();
    const total = habitacion.precio * noches;

    alert(
      "¡Reserva confirmada!\n\n" +
      "Habitación: " + habitacion.nombre + "\n" +
      "Entrada: " + fechaEntrada + "\n" +
      "Salida: " + fechaSalida + "\n" +
      "Noches: " + noches + "\n" +
      "Total estimado: $" + total.toLocaleString("es-AR")
    );
  }

  return (
    <main className="pagina-interior">
      <section className="encabezado-pagina">
        <p className="subtitulo">PLANIFICÁ TU ESTADÍA</p>
        <h1>Nuestras habitaciones</h1>

        <p>
          Elegí habitación y las fechas para planificar
          tu visita.
        </p>
      </section>

      <section className="habitaciones">
        {habitaciones.map((habitacion) => (
          <article
            className={
              Number(habitacionElegida) === habitacion.id
                ? "tarjeta-habitacion seleccionada"
                : "tarjeta-habitacion"
            }
            key={habitacion.id}
          >
            <div className={"foto-habitacion foto-" + habitacion.id}>
              <span>{habitacion.tipo}</span>
            </div>

            <div className="detalle-habitacion">
              <h2>{habitacion.nombre}</h2>

              <p>{habitacion.descripcion}</p>

              <p className="capacidad">
                Capacidad: {habitacion.capacidad}
              </p>

              <p className="precio">
                ${habitacion.precio.toLocaleString("es-AR")}
                <span> / noche</span>
              </p>

              <button
                className={
                  Number(habitacionElegida) === habitacion.id
                    ? "boton-habitacion elegido"
                    : "boton-habitacion"
                }
                onClick={() => setHabitacionElegida(habitacion.id)}
              >
                {Number(habitacionElegida) === habitacion.id
                  ? "Habitación seleccionada"
                  : "Seleccionar habitación"}
              </button>
            </div>
          </article>
        ))}
      </section>

      <section className="formulario-reserva">
        <div className="formulario-titulo">
          <p className="subtitulo">TU PRÓXIMA ESTADÍA</p>
          <h2>Completá tu reserva</h2>
          <p>Seleccioná las fechas para consultar el precio estimado.</p>
        </div>

        <div className="campos-fecha">
          <div className="campo">
            <label htmlFor="fechaEntrada">Fecha de entrada</label>

            <input
              type="date"
              id="fechaEntrada"
              min={fechaMinima}
              value={fechaEntrada}
              onChange={(e) => {
                setFechaEntrada(e.target.value);

                if (fechaSalida && e.target.value >= fechaSalida) {
                  setFechaSalida("");
                }
              }}
            />
          </div>

          <div className="campo">
            <label htmlFor="fechaSalida">Fecha de salida</label>

            <input
              type="date"
              id="fechaSalida"
              min={fechaEntrada || fechaMinima}
              value={fechaSalida}
              onChange={(e) => setFechaSalida(e.target.value)}
            />
          </div>
        </div>

        {habitacionElegida !== null &&
          fechaEntrada &&
          fechaSalida &&
          fechaSalida > fechaEntrada && (
            <div className="resumen-reserva">
              <p>
                Habitación:{" "}
                {habitaciones.find(
                  (item) => item.id === Number(habitacionElegida)
                ).nombre}
              </p>

              <p>Noches: {calcularNoches()}</p>

              <p>
                Total estimado: $
                {(
                  habitaciones.find(
                    (item) => item.id === Number(habitacionElegida)
                  ).precio * calcularNoches()
                ).toLocaleString("es-AR")}
              </p>
            </div>
          )}

        <button
          className="boton-principal boton-confirmar"
          onClick={confirmarReserva}
        >
          Confirmar reserva
        </button>

        <p className="nota-reserva">
          Los precios son orientativos. La confirmación se realiza
          a modo de demostración del sistema.
        </p>
      </section>
    </main>
  );
}

export default Reservas;