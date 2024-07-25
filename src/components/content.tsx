// import jobList from "../../data/data.json";
import { FormEvent, useRef } from "react";
import projectList from "../../data/projets.json";
import Tag from "./tag";
// import Toast, { ToastType } from "./toast";
import emailjs from "@emailjs/browser";

function Content() {
  const form = useRef<HTMLFormElement>(null);
  // const toastType = useRef<ToastType>('neutral')

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          { publicKey: "IkSzDXZJMuTliphig" }
        )
        .then(
          () => {
            // toastType.current = 'success'
            form.current?.reset();
          },
          () => {
            // toastType.current = 'error'
          }
        );
    }
  };
  return (
    <>
      <section className="first-section-container">
        <div className="first-section-content-container-left">
          <div className="first-section-content__title">
            <span>Développeur</span>
            <span>Frontend</span>
          </div>
          <p>
            Salut! Moi c'est Hugo, enchanté. Ça fait 9 ans que je suis
            développeur, 6 ans en tant que frontend. <br />
            <br /> Je travailles en Javascript/Typescript, HTML et CSS/SCSS à
            travers les frameworks Vuejs, Angular et je développe présentement
            mes connaissances en React. <br />
            <br /> Je suis naturellement curieux et je cherche toujours à
            m'améliorer. Quand je ne code pas, vous me retrouverez probablement
            au Crossfit ou en train de faire du vélo de montagne!
          </p>
        </div>
        <div className="first-section-content-container-right">
          <img src="./avatar.png" alt="avatar de moi" />
          <div className="gauges-container">
            <div className="js-gauge">
              <div className="bar-filled">
                <div className="tag">JavaScript</div>
              </div>
            </div>
            <div className="ts-gauge">
              <div className="bar-filled">
                <div className="tag">TypeScript</div>
              </div>
            </div>
            <div className="vue-gauge">
              <div className="bar-filled">
                <div className="tag">Vue</div>
              </div>
            </div>
            <div className="angular-gauge">
              <div className="bar-filled">
                <div className="tag">Angular</div>
              </div>
            </div>
            <div className="css-gauge">
              <div className="bar-filled">
                <div className="tag">CSS</div>
              </div>
            </div>
            <div className="html-gauge">
              <div className="bar-filled">
                <div className="tag">HTML</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <h1>Projets</h1>
        <div className="cards-container">
          {projectList.map((project, index) => (
            <div className="card" key={index}>
              <div className="card-content">
                <div className="card-content-front frame">
                  <div
                    style={{ backgroundImage: `url(${project.captureEcran})` }}
                    className="card-content-front-screenshot"
                  ></div>
                </div>
                <div className="card-content-back frame">
                  <p>{project.description}</p>
                  <div className="badges-container">
                    {project.stack.map((tag, index) => (
                      <Tag label={tag} key={index} className="badge" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h1>Prêt à collaborer?</h1>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input placeholder="Nom" name="contact_name" />
          <input placeholder="Courriel" name="contact_email" />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Soumettre</button>
        </form>
      </section>
      {/* <Toast message="C'est un test" type={toastType.current} /> */}
    </>
  );
}

export default Content;
