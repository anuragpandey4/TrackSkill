import "nes.css/css/nes.min.css";
import "./CSS/Skills.css";
import { useEffect, useRef, useState } from "react";
import SkillsList from "./SkillsList";

let count = 0;
const Skills = () => {
  const [skills, setSkills] = useState([]);
  const skillInputRef = useRef(null);
  console.log(skills);

  const addSkill = () => {
    setSkills([
      ...skills,
      {
        no: count++,
        text: skillInputRef.current.value,

        progressBar: 4,
      },
    ]);

    skillInputRef.current.value = "";
    localStorage.setItem("skills_count", count);
  };

  useEffect(() => {
    setSkills(JSON.parse(localStorage.getItem("skills")));
    count = localStorage.getItem("skills_count", count);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("skills", JSON.stringify(skills));
    }, 100);
  }, [skills]);

  return (
    <div>
      <div className="skill-input-container">
        <input
          // onKeyDown={handleKeyDown}
          ref={skillInputRef}
          type="text"
          placeholder="skill to improve"
          className="nes-input is-success skill-input"
        />
        <div
          onClick={() => {
            addSkill();
          }}
          className="skill-input-btn nes-btn is-success"
        >
          Add
        </div>
      </div>
      {skills.map((item, index) => {
        return (
          <SkillsList
            key={index}
            setSkills={setSkills}
            no={item.no}
            text={item.text}
            progressBar={item.progressBar}
          />
        );
      })}
    </div>
  );
};

export default Skills;
