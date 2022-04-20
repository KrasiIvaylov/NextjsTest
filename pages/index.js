

import { Fragment } from "react";
import { Hero } from "../sections";
import { AgencySection } from "../sections";
import {Clients} from "../sections";
import {Contacts} from "../sections";

const brief = <Fragment>Complete <b>brief writing or simple guidance</b> on what to include, weve got you covered.</Fragment>;
const search = <Fragment>Indepth agency search covering <b>criteria matching</b>, door knocking and due-dilligence vetting.</Fragment>;
const pitch = <Fragment>Comprehensive <b>pitch management</b>, including comms, diary management and pitch hosting.</Fragment>;

const placeHolder = <Fragment>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</Fragment>;

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

const agencySectionProps = {
  backgroundImage: { src: "/img/background.png", alt: "background", },
  image: { src: "/img/video.png", alt: "video", width: 200, height: 320 },
  title: "Managed agency selection",
  description: "Stengthen your onboarding process",
  card: [
    { image: { src: "/img/brief.jpg", alt: "brief", width: 30, height: 30 }, title: "Brief", description: brief },
    { image: { src: "/img/search.jpg", alt: "search", width: 30, height: 30 }, title: "Search", description: search },
    { image: { src: "/img/pitch.png", alt: "pitch", width: 30, height: 30 }, title: "Pitch", description: pitch },
  ]
};

const clientsProps = {
  backgroundImage: { src: "/img/background.png", alt: "background", },
  title: "Client Reviews",
  description: "What our clients say",
  card: [
    { image: { src: "/img/nasa.png", alt: "nasa", width: 30, height: 30 }, title: "Nasa", description: placeHolder},
    { image: { src: "/img/spacex.jpg", alt: "spacex", width: 30, height: 30 }, title: "SpaceX", description: placeHolder },
    { image: { src: "/img/google.png", alt: "google", width: 30, height: 30 }, title: "Google", description: placeHolder },
    { image: { src: "/img/netflix.png", alt: "netflix", width: 30, height: 30 }, title: "Nexflix", description: placeHolder },
  ]
};


const contactProps = {
  backgroundImage: { src: "/img/background.png", alt: "background", },
  image: { src: "/img/contact.jpg", alt: "video", width: 200, height: 200 },
  title: "GET IN TOUTCH",
  description: "We are looking forward to start a project with you!",
  card: [
    { image: { src: "/img/call.png", alt: "call", width: 30, height: 30 }, title: "Phone", description: placeHolder },
    { image: { src: "/img/email.jpg", alt: "email", width: 30, height: 30 }, title: "Email", description: placeHolder },
    { image: { src: "/img/address.jpg", alt: "address", width: 30, height: 30 }, title: "Address", description: placeHolder },
  ]
};


export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>

      <div id="Home">
        <Hero {...heroProps} />
      </div>

      <div id="AgencySection">
      <AgencySection {...agencySectionProps} />
      </div>
      <div id="bottom"></div>

      <div id="Clients">
      <Clients {...clientsProps}/>
      </div>

      <div >
      <Contacts {...contactProps}/>
      </div>
    

      <style jsx>{`
        .Home {
          display: flex;
          justify-content: center;
          alig-items: center;
          flex-flow: column wrap;
        }
      `}</style>
    </>
  );
}
