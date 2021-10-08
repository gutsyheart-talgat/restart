import './App.css';
import vec from './imgs/Vector.png';
import name from './imgs/name.png';
import watch from './imgs/watch.png';
import phone from './imgs/phone.png';
import arrow from './imgs/arrow.png';
import search from './imgs/search.png';
import shopcart from './imgs/shopping_cart.png'
function First() {
  return (
   <div className="background">
     <div className="container">
      <header className="header">
        <div className="top">
          <div className="logo">
            <img src={vec} className="vec"/>
            <img src={name} className="name"/>
          </div>
          <div className="contacts">
            <div className="time">
              <img src={watch} className="watch"/>
              <div className="hours">
                SERVICE HOURS <br/>
                Mon - Sat: 7:00 am - 6:00 pm
              </div>
            </div>
            <div className="phones">
              <img src={phone} className="phone"/>
              <div className="call">
                CALL US <br/>
                (555) Car-Repair</div>
            </div>
            <div className="makebut">
              <div className="make">Make an Appointment</div>
              <div className="arrowback"><img src={arrow} className="arrow"/></div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <p className="menu">Services</p>
            <p className="menu">Specials</p>
            <p className="menu">Estimates</p>
            <p className="menu">Reviews</p>
            <p className="menu">Shop</p>
            <p className="menu">About</p>
          </div>
          <div className="right">
            <img className="img-right" src={search} />
            <img className="img-right" src={shopcart}/>
          </div>
        </div>
      </header>
      <main className="main">
        <h1 className="txt">Top notch service is <br/> our main auto motive</h1>
        <div className="makebut">
              <div className="make">Make an Appointment</div>
              <div className="arrowback"><img src={arrow} className="arrow"/></div>
        </div>
      </main>
     </div>
   </div>
  );
}

export default First;
