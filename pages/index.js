import LandingHero2 from "@/components/landingHero";
import * as React from "react";
import Footer from "components/Footer";
import Layout from "@/components/Layout";
import Carousel from "react-material-ui-carousel";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
let menu = [
  { title: "I nostri vinili", url: "/Vinili" },
  { title: "Chi siamo", url: "/siamo" },
  { title: "Contatti", url: "/contatti" },
];
let slides = [
  {
    titolo: "Fatti un bel giro",
    descrizione:
      "Scopri tutti i segreti del nostro Centro con il tour virtuale!",
    immagine: "https://cdn.quinews.net/slir/w1200-h630/images/6/6/66-led-zeppelin.jpg",
    colore: "#ED4C67",
    opacity: 0.5,
    blur: "0.5rem",
    buttonText: "Scopri di più!",
    buttonUrl: "https://www.rollingstone.it/wp-content/uploads/2017/11/h_5.01554779.jpg",
  },
  {
  titolo: "Fatti un bel giro",
    descrizione:
      "Scopri tutti i segreti del nostro Centro con il tour virtuale!",
    immagine: "https://www.rollingstone.it/wp-content/uploads/2017/11/h_5.01554779.jpg",
    colore: "#ED4C67",
    opacity: 0.5,
    blur: "0.5rem",
    buttonText: "Scopri di più!",
    buttonUrl: "https://www.rollingstone.it/wp-content/uploads/2017/11/h_5.01554779.jpg",
  },
  {
    titolo: "Fatti un bel giro",
      descrizione:
        "Scopri tutti i segreti del nostro Centro con il tour virtuale!",
      immagine: "https://www.rollingstone.it/wp-content/uploads/2017/11/h_5.01554779.jpg",
      colore: "#ED4C67",
      opacity: 0.5,
      blur: "0.5rem",
      buttonText: "Scopri di più!",
      buttonUrl: "https://www.rollingstone.it/wp-content/uploads/2017/11/h_5.01554779.jpg",
    },
];
export default function Pagina({ home }) {
  return (
    <Layout>
      <LandingHero2
        siteName="Vinili"
        title="Our work is your best music "
        description=""
        imageUrl="https://www.smartworld.it/images/2022/09/11/vinili-final_1200x675.jpg"
        opacity={0.7}
        buttonText="WATCH VIDEO"
        buttonUrl="https://youtu.be/9n2agI60W_o"
        menu={menu}
        height={80}
      />
      <Carousel slides={slides} maxWidth={false} height="90vh"></Carousel>
    </Layout>
  );
}
