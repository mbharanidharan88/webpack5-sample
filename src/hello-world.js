import HelloWorldButton from "./components/hello-world-button/hello-world-button";
import Heading from "./components/heading/heading.js";
import addImage from "./add-image";
import _ from "lodash";

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

const heading = new Heading();
heading.render(_.upperFirst("hello World"));
// addImage();

if (process.env.NODE_ENV === "production") {
  console.info("Production Mode");
} else if (process.env.NODE_ENV === "development") {
  console.info("Development Mode");
}

helloWorldButton.test();
