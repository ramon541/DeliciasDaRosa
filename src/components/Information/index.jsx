import styles from "./styles.module.css";

export default function Information() {
  return (
    <>
      <h2>Nos faça uma visita...</h2>
      <div className={styles.informationContainer}>
        <iframe
          className={styles.mapContainer}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.90831704727!2d-47.9382187883505!3d-19.759049532932877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bad03bc659ef05%3A0xa9e5d0f31d1d1917!2sAv.%20Guilherme%20Ferreira%2C%201050%20-%20S%C3%A3o%20Benedito%2C%20Uberaba%20-%20MG%2C%2038022-200!5e0!3m2!1spt-BR!2sbr!4v1701287203326!5m2!1spt-BR!2sbr"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div>
          <h1>
            <i className="fa-solid fa-location-dot fa-xs"></i> Local
          </h1>
          <h2>Uberaba - MG</h2>
          <br />
          <h4>Av. Guilherme Ferreira, n° 1050</h4>
          <h4>São Benedito</h4>
          <h5>38022-200</h5>
        </div>
        <div>
          <h1>
            <i className="fa-solid fa-clock fa-2xs"></i> Atendimento
          </h1>
          <h4>De segunda-feira a sexta-feira:</h4>
          <h5>8:00h às 18:00h</h5>
          <br />
          <h4>Sábado, Domingo e feriados:</h4>
          <h5>8:00h às 13:00h</h5>
        </div>
      </div>
    </>
  );
}
