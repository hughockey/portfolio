import data from "../../data/data.json";

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
          {data.map((job: any) => (
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
        <div>Panier valérienois - Conception webmedia</div>
        https://municipalite.saint-valerien.qc.ca/app/paniervalerinois/
        <p>
          Marché public sur une application web, permettant aux agriculteurs de
          mettre leurs produits sur le portail, mais aussi aux gens de les
          commander. Application dévelopée avec Vuejs, bootstrap-vue, vuex et
          axios.
        </p>
        <div>Octo - Observatoire global du St-Laurent</div>
        <p>
          Outil de visualisation de données développé avec Angular sur lequel il
          est possible d'ajouter des couches sur une carte pour aider à cette
          même visualisation. Durant le développement, plusieurs outils ont été
          utilisé comme Angular 8 à 12, RxJS et OpenLayers.
        </p>
        <div>Instachat - projet personnel</div>
        <p>
          Projet collaboratif avec un spécialiste backend qui consistait à créer
          un dashboard par restaurant pour envoyer et recevoir des textos et
          pouvoir regarder l'historique des message. Pour ce faire, il a fallu
          utiliser les websocket à travers la librarie Socket.io. Utilisation de
          Vue3, Primevue, Pinia et Axios. Aucun lien disponible vu que le projet
          est malheureusement tombé à l'eau.
        </p>
        <div>Menu - Alfred Technologies</div>
        <p>
          Migration technologique de l'application. Le stack avant était Vue2
          (Nuxt) avec option API et vuex. J'ai travaillé à transformer le tout
          avec Vue3, sans Nuxt, composition API ainsi que Pinia et Typescript.
        </p>
        <div>Inventaire - Alfred Technologies</div>
        <p>
          Application de gestion d'inventaire de vins et spiritueux qui se
          trouvent dans une cave à vin d'un restaurant. Trace l'historique des
          actions sur l'inventaire et permet de réquisitionner (déplacer) des
          bouteilles vers d'autres emplacements de stockage.
        </p>
      </section>

      {/* <section>
        <h3>Contactez-moi</h3>
      </section> */}
    </>
  );
}

export default Content;
