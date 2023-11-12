import "./style.scss";
import pear from '../../images/pear.png'

const Ideas = () => {
  return (
    <section  id="ideas" className="ideas">
      <div className="container-ideas">
        <div className="ideas__wrapper">
          <div className="ideas__content">
            <h1 className="ideas__title">Make your ideas come true</h1>
            <p className="ideas__text">
              We use unique solutions to turn client’s needs in excellent
              products
            </p>
            <button className="ideas__btn">Book a consultation</button>
          </div>
          <div className="ideas__img">
            <img className="img" src={pear} alt="pear" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ideas;
