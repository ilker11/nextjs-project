import { Hero } from "../sections";
import { Section } from "../sections";

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

const sectionProps = {
  image: { src: "/img/video.png", alt: "", width: 658, height: 1050 },
  title: "Managed agency selection",
  description: "Strengthen your onboarding process",
  cards: [
    {
      icon: "/img/brief.png",
      title: "<strong>Brief</strong>",
      description: "Complete <strong>brief writing for simple guidance</strong> on what to include, we've got you covered",
    },
    {
      icon: "/img/search.png",
      title: "<strong>Search</strong>",
      description: "In-depth agency search covering;<strong>criteria matching,</strong> door knocking and due-dilligence vetting.",
    },
    {
      icon: "/img/pitch.png",
      title: "<strong>Pitch</strong>",
      description: "Comprehensive <strong>pitch management,</strong> including comms, diary management and pitch hosting.",
    }
  ]
};

export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        <Hero {...heroProps} />
        {/** Other sections */}
        <Section {...sectionProps} />
      </div>
    </>
  );
}
