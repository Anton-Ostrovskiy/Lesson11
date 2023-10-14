import "./style.scss";
import games from '../../images/games.png'
import phone from '../../images/Iphone.png'


const Projects = () => {
  return (
    <section className="projects">
      <div className="container-projects">
        <div className="projects__wrap">
          <h1 className="projects__title">
            Take a look at some of the apps we’ve developed since 2011
          </h1>
          <div className="projects__content">
            <div className="projects__studio">
              <div className="projects__img">
                <img src={games} alt="games" />
              </div>
              <div className="projects__description">
                <h3 className="projects__description-title">Gamedev studio</h3>
                <p className="projects__description-text">
                  Rapidly growing mobile GayDev studio, driven by our passion
                  for creating exceptional gaming experiences.
                </p>
                <button className="projects__description-btn" >View Case</button>
              </div>
            </div>
            <div className="projects__studio">
              <div className="projects__img">
                <img src={games} alt="games" />
              </div>
              <div className="projects__description">
                <h3 className="projects__description-title">Gamedev studio</h3>
                <p className="projects__description-text">
                  Rapidly growing mobile GayDev studio, driven by our passion
                  for creating exceptional gaming experiences.
                </p>
                <button className="projects__description-btn">View Case</button>
              </div>
            </div>
            <div className="projects__wallet">
              <div >
                <img src={phone} alt="" />
              </div>
              <div className="projects__description">
                <h3 className="projects__description-title">Crypto wallet</h3>
                <p className="projects__description-text">
                  A crypto wallet allows users to send, receive and manage their
                  crypto assets, as well as view transaction history.
                </p>
                <button className="projects__description-btn">View Case</button>
              </div>
            </div>
          </div>
          <div className="projects__content-bottom">
            <h3 className="projects__title-bottom">Developing custom software for your business idea</h3>
            <button className="projects__btn-bottom">Explore more works</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
