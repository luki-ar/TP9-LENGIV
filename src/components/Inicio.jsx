import { Link } from "react-router-dom";

function Inicio() {
  return (
    <main>
      <section className="portada">
        <div className="portada-contenido">
          <p className="subtitulo">UN LUGAR PARA DECSONECTAR</p>

          <h1>Date el gusto de sentir un descanso diferente.</h1>

          <p className="portada-texto">
            Reserva nuestras habitaciones y disfrutá de un espacio pensado para descansar y compartir momentos y disfrutar de la experiencia
          </p>

          <Link to="/reservas" className="boton-principal">
            Habitaciones
          </Link>
        </div>
      </section>

      <section className="bienvenida">

        <h2>Un espacio para disfrutar a tu manera</h2>

        <p>
          Los Álamos crea un ambiente pensado para descansar y compartir
          momentos y disfrutar de la experiencia.
        </p>

        <Link to="/acerca" className="enlace">
          Conocé nuestro hotel →
        </Link>
      </section>

      <section className="beneficios">
        <article>
          <span>01</span>
          <h3>Comodidad</h3>
          <p>Habitaciones preparadas para que te sientas como en casa.</p>
        </article>

        <article>
          <span>02</span>
          <h3>Tranquilidad</h3>
          <p>Un ambiente ideal para desconectar de la rutina.</p>
        </article>

        <article>
          <span>03</span>
          <h3>Atención</h3>
          <p>Nos importa que disfrutes de principio a fin.</p>
        </article>
      </section>
    </main>
  );
}

export default Inicio;