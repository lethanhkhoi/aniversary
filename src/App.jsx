import logo from "./logo.svg";
import "./App.css";
import "./styles/style.css";
import { useEffect } from "react";
import createHearts from "./utils/script";
import React from "react";
import anhiu from "./assets/anhiu.png";
import anhiu2 from "./assets/2.jpg";
import anhiu3 from "./assets/3.jpg";
import anhiu4 from "./assets/4.jpg";
function App() {
  // Move "No" button function
  const moveButton = (buttonId) => {
    let button = document.getElementById(buttonId);
    console.log(button, buttonId);
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);

    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
  };

  // Navigation functions
  const goToStep2 = () => {
    document.getElementById("step1").classList.remove("active");
    document.getElementById("step2").classList.add("active");
    triggerConfetti();
  };

  const goToStep3 = () => {
    document.getElementById("step2").classList.remove("active");
    document.getElementById("step3").classList.add("active");
    triggerConfetti();
  };

  const finalStep = () => {
    document.getElementById("step3").classList.remove("active");
    document.querySelector(".final-message").style.display = "block";
    document.querySelector(".whatsapp-btn").style.display = "inline-block";
    triggerConfetti();

    // Additional confetti for the final celebration
    setTimeout(() => triggerConfetti(), 500);
    setTimeout(() => triggerConfetti(), 1000);
    setTimeout(() => triggerConfetti(), 1500);
  };

  const triggerConfetti = () => {};

  useEffect(() => {
    createHearts();
    setInterval(createHearts, 300);
  }, []);
  return (
    <>
      <div className="hearts"></div>
      <div className="container">
        <div className="step active" id="step1">
          <img
            src={anhiu}
            alt="Ck iu"
            className="bear-img"
          />
          <h1>
            Em bé có đồng ý đi cùng anh đến quãng đường đời này khommm? 💝
          </h1>
          <div className="buttons">
            <button type="button" className="btn btn-yes" onClick={goToStep2}>
              Dạ cóaaaaaa
            </button>
            <button
              className="btn btn-no"
              id="btn-no1"
              type="button"
              onMouseOver={() => moveButton("btn-no1")}
              onClick={() => moveButton("btn-no1")}
            >
              Hongggggg
            </button>
          </div>
        </div>

        <div className="step" id="step2">
          <img src={anhiu2} alt="Ck iu nhất" className="bear-img" />
          <h1>Em bé đồng ý cưới anh làm chòng của em bé nhaaaaa? 💕</h1>
          <div className="buttons">
            <button type="button" className="btn btn-yes" onClick={goToStep3}>
              Dạaaaaaaaa
            </button>
            <button
              type="button"
              className="btn btn-no"
              id="btn-no2"
              onMouseOver={() => moveButton("btn-no2")}
              onClick={() => moveButton("btn-no2")}
            >
              Để bé suy nghĩ đã
            </button>
          </div>
        </div>

        <div className="step" id="step3">
          <img src={anhiu3} alt="Ck iu vcl" className="bear-img" />
          <h1>
            Anh yêu em bé nhiều lắm tụi mình sẽ đi cùng nhau đến cuối cùng
            nheee, hứa nhé vợ ❤️
          </h1>
          <div className="buttons">
            <button className="btn btn-yes" onClick={finalStep} type="button">
              Dạ vâng anh yêuuuuu
            </button>
          </div>
        </div>

        <div className="final-message">
          <img src={anhiu4} alt="Ck iu nhiều vl" className="bear-img" />
          <p>
            Chòng biết là em bé có nhiều lần tổn thường vì tính vô ý của anh lắm
            nhưng e bé vẫn ở lại cùng anh anh yêu bé nhiều nhiều lắm đó. Mong
            rằng chúng ta sẽ đi cùng nhau mãi mãi 🥰
          </p>
          <p style={{ marginTop: "15px" }}>
            Em bé đừng ngần ngại chia sẻ với anh mọi thứ nhé chỉ cần bấm nút
            dưới này thoaiii!! 💌
          </p>
        </div>

        <a
          href="https://www.facebook.com/tkoii.810/?locale=vi_VN"
          className="whatsapp-btn"
          target="_blank"
        >
          Nhắn với chòng iu tại đây nha vợ 💌
        </a>
      </div>
    </>
  );
}

export default App;
