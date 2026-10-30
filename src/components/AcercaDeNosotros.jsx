import { Link } from "react-router-dom";

function AcercaDeNosotros() {
  return (
    <main className="pagina-interior">
      <section className="encabezado-pagina">
        <p className="subtitulo">ACERCA DE NUESTRO HOTEL</p>
        <h1>Acerca de nosotros</h1>
      </section>

      <section className="acerca-contenido">
        <div className="acerca-imagen"></div>

        <div className="acerca-texto">
          <p className="subtitulo">HOTEL LOS ÁLAMOS</p>

          <h2>Los pequeños detalles hacen la diferencia.</h2>

          <p>
            En Hotel Los Álamos creemos que una buena estadía
            empieza por sentirse cómodo y bien recibido.
            El objetivo es contar con un espacio agradable,
            con habitaciones comodas distintas opciones para
            quienes buscan descansar, viajar o simplemente darse un break.
            Trabajamos para que cada uno de ustedes encuentre la habitacion adecuada y tenga una experiencia buena.
          </p>

          <Link to="/reservas" className="boton-principal">
            Elegir habitación
          </Link>
        </div>
      </section>
    </main>
  );
}

export default AcercaDeNosotros;