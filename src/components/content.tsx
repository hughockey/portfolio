import jobList from "../../data/data.json";
import projectList from "../../data/projets.json";

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
        <h3>Expériences professionnelles</h3>
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
        <h3>Projets</h3>
        {projectList.map((project: any) => (
          <div key={project.nom}>
            <h4>
              {project.nom} - {project.compagnie}
            </h4>
            {project.captureEcran === "" ? (
              <a href={project.lien}>Voir l'application</a>
            ) : (
              <img
                height="350px"
                src={project.captureEcran}
                alt={"capture d'écran du projet " + project.nom}
              />
            )}
            <p>{project.description}</p>
          </div>
        ))}

        <h4></h4>

        <p></p>
      </section>

      {/* <section>
        <h3>Contactez-moi</h3>
      </section> */}
    </>
  );
}

export default Content;
