// Create hearts effect
export default function createHearts() {
  const hearts = document.querySelector(".hearts");
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  hearts.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}


