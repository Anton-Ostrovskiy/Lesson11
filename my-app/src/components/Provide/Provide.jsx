import "./style.scss";

const Provide = () => {
  return (
    <section className="provide">
      <div className="container__provide">
        <div className="provide__wrap">
          <h2 className="provide__title">What we provide</h2>
            <div className="provide__list">
              <article className="provide__item">
                <h3 className="provide__item-title">Web Platform</h3>
                <ol className="provide__item-list" style={{ color: "black", listStylePosition: "inside" }}>
                  <li className="provide__item-list-item">Node.JS/Angular.JS</li>
                  <li className="provide__item-list-item">React.JS/Vue.JS</li>
                  <li className="provide__item-list-item">Spring MVC/ASP.NET</li>
                  <li className="provide__item-list-item">Nest.JS/ASP.NET Core</li>
                </ol>
              </article>
              <article className="provide__item">
                <h3 className="provide__item-title">Mobile Development</h3>
                <ol className="provide__item-list" style={{ color: "black", listStylePosition: "inside" }}>
                  <li className="provide__item-list-item">iOS</li>
                  <li className="provide__item-list-item">Android</li>
                  <li className="provide__item-list-item">ReactNative</li>
                  <li className="provide__item-list-item">Flutter</li>
                </ol>
              </article>
              <article className="provide__item">
                <h3 className="provide__item-title">Programming Languages</h3>
                <ol className="provide__item-list" style={{ color: "black", listStylePosition: "inside" }}>
                  <li className="provide__item-list-item">Swift/C#</li>
                  <li className="provide__item-list-item">Java/PHP</li>
                  <li className="provide__item-list-item">KOtlin/Objective-C</li>
                  <li className="provide__item-list-item">Typescript</li>
                </ol>
              </article>
              <article className="provide__item">
                <h3 className="provide__item-title">Additional Technologies</h3>
                <ol className="provide__item-list" style={{ color: "black", listStylePosition: "inside" }}>
                  <li className="provide__item-list-item">Rest/JavaEE</li>
                  <li className="provide__item-list-item">AR/VR</li>
                  <li className="provide__item-list-item">Spring/GraphQL</li>
                  <li className="provide__item-list-item">JPA/Hibernate</li>
                </ol>
              </article>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Provide;
