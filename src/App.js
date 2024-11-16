import logo from "./logo.svg";
import "./App.css";
import "./styles/canvas.css";
import "./styles/card.css";
import "./styles/present.css";
import { useEffect } from "react";
import init from "./utils/present";
import drawCanva from "./utils/canvas";

function App() {
  useEffect(() => {
    drawCanva();
    init();
  }, []);
  return (
    <>
      <div className="parent">
        <canvas id="canvas"></canvas>
        <section className="above-fold">
          <div className="wrap-present">
            <div className="present-box" id="present">
              <div className="present">
                <div className="img-wrap" id="present-image"></div>
              </div>
              <div className="side front"></div>
              <div className="side back"></div>
              <div className="side left"></div>
              <div className="side right"></div>
              <div className="side top">
                <span className="to">
                  <span className="name" id="nametag">
                    {" "}
                  </span>
                </span>
              </div>
              <div className="side bottom"></div>
            </div>
          </div>
          <p className="info-text">Click to Open</p>
        </section>

        <div id="card">
          <h4 className="title-card">💘little coder💘</h4>

          <img src="hot-girl.png" className="honey" />

          <h4 className="content-card">
            Happy Birthday Make A Wish. Dear brother, hope you receive
            everything you wish for this year. You deserve the best! Thanks for
            being such a great brother.💘
          </h4>
        </div>
      </div>
    </>
  );
}

export default App;
