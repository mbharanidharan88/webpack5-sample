import HelloWorldButton from "./components/hello-world-button/hello-world-button";
import Heading from "./components/heading/heading";
import addImage from "./add-image";

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

const heading = new Heading();
heading.render();
// addImage();

if (process.env.NODE_ENV === "production") {
  console.info("Production Mode");
} else if (process.env.NODE_ENV === "development") {
  console.info("Development Mode");
}

helloWorldButton.test();
