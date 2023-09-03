import Heading from "./components/heading/heading";
import ElephantImage from "./components/elephantImage/elephant-image";
import _ from "lodash";

const heading = new Heading();
heading.render(_.upperFirst("elephant"));

const elephantImage = new ElephantImage();
elephantImage.render();
