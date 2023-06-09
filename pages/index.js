import LandingHero2 from "@/components/landingHero";
import * as React from "react";
import Footer from "components/Footer";
import Layout from "@/components/Layout";
import Carousel from "components/Carousel";
import Features from "components/Features";
import Products from "/components/Products";
import Paragraph from "components/Paragraph";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
let menu = [
  { title: "I nostri vinili", url: "/vinili" },
  { title: "Chi siamo", url: "/siamo" },
  { title: "Contatti", url: "/contatti" },
];
let features = [
  {
    imageUrl:
      "data:image/png;base64,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",
    title: "Prodotti Certificati",
  },
  {
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/010/310/905/original/product-road-map-icon-on-white-background-project-development-roadmapping-sign-road-map-plan-symbol-flat-style-vector.jpg",
    title: "Spedizioni Veloci",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYlsy7ET9WLwDYCR5KhXvZcqy-lAzeTWXfw&usqp=CAU",
    title: "Rivenditori Qualificati",
  },
];

let products = [
  {
    title: " Accessori",
    immagineUrl:
      "data:image/jpeg;base64,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",
  },
  {
    title: "Tutti i nostri album",
    immagineUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_hCqRqZvo0-UCNFnaNbw5TjAtx2jHeW1_Dw&usqp=CAU",
  },
  {
    title: "Vinili",
    immagineUrl:
      "https://cloud.rtl.it/RTLFM/News/Article/1000xH/vinili-sempre-pia-ricercati-nel-2021-le-vendite-degli-lp-superano-quelle-dei-cd-non-succedeva-da-3-wide-site-rth21.jpg",
  },
];

let slides = [
  {
    titolo: "Nuovo album dei LED ZEPPELIN",
    immagine:
      "https://video-images.vice.com/articles/5b72a21ab3c9b70008698c4d/lede/1534412002405-led-zeppelin-aereo.jpeg?crop=1xw:0.5145xh;0xw,0.274xh",
    colore: "",
    opacity: 0.2,
    blur: "0.1rem",
    buttonText: "Scopri di più!",
    buttonUrl: "https:...",
  },
  {
    titolo: "Nuovo album dei KISS",
    immagine:
      "https://americansongwriter.com/wp-content/uploads/2023/05/Dave-Grohl-GettyImages-1464908574.jpg?fit=2000%2C800",
    colore: "",
    opacity: 0.2,
    blur: "0.1rem",
    buttonText: "Scopri di più!",
    buttonUrl: "https:...",
  },
  {
    titolo: "Nuovo album dei KISS",
    immagine:
      "https://americansongwriter.com/wp-content/uploads/2022/08/The-Rolling-stones-GettyImages-119058636.jpg?fit=2000%2C800",
    colore: "",
    opacity: 0.2,
    blur: "0.1rem",
    buttonText: "Scopri di più!",
    buttonUrl: "https:...",
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
        opacity={0.5}
        buttonText="WATCH VIDEO"
        buttonUrl="https://youtu.be/9n2agI60W_o"
        menu={menu}
        height={800}
      />
      <Carousel slides={slides} maxWidth={false}></Carousel>
      <Features
        title="Why our product is the best"
        features={features}
        cardWidth={4}
      />
      <Products
        title="Some of Our Awesome Products"
        products={products}
        cardWidth={4}
        borderRadius="10px"
      />
      <Paragraph
        title="La nostra attività"
        subtitle="La fondazione"
        //topImageUrl="https..."
        avatarImageUrl="https://www.rockon.it/wp-content/uploads/2012/07/skardy.jpg"
        //leftImageUrl="https..."
        //rightImageUrl="https..."
        backgroundImageUrl="https://cdn.dday.it/system/uploads/news/main_image/18800/main_aper.jpg"
        //backgroundColor="#225533"
        opacity={0.8}
        blur="0.2rem"
        color="white"
        columnCount={1}
        maxWidth="lg"
        sx={{}}
      >
        Ami la musica e vorresti avvicinarti a questo appassionante mondo? Sei
        un musicista alle prime armi e ti piacerebbe perfezionare la tua
        tecnica? Oppure suoni da sempre, ma pensi che nella vita non si smetta
        mai di imparare? Sono numerose le possibilità per coltivare con enorme
        entusiasmo questa grande e coinvolgente passione. Le alternative sono
        veramente molteplici: scuole di musica che propongono ogni anno numerose
        iniziative, i più svariati corsi di musica dove apprendere ed imparare
        tecniche e nozioni nuove, scuole di musica e canto rinomate in tutto il
        Paese e - infine - insegnanti di musica che, con impegno e preparazione,
        sapranno affiancarti in questa splendida avventura. C'è solo l'imbarazzo
        della scelta per iniziare ad intraprendere questo percorso con amore ed
        impegno.
      </Paragraph>
    </Layout>
  );
}
