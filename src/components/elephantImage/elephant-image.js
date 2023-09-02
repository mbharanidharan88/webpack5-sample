import elephant from "./elephant.jpg";
import "./elephant-image.scss";

class ElephantImage {
  render() {
    const img = document.createElement("img");

    img.src = elephant;
    img.alt = "Manju";
    img.classList.add("elephant-image");

    const body = document.querySelector("body");
    body.appendChild(img);
  }
}

export default ElephantImage;
