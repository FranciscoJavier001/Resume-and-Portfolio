import "./styles.css";
export const Body = () => {
  return (
    <div>
      <script
        src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"
        crossOrigin="anonymous"></script>
      <link
        href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700"
        rel="stylesheet"
        type="text/css"
      />

      <div className="container-fluid p-0">
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0 text-center">
              Francisco Javier
              <span className="text-primary">Martinez Duran</span>
            </h1>
            <div className="subheading mb-5 text-center ">
              Aguascalientes, Mexico · C.P. 20187 · (449) 111-1111 ·
              <a href="mailto:name@email.com">user.streaming.001@gmail.com</a>
            </div>
            <p className="lead mb-5 text-center">
              Desarrollador Web en proyectos privados, tengo experiencia en
              desarrollo para paginas de escritorio y movil, con conocimiento
              del STACK MERN (Mongo, Express, React & Node). Con enfoque hacia
              el pensamiento colaborativo, hacia la implementacion de una
              propuesta de alto valor
            </p>
            <div className="social-icons text-center">
              <a
                className="social-icon"
                rel="noreferrer"
                href="https://youtu.be/2ev6A6sqxWM"
                target="_blank">
                <i className="fab fab fa-youtube"></i>
              </a>
              <a
                className="social-icon"
                rel="noreferrer"
                href="https://www.linkedin.com/in/francisco-javier-martinez-duran-62a003a8/"
                target="_blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="social-icon"
                rel="noreferrer"
                href="https://github.com/FranciscoJavier001"
                target="_blank">
                <i className="fab fa-github"></i>
              </a>
              <a
                className="social-icon"
                rel="noreferrer"
                href="https://www.facebook.com/UserStreaming001/"
                target="_blank">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </section>
        <hr className="m-0" />

        <section className="resume-section" id="experience">
          <div className="resume-section-content">
            <h2 className="mb-5">Experiencia</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Web Developer</h3>
                <div className="subheading mb-3">Junior Freelance</div>
                <p>
                  Creacion de Paginas Web usando HTML, CSS, JavaScript, Mongo y
                  Node, buscando nuevas formas de optiizar los recursos
                  generando diseños responsivos para la adaptacion en diversos
                  dispositivos, usando diversas extensiones de VS Code,
                  utilizando GitHub para el control de versiones y Heroku para
                  el despliegue del Backend, realizando pruebas en el codigo
                  para confirmar la viabilidad del mismo.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">Junio 2020 - Presente</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Web Developer</h3>
                <div className="subheading mb-3">Codellege - Softtek</div>
                <p>
                  Curso intensivo en el desarrollo web impartido en Softtek sede
                  Aguascalientes, donde conocimos lo basico de FrontEnd y
                  desarrollo de logica para la programacion.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">Enero 2020 - Junio 2020</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />

        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Educacion</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Universidad del Valle de Mexico</h3>
                <div className="subheading mb-3">Carrera Trunca</div>
                <div>Ingenieria Industrial y de Sistemas</div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">Agosto 2014 - Mayo 2016</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">Softtek</h3>
                <div className="subheading mb-3">Codellege</div>
                <div>Curso de Desarrollo Web</div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">Enero 2020 - Junio 2020</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />

        <section className="resume-section" id="skills">
          <div className="resume-section-content">
            <h2 className="mb-5">Habilidades</h2>
            <div className="subheading mb-3">
              Lenguajes de Programacion y Herramientas
            </div>
            <ul className="list-inline dev-icons">
              <li className="list-inline-item">
                <i className="fab fa-react"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-html5"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-css3-alt"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-js-square"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-bootstrap"></i>
              </li>
              <li className="list-inline-item">
                <i className="fas fa-database"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-node-js"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-sass"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-npm"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-github"></i>
              </li>
            </ul>
            <div className="subheading mb-3">Entorno de Trabajo</div>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Diseño Responsivo
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Testing
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Trabajo en Equipo
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Metodologia Agil SCRUM
              </li>
            </ul>
          </div>
        </section>
        <hr className="m-0" />

        <section className="resume-section" id="interests">
          <div className="resume-section-content">
            <h2 className="mb-5">Intereses</h2>
            <p>
              Aparte de la pasion por la Informatica , disfruto pasar mi tiempo
              afuera leyendo, me encantan los helados, y caminar, el deporte es
              uno de mis gustos mas arraigados, siempre intento acudir en lo
              posible, amo estar con la gente que amo, y me gusta siempre estar
              abierto a nuevas posibilidades.
            </p>
            <p className="mb-0">
              Cuando estoy en casa, disfruto ver peliculas, estudiar idiomas, o
              pasar tiempo con mi familia y amigos, disfruto estar buscando
              nuevas tecnologias y metodologias para hacer las cosas y optimizar
              lo que esta echo al igual que mejorar lo que existe.
            </p>
          </div>
        </section>
        <hr className="m-0" />

        <section className="resume-section" id="awards">
          <div className="resume-section-content">
            <h2 className="mb-5">Certificaciones</h2>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li">
                  <i className="fas fa-certificate text-warning"></i>
                </span>
                The Ultimate MySQL Bootcamp - Colt Steele - Udemy
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-certificate text-warning"></i>
                </span>
                Master en CSS - Victor Robles - Udemy
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-certificate text-warning"></i>
                </span>
                Master en JavaScript - Victor Robles - Udemy
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-certificate text-warning"></i>
                </span>
                JavaScript Moderno - Fernando Herrera - Udemy
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-certificate text-warning"></i>
                </span>
                React - Fernando Herrera - Udemy
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-certificate text-warning"></i>
                </span>
                Curso de Programacion Orientada a Objetos con PHP - Bextlan -
                YouTube
              </li>
            </ul>
          </div>
        </section>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
};
