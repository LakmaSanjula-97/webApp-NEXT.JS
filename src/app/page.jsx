import Intro from "../components/intro/Intro";
import Service from "../components/service/Service";
import Contact from "../components/contact/contactBlock";
import Technology from "../components/technology/Technology";
import Description from "../components/Description/Description";

export default function Home() {
  return (
    <div>
      <Intro />
      <Service />
      <Technology />
      <Description />
      <Contact />
    </div>
  );
}
