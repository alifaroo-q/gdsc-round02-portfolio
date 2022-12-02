import React from "react";
import { MdBrush, MdEditCalendar, MdPiano } from "react-icons/md";
import Card from "./Card";
import data from "./serviceExperienceData";
import "./index.css";

const serviceElements = data.map((service) => {
  if (service.active) {
    if (service.icon === "brush") {
      return (
        <Card
          key={service.icon}
          title={service.title}
          text={service.text}
          active={service.active}
        >
          <MdBrush
            className={service.active ? "text-white" : "text-red-500"}
            size="50"
          />
        </Card>
      );
    } else if (service.icon === "edit") {
      return (
        <Card
          key={service.icon}
          title={service.title}
          text={service.text}
          active={service.active}
        >
          <MdEditCalendar
            className={service.active ? "text-white" : "text-red-500"}
            size="50"
          />
        </Card>
      );
    } else {
      return (
        <Card
          key={service.icon}
          title={service.title}
          text={service.text}
          active={service.active}
        >
          <MdPiano
            className={service.active ? "text-white" : "text-red-500"}
            size="50"
          />
        </Card>
      );
    }
  } else {
    if (service.icon === "brush") {
      return (
        <Card
          key={service.icon}
          title={service.title}
          text={service.text}
          active={service.active}
        >
          <MdBrush
            className={service.active ? "text-white" : "text-red-500"}
            size="50"
          />
        </Card>
      );
    } else if (service.icon === "edit") {
      return (
        <Card
          key={service.icon}
          title={service.title}
          text={service.text}
          active={service.active}
        >
          <MdEditCalendar
            className={service.active ? "text-white" : "text-red-500"}
            size="50"
          />
        </Card>
      );
    } else {
      return (
        <Card
          key={service.icon}
          title={service.title}
          text={service.text}
          active={service.active}
        >
          <MdPiano
            className={service.active ? "text-white" : "text-red-500"}
            size="50"
          />
        </Card>
      );
    }
  }
});

const ServicesExperience = () => {
  return (
    <main
      id="main-service-area"
      className="mt-24 md:mt-44 mx-5 md:grid md:grid-cols-3 md:gap-3"
    >
      {serviceElements}
    </main>
  );
};

export default ServicesExperience;
