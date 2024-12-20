import React from "react";

function Hero() {
  return (
    <>
      <section className="Home">
        <div className="HomeContainer">
          <div className="HomeContent">

            <div className="MiddleContent">
              <div className="MiddleContentText">
                <h1>
                    <span className="FirstText">Delicious</span>
                    <span className="SecondText">Burgers</span>
                </h1>
              </div>
              <img src="/burger.png" alt="burger Image" />
            </div>


            <div className="FriesContent"></div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
