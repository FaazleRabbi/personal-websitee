import React from "react";
import { Animated } from "react-animated-css";
import SkillBar from "react-skillbars";

const Skills = () => {
  const SKILLS = [
    {
      type: "Javascript",
      level: 70,
      color: {
        bar: "#3498db",
        title: {
          text: "#fff",
          background: "#2980b9",
        },
      },
    },
    {
      type: "React",
      level: 85,
      color: {
        bar: "#4288d0",
        title: {
          text: "#fff",
          background: "#124e8c",
        },
      },
    },
    {
      type: "Bootstrap",
      level: 75,
      color: {
        bar: "#2c3e50",
        title: {
          text: "#fff",
          background: "#2c3e50",
        },
      },
    },
    {
      type: "Spring",
      level: 50,
      color: {
        bar: "#5a68a5",
        title: {
          text: "#fff",
          background: "#46465e",
        },
      },
    },
    {
      type: "Docker",
      level: 25,
      color: {
        bar: "#525252",
        title: {
          text: "#fff",
          background: "#333333",
        },
      },
    },
    {
      type: "HTML",
      level: 90,
      color: {
        bar: "black",
        title: {
          text: "#111",
          background: "#fff",
        },
      },
    },
    {
      type: "NoSQL",
      level: 40,
      color: {
        bar: "#2ecc71",
        title: {
          text: "#fff",
          background: "#27ae60",
        },
      },
    },
  ];
  return (
    <div>
      <Animated
        animationIn="bounceInRight"
        animationOut="zoomOutDown"
        animationInDuration={2000}
        animationOutDuration={1000}
        isVisible={true}
      >
        <SkillBar skills={SKILLS} />
      </Animated>
    </div>
  );
};

export default Skills;
