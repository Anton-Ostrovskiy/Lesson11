import "./style.scss";
import pear from '../../images/pear.png'

const Ideas = () => {
  return (
    <section className="ideas">
      <div className="container">
        <div className="ideas__wrapper">
          <div className="ideas__content">
            <h1 className="ideas__title">Make your ideas come true</h1>
            <p className="ideas__text">
              We use unique solutions to turn client’s needs<br/> in excellent
              products
            </p>
            <button className="ideas__btn">Book a consultation</button>
          </div>
          <div className="ideas__img">
            <img src={pear} alt="pear" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ideas;
