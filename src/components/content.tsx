import jobList from "../../data/data.json";
import projectList from "../../data/projets.json";
import Tag from "./tag";

function Content() {
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
          <div className="gauge-container">
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
    </>
  );
}

export default Content;
