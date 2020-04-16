import React from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

const Services = () => {
  const [services, setServices] = React.useState([
    {
      icon: <FaCocktail />,
      title: "free coctails",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, harum?",
    },
    {
      icon: <FaHiking />,
      title: "endless hiking",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, harum?",
    },
    {
      icon: <FaShuttleVan />,
      title: "free shuttle",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, harum?",
    },
    {
      icon: <FaBeer />,
      title: "finest beer",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, harum?",
    },
  ]);

  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {services.map((item, i) => {
          return (
            <article key={i} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
