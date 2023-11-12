import laptop from "../../images/laptop.jpg";
import "./style.scss";

const AboutUs = () => {
  return (
    <section id="about" className="about">
      <div className="container__about">
        <div className="about__wrapper">
          <div className="about__header-content">
            <h3 className="about__title">About Us</h3>
            <p className="about__header-text">
              Our focus is on providing a crypto wallet that enables users to
              seamlessly send, receive, and manage their crypto assets while
              accessing transaction history.
            </p>
          </div>
          <div className="about__bottom-content">
            <div className="about__wrap-img">
              <img className="about__img" src={laptop} alt="laptop" />
            </div>
            <div className="about__description">
              <p className="about__bottom-text">
                Pearwood company a dynamic venture established in early 2011,
                proudly stands as a prominent player in the realm of mobile and
                web app development. With an impressive track record of
                successfully delivering over 300 projects, we have garnered
                expertise and experience that sets us apart in the industry.
              </p>
              <p className="about__bottom-text">
                Our unwavering commitment revolves around providing our esteemed
                partners with nothing less than service par excellence. Building
                upon our past achievements, we are steadfast in our dedication
                to repeating these remarkable feats time and again.
              </p>
              <p className="about__text">
                Unlock Your Potential: Book a Consultation Now!
              </p>
              <button className="about__btn">Consultation</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
