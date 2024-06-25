import jobList from "../../data/data.json";
import projectList from "../../data/projets.json";
import Tag from "./tag";

function Content() {
  return (
    <>
      <section>
        <h1>Développeur frontend</h1>
        <div className="description-container">
          <div>
            <div className="logos-container">
              <img src="./javascript-logo.png" alt="javascript logo" />
              <img src="./vue-logo.png" alt="vuejs logo" />
              <img src="./angular-logo.png" alt="angular logo" />
            </div>
            <img src="./moi3.png" />
          </div>
          <q>
            Je suis développeur web depuis maintenant 9 ans. Mon expertise est
            répartie dans différentes technologies, mais surtout orientée
            frontend. J'ai travaillé beaucoup avec évidemment HTML, SCSS,
            Javascript et je continue d'améliorer mes connaissances en
            Typescript à travers le framework Vuejs. Un peu d'Angular à travers
            tout ça et maintenant, j'apprends les bases de React. <br /> <br />{" "}
            Je prône la communication et je fais tout pour livrer des projets de
            qualité dont je suis fier!
          </q>
        </div>
      </section>
      <section className="section-profExperiences">
        <h2>Expériences professionnelles</h2>
        <div className="section-profExperiences-container">
          {jobList.map((job: any) => (
            <div key={job.nom} className="card">
              <div className="card-content">
                <div className="card-content-front frame">
                  <img src={job.logo} className="card-content-front-logo" />
                </div>
                <div className="card-content-back frame">
                  <div className="card-back-header">
                    <span>{job.dateDebut}</span>
                    <span>{job.dateFin}</span>
                  </div>
                  <h4>
                    {job.nom} - {job.role}
                  </h4>
                  <div>
                    <ul>
                      {job.responsabilites.map((responsabilite: any) => (
                        <li key={responsabilite}>{responsabilite}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2>Projets</h2>
        <div className="section-projects-container">
          {projectList.map((project: any) => (
            <div key={project.nom} className="project-container">
              <h4>
                {project.nom} - {project.compagnie}
              </h4>
              {project.captureEcran !== "" ? (
                <img
                  className="project-screenshot"
                  src={project.captureEcran}
                  alt={"capture d'écran du projet " + project.nom}
                />
              ) : (
                ""
              )}
              <div>
                {project.stack.map((tag: any) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
              <p>{project.description}</p>
              {project.lien !== "" ? (
                <a href={project.lien} target="_blank">Voir l'application</a>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </section>

      {/* <section>
        <h3>Contactez-moi</h3>
      </section> */}
    </>
  );
}

export default Content;
