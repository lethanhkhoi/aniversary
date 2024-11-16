// Cần hỗ trợ hãy liên hệ:
// Mr-Nam http://facebook.com/nam.nodemy
// Các bạn muốn học lập trình thì tham gia Nhóm zalo tự học lập trình nhé: https://zalo.me/g/yhdkef092
const nameGirl = "Em bé ngoan xinh iu";
const giftUrl = "";
const eventName = "Tặng vợ yêu của anh";
const titleCard = "Tặng người vợ iu dấu";
const contentCard =
  "Chúc mừng aniversary trễ vợ iu của anh. Mong điều đẹp nhất sẽ đến với em trong hôm nay và cả những ngày sau, mong rằng 2 ta sẽ cùng nhau đi với nhau đến muôn đời, vượt qua mọi thứ cùng nhau em nhé. Anh yêu em nhiều lắm, vợ iu của anh ơi. Mong vợ sẽ vui khi đón nhận món quà này anh yêu em bé nhiều";

const giftImage = "embexinh.jpg";
const base64 = "";
const giftImageBase64 = "data:image/png;base64, " + base64;

let to = nameGirl;
let gift_url = giftUrl;
let gift_image_url = giftImage || giftImageBase64;

const init = () => {
  let nametag = document.getElementById("nametag");
  let present = document.getElementById("present");
  let presentImage = document.getElementById("present-image");

  var graphElem = document.querySelector(".present-box > .side.top .to");
  graphElem.setAttribute("data-before", eventName);
  document.querySelector("#card .title-card").innerHTML = `💘${titleCard}💘`;
  document.querySelector("#card .content-card").innerHTML = `${contentCard}`;
  document.querySelector("#card .honey").setAttribute("src", `${giftImage}`);

  var _giftLink, _giftImg;

  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }

  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    console.log(_giftImg, "Test");
    if (_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else if (presentImage) {
      presentImage.appendChild(_giftImg);
    }
  }

  present.addEventListener(
    "click",
    function (e) {
      present.classList.toggle("open");
      document.getElementById("card").classList.add("card-show");
    },
    false
  );

  nametag.innerText = to;
};

export default init;
